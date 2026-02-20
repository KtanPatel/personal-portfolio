import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
  ip: string;
  extra: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
  ip,
  extra,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
              <Text>The sender's name is: {senderName}</Text>
              <Text>IP: {ip}</Text>
              <Text>extra: {extra}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
