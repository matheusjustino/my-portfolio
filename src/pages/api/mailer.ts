import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  const { name, phone, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: Number(process.env.REACT_APP_SMTP_PORT),
    host: process.env.REACT_APP_SMTP_HOST,
    auth: {
      user: process.env.REACT_APP_EMAIL_FROM,
      pass: process.env.REACT_APP_EMAIL_PASS,
    },
    secure: true,
  });

  transporter.sendMail(
    {
      from: process.env.REACT_APP_EMAIL_FROM,
      to: process.env.REACT_APP_EMAIL_TO,
      subject,
      text: `Nova mensagem de ${name},
Telefone para contato: ${phone}
Email para contato: ${email}

${message}
`,
    },
    function (err, inf) {
      if (err) {
        console.log({ err });
        res
          .status(400)
          .end(JSON.stringify({ message: "Erro ao tentar enviar o email" }));
      } else {
        res.status(200).end(JSON.stringify({ message: "Email enviado!" }));
      }

      return;
    }
  );
}
