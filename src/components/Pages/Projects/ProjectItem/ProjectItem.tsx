type ProjectItemProps = {
  title: string;
  description: string;
  gitHubURL: string;
  url: string;
};

function ProjectItem({ title, description, gitHubURL, url }: ProjectItemProps) {
  return (
    <div className="shadow_under bg-item-background px-5 py-1.5 border border-lines rounded-md gap-1.5 w-67 h-64 flex flex-col justify-around project-item-container">
      <h3 className="text-2xl font-semibold text-highlight py-2">{title}</h3>
      <p className="pl-3 pr-2 w-fill max-w-lg h-30 text-wrap text-md">
        {description}
      </p>
      <div className="flex pt-2 border-t border-lines font-semibold justify-center items-center gap-15">
        <a className="project-item-link" target="_blank" href={gitHubURL}>
          GitHub
        </a>
        {url ? (
          <a className="project-item-link" target="_blank" href={url}>
            Live site
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
