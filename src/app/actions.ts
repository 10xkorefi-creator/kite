"use server";

// Optional CRM/newsletter endpoint. When unset, the payload is logged so the
// submission (and its utm_source) is still observable in development.
const NEWSLETTER_ENDPOINT = process.env.NEWSLETTER_ENDPOINT;

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email");

  if (typeof email !== "string" || email.trim() === "") {
    return;
  }

  const payload = {
    email: email.trim(),
    utm_source: "website chatbot",
  };

  if (NEWSLETTER_ENDPOINT) {
    await fetch(NEWSLETTER_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } else {
    console.log("[newsletter] subscription payload", payload);
  }
}

