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
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.status === 'success') {
      return { success: true, message: result.message };
    } else {
      return { success: false, message: result.message || 'Submission failed' };
    }
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
}
