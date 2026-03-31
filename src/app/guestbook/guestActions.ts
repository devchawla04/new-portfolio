"use server";
import client from "@/lib/db";
import axios from "axios";

interface Signtypes {
  name: string;
  email: string;
  message: string;
  signature: string;
}

interface MailboxLayerResponse {
  success?: boolean;
  format_valid?: boolean;
  mx_found?: boolean;
  smtp_check?: boolean;
  role?: boolean;
  disposable?: boolean;
}

export async function validateEmail(email: string): Promise<boolean> {
  const normalizedEmail = email.trim().toLowerCase();
  const hasBasicFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

  // Fast fail for obviously malformed addresses.
  if (!hasBasicFormat) {
    return false;
  }

  // Step 1: Check if the email already exists in the database
  const existingEmail = await client.guestbookEntry.findFirst({
    where: { email: normalizedEmail },
  });

  if (existingEmail) {
    return true;
  }

  // Step 2: Proceed with external API validation if the email is not in the database

  // via abstract api or mailboxlayer

  // using mailboxlayer
  const apiKey = process.env.MAILBOXLAYER_API_KEY;
  if (!apiKey) {
    console.error("MAILBOXLAYER_API_KEY is missing.");
    return hasBasicFormat;
  }

  try {
    const response = await axios.get<MailboxLayerResponse>(
      "https://apilayer.net/api/check",
      {
        params: {
          access_key: apiKey,
          email: normalizedEmail,
          smtp: 1,
          format: 1,
        },
        timeout: 10000,
      }
    );

    const emailData = response.data;

    if (emailData.success === false) {
      // If provider is unavailable or quota-limited, do not block a syntactically valid address.
      return hasBasicFormat;
    }

    if (emailData.format_valid === false) {
      return false;
    }

    const hasMxRecord = emailData.mx_found ?? true;
    const smtpLooksOkay = emailData.smtp_check ?? true;
    const isNotDisposable = emailData.disposable !== true;

    const isValid =
      hasBasicFormat &&
      hasMxRecord &&
      smtpLooksOkay &&
      isNotDisposable;

    return isValid;
  } catch (error) {
    console.error("Error validating email:", error);
    return hasBasicFormat;
  }
}

export const submitSignature = async (formData: Signtypes) => {
  //
  try {
    const response = await client.guestbookEntry.create({
      data: {
        name: formData.name,
        email: formData.email.trim().toLowerCase(),
        message: formData.message,
        signature: formData.signature,
      },
    });
    return response;
  } catch (error) {
    console.error("Error submitting signature:", error);
    throw new Error("Failed to submit signature");
  }
};

//fetch post
export async function fetchPosts() {
  try {
    const posts = await client.guestbookEntry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}
