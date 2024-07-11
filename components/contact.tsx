"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useForm, SubmitHandler } from "react-hook-form";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { ContactFormInputs } from "@/lib/types";
import { profile } from "@/lib/data";
import { MdInfo } from "react-icons/md";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();
  const onSubmit: SubmitHandler<ContactFormInputs> = async (
    formData: ContactFormInputs
  ) => {
    const ip = await fetch("https://api.ipify.org")
      .then((res) => res.text())
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        return "unknown";
      });
    console.log({ ip });

    const { data, error } = await sendEmail({ ...formData, ip });

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
    reset();
  };
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          placeholder="Your email"
          {...register("senderEmail", {
            required: "Please enter your email",
            maxLength: 50,
            pattern: /^\S+@\S+$/i,
          })}
          aria-invalid={errors.senderEmail ? "true" : "false"}
        />
        {errors?.senderEmail && (
          <p className="text-sm text-red-500 self-start">
            {errors?.senderEmail.message}
          </p>
        )}
        <input
          className="h-14 px-4 mt-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="text"
          placeholder="Your full name"
          {...register("senderName", {
            required: "Please enter your name",
            maxLength: 50,
          })}
          aria-invalid={errors.senderName ? "true" : "false"}
        />
        {errors?.senderName && (
          <p className="text-sm text-red-500 self-start">
            {errors?.senderName.message}
          </p>
        )}
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          {...register("message", {
            required: "Please enter a message",
            maxLength: 500,
          })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors?.message && (
          <p className="text-sm text-red-500 self-start">
            {errors?.message.message}
          </p>
        )}

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
