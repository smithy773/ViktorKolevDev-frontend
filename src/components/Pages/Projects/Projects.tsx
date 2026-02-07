import { projects } from "../../../const/Project/Project";
import PageCont from "../../Helpers/PageCont/PageCont";
import ProjectItem from "./ProjectItem/ProjectItem";

function Projects() {
  return (
    <PageCont title="Projects page" description="Projects page description">
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
