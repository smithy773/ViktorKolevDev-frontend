type ProjectItemProps = {
  title: string;
  description: string;
  gitHubURL: string;
  url: string;
};

function ProjectItem({ title, description, gitHubURL, url }: ProjectItemProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={gitHubURL}>GitHub</a>
      {url ? <a href={url}>Live site</a> : ""}
    </div>
  );
}

export default ProjectItem;
