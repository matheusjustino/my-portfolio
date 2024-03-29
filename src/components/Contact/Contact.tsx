/* eslint-disable @next/next/no-img-element */
import { useState, memo } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { useAlert } from "react-alert";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

// COMPONENTS
import { Loading } from "@components/Loading/Loading";

export interface FormFields {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = memo(() => {
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  const contactImgUrl =
    "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80";

  const isFormValid = (formValues: FormFields) => {
    return Object.values(formValues).reduce((prev, curr) => {
      return !!curr && prev;
    }, true);
  };

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();

    const formValues: FormFields = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    if (!isFormValid(formValues)) {
      alert.info("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      const apiResponse = await emailjs.sendForm(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        event.target,
        process.env.EMAILJS_PUBLIC_KEY!
      );

      if (apiResponse.status >= 400) {
        console.log(apiResponse.text);
        alert.error("Erro ao tentar enviar o email");
      } else {
        alert.show("Email enviado com sucesso");
      }
    } catch (error) {
      console.log(error);
      alert.error("Erro ao tentar enviar o email");
    } finally {
      event.target.reset();
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      {loading ? <Loading /> : null}

      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="mt-8 text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/** left side */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImgUrl}
                  alt="Imagem da tela de contato que mostra alguém digitando em um notebook"
                />
              </div>

              <div>
                <h2 className="py-2">Matheus Henrique</h2>
                <p>Fullstack Developer</p>
                <p className="py-4">{`Contact me and let's talk.`}</p>
              </div>

              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/matheus-henrique-fernandes-justino/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://github.com/matheusjustino"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="#contact">
                      <AiOutlineMail />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="#contact">
                      <BsFillPersonLinesFill />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/** right side */}
          <div className="col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleOnSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-r rounded-lg p-3 border-gray-300"
                    rows={10}
                    name="message"
                  ></textarea>
                </div>

                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export { Contact };
