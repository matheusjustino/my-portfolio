import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  const { name, phone, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_FROM,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
    secure: true,
  });

  transporter.sendMail(
    {
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject,
      text: `Nova mensagem de ${name},
Telefone para contato: ${phone}
Email para contato: ${email}

${message}
`,
    },
    function (err, inf) {
      if (err) {
        res.status(400).end(JSON.stringify({ message: err }));
      } else {
        res.status(200).end(JSON.stringify({ message: "Email enviado!" }));
      }

      return;
    }
  );
}
