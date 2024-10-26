import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Hack() {
  const data = [
    {
      title: "Mid 2023",
      content: (
        <div>
          <h2 className="text-neutral-200 text-sm md:text-2xl font-normal mb-2">
            Smart India Hackathon
          </h2>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Presented a prototype leveraging a fine-tuned AI model, trained on a
            large dataset, to detect and classify skin diseases with a focus on
            early cancer detection.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/skinscan.png"
              alt="SkinScan website"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fall 2023",
      content: (
        <div>
          <h2 className="text-neutral-200 text-sm md:text-2xl font-normal mb-2">
            Dark Pattern Buster Hackathon
          </h2>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed a browser extension to assist users in identifying and
            navigating dark patterns across websites.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/dpbh1.png"
              alt="DPBH Pixet Extension"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/dpbh2.png"
              alt="DPBH Pixet Extension"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
