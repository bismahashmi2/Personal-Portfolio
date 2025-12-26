import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST(req: NextRequest) {
  const contactEmail = process.env.CONTACT_EMAIL;
  const resend = new Resend(process.env.RESEND_API_KEY); 

  // 1. Environment validation (EARLY RETURN)
  if (!contactEmail || !resend) {
    return NextResponse.json(
      { error: "Server email configuration is missing." },
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = await req.json();

    // 2. Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // 3. Send the email
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: contactEmail,
      subject: `New message from ${name} on your portfolio`,
      html: `
        <div>
          <h1>New Message from your Portfolio</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });



    return NextResponse.json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'An unknown error occurred.' }, { status: 500 });
  }
}
