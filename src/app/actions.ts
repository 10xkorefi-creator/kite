"use server";

import nodemailer from "nodemailer";

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

interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  message: string;
}

interface ApplyFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  businessName: string;
  loanAmount: string;
  prefilledProduct?: string | null;
}

export async function sendContactForm(data: ContactFormData) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const fromEmail = process.env.SMTP_FROM_EMAIL || user;

  const mailContent = `
    <h2>New Contact Us Inquiry</h2>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName || ""}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `;

  const textContent = `
    New Contact Us Inquiry
    Name: ${data.firstName} ${data.lastName || ""}
    Email: ${data.email}
    Phone: ${data.phone || "N/A"}
    Message:
    ${data.message}
  `;

  if (host && port && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port: parseInt(port),
        secure: port === "465",
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"Kite Finance Contact Form" <${fromEmail}>`,
        to: "it@kitefinance.in",
        subject: `New Contact Form Submission from ${data.firstName}`,
        text: textContent,
        html: mailContent,
      });

      return { success: true };
    } catch (error: any) {
      console.error("[SMTP Error] Failed to send contact form email:", error);
      throw new Error(error.message || "Failed to send email");
    }
  } else {
    console.log("[SMTP Fallback] SMTP not configured. Storing/logging Contact Form:", data);
    return { success: true, logged: true };
  }
}

export async function sendApplyForm(data: ApplyFormData) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const fromEmail = process.env.SMTP_FROM_EMAIL || user;

  const mailContent = `
    <h2>New Loan Application</h2>
    <p><strong>Product:</strong> ${data.prefilledProduct || "General Funding"}</p>
    <p><strong>Applicant Name:</strong> ${data.firstName} ${data.lastName || ""}</p>
    <p><strong>Business Email:</strong> ${data.email}</p>
    <p><strong>Mobile Number:</strong> ${data.phone}</p>
    <p><strong>Registered Business Name:</strong> ${data.businessName}</p>
    <p><strong>Requested Funding Amount:</strong> ${data.loanAmount}</p>
  `;

  const textContent = `
    New Loan Application
    Product: ${data.prefilledProduct || "General Funding"}
    Applicant Name: ${data.firstName} ${data.lastName || ""}
    Business Email: ${data.email}
    Mobile Number: ${data.phone}
    Registered Business Name: ${data.businessName}
    Requested Funding Amount: ${data.loanAmount}
  `;

  if (host && port && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port: parseInt(port),
        secure: port === "465",
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"Kite Finance Loan App" <${fromEmail}>`,
        to: "it@kitefinance.in",
        subject: `New Loan Application: ${data.businessName} (${data.loanAmount})`,
        text: textContent,
        html: mailContent,
      });

      return { success: true };
    } catch (error: any) {
      console.error("[SMTP Error] Failed to send apply form email:", error);
      throw new Error(error.message || "Failed to send email");
    }
  } else {
    console.log("[SMTP Fallback] SMTP not configured. Storing/logging Apply Form:", data);
    return { success: true, logged: true };
  }
}

