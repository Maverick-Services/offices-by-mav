import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();

        await resend.emails.send({
            from: 'info@officesbymav.com',
            to: 'info@officesbymav.com',
            subject: `New Contact Form Submission`,
            html: `
        <h2>Contact Form Submission</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Company:</b> ${body.company}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.phone}</p>
        <p><b>Alternate Phone:</b> ${body.altPhone}</p>
        <p><b>State:</b> ${body.state}</p>
        <p><b>City:</b> ${body.city}</p>
      `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error }), { status: 500 });
    }
}