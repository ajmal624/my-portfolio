import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);

          alert(
            "Thank you. I will get back to you as soon as possible."
          );

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="flex flex-col gap-10 overflow-hidden xl:mt-12">

      {/* =====================================================
          CONTACT INFORMATION BUTTONS
      ====================================================== */}

      <motion.div
        variants={slideIn("left", "tween", 0.1, 1)}
        className="flex flex-wrap justify-center gap-4"
      >
        {/* EMAIL */}
        <a
          href="mailto:mohammedajmalajmal2003@gmail.com"
          className="flex items-center gap-3 rounded-xl bg-tertiary px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#915EFF]"
        >
          <span className="text-xl">✉</span>
          <span>Email</span>
        </a>

        {/* PHONE */}
        <a
          href="tel:+919597611364"
          className="flex items-center gap-3 rounded-xl bg-tertiary px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#915EFF]"
        >
          <span className="text-xl">☎</span>
          <span>Phone</span>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/ajmal624"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl bg-tertiary px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#915EFF]"
        >
          <span className="text-xl">⌘</span>
          <span>GitHub</span>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/mohammed-ajmal-6218a3337"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl bg-tertiary px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#915EFF]"
        >
          <span className="text-xl font-bold">in</span>
          <span>LinkedIn</span>
        </a>

        {/* RESUME */}
        <a
          href="/resume.pdf"
          download="Mohammed_Ajmal_Resume.pdf"
          className="flex items-center gap-3 rounded-xl bg-[#915EFF] px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#7c4ee8]"
        >
          <span className="text-xl">📄</span>
          <span>Resume</span>
        </a>
      </motion.div>

      {/* =====================================================
          CONTACT FORM + EARTH
      ====================================================== */}

      <div className="flex flex-col-reverse gap-10 xl:flex-row">

        {/* ===================================================
            CONTACT FORM
        ==================================================== */}

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <Header useMotion={false} {...config.contact} />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {Object.keys(config.contact.form).map((input) => {
              const { span, placeholder } =
                config.contact.form[
                  input as keyof typeof config.contact.form
                ];

              const Component =
                input === "message" ? "textarea" : "input";

              return (
                <label key={input} className="flex flex-col">
                  <span className="mb-4 font-medium text-white">
                    {span}
                  </span>

                  <Component
                    type={input === "email" ? "email" : "text"}
                    name={input}
                    value={form[input as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
                    {...(input === "message" && {
                      rows: 7,
                    })}
                  />
                </label>
              );
            })}

            {/* SEND BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none transition-all duration-300 hover:bg-[#915EFF] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* ===================================================
            EARTH CANVAS
        ==================================================== */}

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");