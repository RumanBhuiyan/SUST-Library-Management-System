import React from "react";
import "./FooterDesign.css";
import FooterQuote from "./FooterQuote";
import FooterContacts from "./FooterContact";
import FooterSocials from "./FooterSocials";
import FooterCopyright from "./FooterCopyright";

function Footer() {
  return (
    <div className="myFooter">
      <FooterQuote />
      <hr />
      <FooterContacts />
      <hr />
      <FooterSocials />
      <hr />
      <FooterCopyright />
    </div>
  );
}

export default Footer;
