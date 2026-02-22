import ghLightLogo from "../../../assets/icons/GitHub_light.png";
import ghDarkLogo from "../../../assets/icons/GitHub_dark.png";
import linkedinLightLogo from "../../../assets/icons/LinkedIn_light.png";
import linkedinDarkLogo from "../../../assets/icons/LinkedIn_dark.png";

type FooterLinkProps = {
  href: string;
  to: string;
};

function FooterLink({ href, to }: FooterLinkProps) {
  return (
    <div>
      <a className="footer-link" href={href} target="_blank">
        <img
          src={to == "GitHub" ? ghLightLogo : linkedinLightLogo}
          className="footer-link-light"
          width="40"
          alt={to}
        />
        <img
          src={to == "GitHub" ? ghDarkLogo : linkedinDarkLogo}
          className="footer-link-dark"
          width="40"
          alt={to}
        />
      </a>
    </div>
  );
}

export default FooterLink;
