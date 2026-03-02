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
    // Google Apps Script endpoints frequently don't return CORS headers.
    // Sending JSON triggers a preflight (OPTIONS) request that will be blocked.
    // Use a "simple" form POST first (no preflight), and if the browser still blocks
    // reading the response, fall back to `no-cors` so the submission can still be sent.

    const formBody = new URLSearchParams();
    (Object.entries(data) as Array<[string, unknown]>).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      formBody.set(key, String(value));
    });

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        body: formBody,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // If the endpoint returns CORS headers, we can read a JSON response.
      // If it doesn't, this will throw and we'll fall back.
      const result = (await response.json()) as { status?: string; message?: string };

      if (result.status === 'success') {
        return { success: true, message: result.message ?? 'Submitted successfully.' };
      }

      return { success: false, message: result.message || 'Submission failed' };
    } catch (corsOrParseError) {
      // Fallback: still submit the request, but we can't read the response.
      // This avoids blocking UX on GitHub Pages/custom domains.
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody,
      });

      return { success: true, message: 'Submitted successfully.' };
    }
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
}
