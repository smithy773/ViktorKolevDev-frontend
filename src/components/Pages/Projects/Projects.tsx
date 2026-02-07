import PageCont from "../../Helpers/PageCont/PageCont";
import ProjectItem from "./ProjectItem/ProjectItem";

function Projects() {
  return (
    <PageCont title="Projects page" description="Projects page description">
      <section className="grid grid-cols-3 gap-3">
        <ProjectItem
          title="Hangman"
          description="The classic Hangman game, but online. Built with TypeScript + React."
          url="www.google.com"
          gitHubURL="www.google.com"
        />
        <ProjectItem
          title="Second Project Title"
          description="This is a template description for testing."
          url=""
          gitHubURL="www.google.com"
        />
      </section>
    </PageCont>
  );
}

export default Projects;
