import React, { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { Navigate } from "react-router";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSuccess(true);
    emailjs
      .sendForm(
        "service_if0mumh",
        "template_sc89v86",
        form.current,
        "l7C927l7oG81bVDXX"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.href = "/success";
          setSuccess(false);
        },
        (error) => {
          console.log(error.text);
          window.location.href = "/error";
          setSuccess(false);
        }
      );
  };

  return (
    <SectionWrapper>
      <div className="mb-10">
        <h2
          id="contact_header"
          className="text-3xl font-extrabold text-platinum dark:text-night mb-4"
        >
          Contact Me
        </h2>
        <p
          className="text-gray-500 dark:text-gray-200 text-justify mt-4"
          aria-labelledby="contact_header"
        >
          You can reach me through the following form:
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5 w-full">
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input type="hidden" name="form-name" value="contact" />
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                name="from_name"
                required
                aria-required="true"
                placeholder="enter your name here..."
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                name="from_email"
                required
                aria-required="true"
                placeholder="enter your email here..."
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
                id="message"
                name="from_message"
                required
                aria-required="true"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="Send"
                aria-label="Send message"
              >
                {success ? "Sending..." : "Send"}
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
