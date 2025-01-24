import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/verificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  userName: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "mystery message || Verification code",
      react: VerificationEmail({ userName, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Verification email successfully",
    };
  } catch (emailError) {
    console.log("Error sending verification email", emailError);
    return {
      success: false,
      message: "Failed to send verification message",
    };
  }
}
