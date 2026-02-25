type ProjectItemProps = {
  title: string;
  description: string;
  gitHubURL: string;
  url: string;
};

function ProjectItem({ title, description, gitHubURL, url }: ProjectItemProps) {
  return (
    <div className="shadow_under bg-item-background px-5 py-1.5 border border-lines rounded-md flex flex-col gap-1.5">
      <h3 className="text-2xl font-semibold text-highlight py-2">{title}</h3>
      <p className="px-3 py-2 border-b border-lines w-fill max-w-lg h-30 text-wrap text-md">
        {description}
      </p>
      <div className="flex justify-center gap-15">
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
