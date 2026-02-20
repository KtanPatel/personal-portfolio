import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export type ContactFormInputs = {
  senderEmail: string;
  senderName: string;
  message: string;
  ip: string;
};
