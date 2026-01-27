import { NavLink } from "react-router";

type HomeItemProps = {
  title: string;
  description: string;
  navPath: string;
  navIcon: string;
};

function HomeItem({ title, description, navPath, navIcon }: HomeItemProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <NavLink to={navPath}>
        <img src={navIcon} className="w-max h-52" />
      </NavLink>
    </div>
  );
}

export default HomeItem;
