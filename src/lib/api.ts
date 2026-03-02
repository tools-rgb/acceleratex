// Google Sheets API Integration
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbztwBhXokdHZYPM2Eotqr3DYFE22heL_MMDeRuSTE1W052aLp7uD-tglxXSbwn4CRn_WA/exec';

interface FormSubmissionData {
  formType: 'enquiry' | 'contact' | 'freeTool';
  name: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  toolName?: string;
  source?: string;
}

export async function submitToGoogleSheets(data: FormSubmissionData): Promise<{ success: boolean; message: string }> {
  try {
    const formBody = new URLSearchParams();
    (Object.entries(data) as Array<[string, unknown]>).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      formBody.set(key, String(value));
    });

    // In production (GitHub Pages/custom domains), Google Apps Script often won't provide
    // CORS headers, which prevents us from reading the response and causes scary console errors.
    // We therefore send the request "fire-and-forget".
    if (import.meta.env.PROD) {
      // Prefer sendBeacon when available (designed for cross-origin, no-response submissions).
      if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
        const queued = navigator.sendBeacon(GOOGLE_SHEETS_URL, formBody);
        if (!queued) {
          return { success: false, message: 'Unable to submit right now. Please try again.' };
        }
        return { success: true, message: 'Submitted successfully.' };
      }

      // Fallback: fetch without CORS. This submits, but we cannot confirm success.
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody,
      });

      return { success: true, message: 'Submitted successfully.' };
    }

    // In development, attempt a normal fetch so you can actually see failures.
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      body: formBody,
    });

    if (!response.ok) {
      return { success: false, message: `Submission failed (HTTP ${response.status}).` };
    }

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const result = (await response.json()) as { status?: string; message?: string };
      if (result.status === 'success') return { success: true, message: result.message ?? 'Submitted successfully.' };
      return { success: false, message: result.message || 'Submission failed' };
    }

    return { success: true, message: 'Submitted successfully.' };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
}
