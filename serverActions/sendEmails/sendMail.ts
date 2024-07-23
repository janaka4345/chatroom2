'use server';
import { transporter } from '@/utils/nodemailer';

type registerEmail = {
    to: string;
    subject: string;
    text: string;
    html: string;
};
export default async function sendEmail(values: registerEmail) {
    await transporter.sendMail({
        from: `Manendri Kariyawasam <${process.env.Email}>`,
        to: values.to,
        subject: values.subject,
        text: values.text,
        html: values.html,
    });
}
