import PageCont from "../../Helpers/PageCont/PageCont";
import HomeItem from "./HomeItem/HomeItem";

function Home() {
  return (
    <PageCont title="Hello there!">
      <div className="text-lg">
        <h3 className="mb-6 mt-4">
          My name's Viktor Kolev and I'm a software engineer. Тhis here is my
          website! Here you can find my blog, the projects I've worked on
          {" (or am currently doing so)"}, my portfolio and general information
          about my life, art and work.
        </h3>
        <section className="flex flex-col gap-5">
          <HomeItem
            title="Blog"
            description="Browse posts about me, my work and my life in general."
            navPath="/blog"
          >
            <div>{/* LAST BLOG POST */}</div>
          </HomeItem>
          <HomeItem
            title="Projects"
            description="All the coding projects I've done over the years (both frontend and backend)."
            navPath="/projects"
          >
            <div>{/* LAST PROJECT */}</div>
          </HomeItem>
          <HomeItem
            title="Portfolio"
            description="If you're a recruiter or are reviewing my job application and see this, please check out this website then click here <3"
            navPath="/portfolio"
          ></HomeItem>
          <HomeItem
            title="About me"
            description="If you're intrigued, you can check out more information about me here."
            navPath="/about"
          ></HomeItem>
        </section>
      </div>
    </PageCont>
  );
}

export default Home;
