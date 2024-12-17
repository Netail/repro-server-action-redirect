import { redirect } from "next/navigation";

const ok = true;

export async function createPaymentRequest(
    _: {
        message: string | null;
    },
    _formData: FormData,
) {
    if (ok) {
        redirect('https://google.com/');
    }

    return {
        message: '',
    }
}
