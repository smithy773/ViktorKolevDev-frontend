import { NavLink } from "react-router";

type HomeItemProps = {
  title: string;
  description: string;
  navPath: string;
  children?: React.ReactNode;
};

function HomeItem({ title, description, navPath, children }: HomeItemProps) {
  return (
    <article>
      <NavLink to={navPath}>
        <h3 className="py-2 w-fit text-highlight font-bold text-4xl">
          {title}
        </h3>
      </NavLink>
      <p className="">{description}</p>
      {children}
    </article>
  );
}

export default HomeItem;
