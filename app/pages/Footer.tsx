import React from "react";
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMailSpark,
  IconFileDownload,
} from "@tabler/icons-react";

interface FooterProps {}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  return (
    <footer ref={ref} className="footer text-white">
      <div className="container mx-auto px-4 mt-8">
        <p className="text-center text-white habomika text-5xl">Grenish Rai</p>
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()}
        </p>
      </div>
      {/* <div className="text-white pb-8 flex flex-col items-center justify-center">
        <div className="mt-2">
          <ul className="flex gap-5">
            <li>
              <IconBrandX stroke={1} />
            </li>
            <li>
              <IconBrandGithub stroke={1} />
            </li>
            <li>
              <IconBrandLinkedin stroke={1} />
            </li>
            <li>
              <IconMailSpark stroke={1} />
            </li>
            <li>
              <IconFileDownload stroke={1} />
            </li>
          </ul>
        </div>
      </div> */}
    </footer>
  );
});

export default Footer;
