import React, { useState } from "react";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) =>
    setFormState({ ...formState, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your message, ${formState.name}`);
  };

  return (
    <SectionWrapper>
      <div className="mb-10">
        <h2
          id="contact_header"
          className="text-3xl font font-extraBold text-platinum dark:text-night mb-4"
        >
          Contact Me
        </h2>
        <p
          className="text-gray-400 dark:text-gray-800 text-justify mt-4"
          aria-labelledby="contact_header"
        >
          You can reach me through the following form:
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-5">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="w-full max-w-lg"
          onSubmit={handleSubmit}
        >
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
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
                name="message"
                value={formState.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
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
