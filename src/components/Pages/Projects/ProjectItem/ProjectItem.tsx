type ProjectItemProps = {
  title: string;
  description: string;
  gitHubURL: string;
  url: string;
};

function ProjectItem({ title, description, gitHubURL, url }: ProjectItemProps) {
  return (
    <div className=" px-5 py-1.5 border border-lines rounded-md flex flex-col gap-1.5">
      <h3 className="text-2xl">{title}</h3>
      <p className=" rounded-md px-3 py-2 border border-stone w-fill max-w-lg h-30 text-wrap text-md">
        {description}
      </p>
      <div className="flex justify-center gap-15">
        <a className="projectItem-link" target="_blank" href={gitHubURL}>
          GitHub
        </a>
        {url ? (
          <a className="projectItem-link" target="_blank" href={url}>
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
