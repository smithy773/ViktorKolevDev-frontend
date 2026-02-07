import PageCont from "../../Helpers/PageCont/PageCont";
import ProjectItem from "./ProjectItem/ProjectItem";

function Projects() {
  return (
    <PageCont title="Projects page" description="Projects page description">
      <div>
        <ProjectItem
          title="title"
          description="description123123123123123123123123123123123123123"
          url="www.google.com"
          gitHubURL="www.google.com"
        />
        <ProjectItem
          title="title"
          description="description123123123123123123123123123123123123123"
          url=""
          gitHubURL="www.google.com"
        />
      </div>
    </PageCont>
  );
}

export default Projects;
