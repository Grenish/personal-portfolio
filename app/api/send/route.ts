import { Resend } from 'resend';
import ContactResponseEmail from '@/components/email/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return Response.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const firstName = name.split(' ')[0];

        const { data, error } = await resend.emails.send({
            from: 'Hello <hello@grenishrai.icu>',
            to: [email],
            subject: 'Thanks for reaching out!',
            react: ContactResponseEmail({ firstName, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}