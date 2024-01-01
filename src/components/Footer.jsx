import React, { useEffect } from "react";
import baffle from "baffle";

const Footer = () => {
  useEffect(() => {
    const texts = ["Grenish Rai", "Connect", "Made with passion", "2024"];
    texts.forEach((text) => {
      const className = `.${text.toLowerCase().replace(/\s/g, "-")}`;
      console.log(`Baffling elements with class name "${className}"`);
      baffle(className, {
        characters: "asdfghjklqwertyuiopzxcvbnm8239^@(*&)@Eskjdbbk",
        speed: 100,
      }).reveal(4000);
    });
  }, []);

  return (
    <div>
      <div className="grenish-rai">Grenish Rai</div>
      <div className="connect">Connect</div>
      <div className="made-with-passion">Made with passion</div>
      <div className="2024">2024</div>
    </div>
  );
};

export default Footer;