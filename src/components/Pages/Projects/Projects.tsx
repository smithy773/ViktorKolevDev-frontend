import { projects } from "../../../const/Project/Project";
import PageCont from "../../Helpers/PageCont/PageCont";
import ProjectItem from "./ProjectItem/ProjectItem";

function Projects() {
  return (
    <PageCont
      title="Projects"
      description="Here you can find all of my projects! I try to work on something different every time, so you can find games, web apps, desktop apps and more! Each project has a GitHub repository up on my GitHub account, so feel free to check it out and follow me there for more projects in the future!"
    >
      <section className="grid grid-cols-3 gap-3">
        {projects.length > 0
          ? projects.map((item) => (
              <ProjectItem
                title={item.title}
                description={item.description}
                gitHubURL={item.gitHubURL}
                url={item.url}
              />
            ))
          : "No projects uploaded!"}
      </section>
    </PageCont>
  );
}

export default Projects;
