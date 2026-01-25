import type { ReactElement } from "react";

type HomeItemProps = {
  title: string;
  description: string;
  children: ReactElement;
};

function HomeItem({ title, description, children }: HomeItemProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}

export default HomeItem;
