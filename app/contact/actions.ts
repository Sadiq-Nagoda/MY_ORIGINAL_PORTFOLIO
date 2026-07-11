"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Every field is required." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fails clearly rather than pretending to succeed — this is expected
    // until a real RESEND_API_KEY is set in .env.local (see .env.example).
    return {
      status: "error",
      message: "The contact form isn't connected yet — email directly instead.",
    };
  }

  const resend = new Resend(apiKey);
  const receivingEmail = process.env.CONTACT_RECEIVING_EMAIL ?? "sadiqnagoda1848@gmail.com";

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: receivingEmail,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: message,
    });
    return { status: "success", message: "Message sent — thank you." };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending that. Try emailing directly instead.",
    };
  }
}
