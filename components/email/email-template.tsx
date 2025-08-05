import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const ContactResponseEmail = (props: any) => {
  const { firstName = "there", message = "" } = props;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Thanks for reaching out! I'll get back to you soon.</Preview>
        <Body className="bg-white font-sans">
          <Container className="max-w-[600px] mx-auto py-[80px] px-[20px]">
            {/* Decorative top element */}
            <Section className="text-center mb-[48px]">
              <div className="flex items-center justify-center gap-[8px] mb-[40px]">
                <div className="w-[40px] h-[1px] bg-gradient-to-r from-transparent to-gray-300"></div>
                <div className="w-[8px] h-[8px] rounded-full bg-gray-900"></div>
                <div className="w-[40px] h-[1px] bg-gradient-to-l from-transparent to-gray-300"></div>
              </div>
              
              <Heading className="text-[32px] font-light text-gray-900 m-0 tracking-[-0.03em] leading-[1.2]">
                Message Received
              </Heading>
              <Text className="text-[14px] text-gray-500 mt-[8px] m-0 tracking-[0.1em] uppercase">
                Confirmation
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[48px]">
              <Text className="text-[17px] text-gray-900 mb-[32px] leading-[1.6] m-0">
                Hi {firstName},
              </Text>

              <Text className="text-[16px] text-gray-600 mb-[36px] leading-[1.7] m-0">
                Thank you for taking the time to reach out. Your message has been successfully delivered, and I appreciate your interest in connecting.
              </Text>

              {/* Message Display */}
              {message && (
                <Section className="mb-[40px]">
                  <div className="relative">
                    {/* Decorative quote marks */}
                    <div className="absolute -top-[8px] -left-[4px] text-[48px] text-gray-200 font-serif leading-none select-none">
                      "
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-[12px] px-[32px] py-[24px] relative">
                      <Text className="text-[15px] text-gray-700 leading-[1.7] m-0 italic">
                        {message}
                      </Text>
                    </div>
                  </div>
                </Section>
              )}

              <Text className="text-[16px] text-gray-600 mb-[40px] leading-[1.7] m-0">
                I'll review your message carefully and respond within 24-48 hours with a thoughtful reply.
              </Text>

              {/* Signature */}
              <Section>
                <div className="border-t border-gray-100 pt-[32px]">
                  <Text className="text-[16px] text-gray-600 leading-[1.6] m-0">
                    Best regards,
                  </Text>
                  <Text className="text-[18px] text-gray-900 font-medium mt-[4px] m-0">
                    Grenish Rai
                  </Text>
                </div>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="text-center">
              <div className="flex items-center justify-center gap-[12px] mb-[24px]">
                <div className="w-[60px] h-[1px] bg-gradient-to-r from-transparent to-gray-200"></div>
                <div className="w-[4px] h-[4px] rounded-full bg-gray-300"></div>
                <div className="w-[60px] h-[1px] bg-gradient-to-l from-transparent to-gray-200"></div>
              </div>
              <Text className="text-[13px] text-gray-400 leading-[1.5] m-0">
                This is an automated response confirming receipt of your message
              </Text>
              <Text className="text-[13px] text-gray-400 mt-[4px] m-0">
                <span className="text-gray-500">grenishrai.icu</span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// ContactResponseEmail.PreviewProps = {
//   firstName: "Alex",
//   message: "Looking forward to your response!",
// };

export default ContactResponseEmail;