import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, privacy } = body;

    // Validate required fields
    if (!name || !email || !phone || !message || !privacy) {
      return NextResponse.json(
        { error: "Alle Pflichtfelder müssen ausgefüllt werden" },
        { status: 400 }
      );
    }

    // In production, this would send an email via SMTP or a service like SendGrid
    // For now, we'll just log it and return success
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement email sending
    // Example with nodemailer or SendGrid:
    // await sendEmail({
    //   to: process.env.CONTACT_TO || 'info@alsterfacility.de',
    //   from: process.env.CONTACT_FROM || 'web@alsterfacility.de',
    //   subject: `Neue Kontaktanfrage von ${name}`,
    //   html: `
    //     <h2>Neue Kontaktanfrage</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Firma:</strong> ${company || 'Nicht angegeben'}</p>
    //     <p><strong>E-Mail:</strong> ${email}</p>
    //     <p><strong>Telefon:</strong> ${phone}</p>
    //     <p><strong>Nachricht:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: "Ihre Nachricht wurde erfolgreich versendet" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
