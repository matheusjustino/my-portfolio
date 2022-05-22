import { FormFields } from "@components/Contact/Contact";

export const sendMail = async (data: FormFields): Promise<number> => {
  try {
    const resp = await fetch("/api/mailer", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return resp.status;
  } catch (error) {
    console.log(error);
    return 400;
  }
};
