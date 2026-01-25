import { useNavigate } from "react-router";

type NavLinkProps = {
  text: string;
  iconURL: string;
  navURL: string;
};

const navigate = useNavigate();

function NavLink({ text, iconURL, navURL }: NavLinkProps) {
  return (
    <div>
      <a onClick={() => navigate(navURL)}>
        <img />
        {iconURL} {text}
      </a>
    </div>
  );
}

export default NavLink;
