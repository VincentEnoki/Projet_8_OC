import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  const form = useRef();
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const [isSent, setIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          form.current.reset();
          setIsSent(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="flex flex-col items-center mt-28 gap-8 w-full">
      <p className="text-blue-500 text-2xl md:mb-8">Me contacter</p>
      <div className="flex flex-col-reverse md:flex-row items-center w-full">
        <div className="w-full md:w-1/2 flex flex-col items-center gap-8">
          <article className="w-[90%] lg:w-1/2 flex flex-col items-center gap-4 bg-[#2c2c6c] p-8 rounded-lg border border-transparent hover:border-blue-400 hover:bg-transparent transition duration-300 ease-in-out">
            <MdOutlineEmail size={24} />
            <p>Email</p>
            <p>vincent.bouchard92@gmail.com</p>
            <a
              className="text-blue-400 hover:text-white transition duration-300 ease-in-out"
              href="mailto:vincent.bouchard92@gmail.com"
              target="_blank"
            >
              Envoyer un email
            </a>
          </article>
          <article className="w-[90%] lg:w-1/2 flex flex-col items-center gap-4 bg-[#2c2c6c] p-8 rounded-lg border border-transparent hover:border-blue-400 hover:bg-transparent transition duration-300 ease-in-out">
            <BsLinkedin size={24} />
            <p>Linkedin</p>
            <a
              className="text-blue-400 hover:text-white transition duration-300 ease-in-out"
              href="https://www.linkedin.com/in/bouchard-vincent/"
              target="_blank"
            >
              Se connecter sur LinkedIn
            </a>
          </article>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <form
            className="flex flex-col gap-6 justify-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="bg-transparent border border-blue-500 p-4 rounded-lg"
              placeholder="Votre nom et prénom"
              type="text"
              name="user_name"
            />
            <input
              className="bg-transparent border border-blue-500 p-4 rounded-lg"
              placeholder="Votre email"
              type="email"
              name="user_email"
            />
            <textarea
              className="bg-transparent border border-blue-500 p-4 rounded-lg"
              placeholder="Votre message"
              name="message"
            />
            {isSent && (
              <p className="text-green-500 text-center">
                Votre message a bien été envoyé
              </p>
            )}
            <input
              className="cursor-pointer w-fit text-background text-lg bg-blue-500 px-4 py-2 rounded-md hover:bg-white hover:border-blue-500 transition duration-300 ease-in-out"
              type="submit"
              value="Envoyer votre message"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
