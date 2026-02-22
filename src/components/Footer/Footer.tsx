import FooterLink from "./FooterLink/FooterLink";

function Footer() {
  return (
    <footer className="mt-auto pt-2.5 border-t border-lines w-full">
      <div className="flex flex-row gap-5">
        <FooterLink href="https://github.com/smithy773" to="GitHub" />
        <FooterLink
          href="https://www.linkedin.com/in/viktork7/"
          to="LinkedIn"
        />
      </div>
    </footer>
  );
}

export default Footer;
