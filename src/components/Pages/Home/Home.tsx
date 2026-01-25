import PageCont from "../../Helpers/PageCont/PageCont";
import HomeItem from "./HomeItem/HomeItem";

function Home() {
  return (
    <PageCont>
      <div>
        <h1>Hello there!</h1>
        <h3>
          My name's Viktor Kolev and I'm a software engineer. Тhis here is my
          website! Here you can find my blog, the projects I've worked on
          {" (or am currently doing so)"}, my portfolio and general information
          about my life, art and work.
        </h3>
        {/* HomeItem components can be replaced (the logic can be applied to other pages as well)

        1. Store all HomeItem components in the following way:
        blog: HomeItemType {
        title: "Blog";
        description: "Browse posts about me, my work and my life in general.";
        content: <BlogItem latest="1" />
        
        2. All of these objects will be stored in whatever way possible (have to further research best way to do that)

        3. Loop through each item stored

        4. For each item, return:
        <HomeItem title={item.title} description={item.description} content={item.content} />

        5. This will dynamically build each item and display it, as long as there are stored items
        */}
        <HomeItem
          title="Blog"
          description="Browse posts about me, my work and my life in general."
        >
          <h3>LAST BLOG POST</h3>
        </HomeItem>
        <HomeItem
          title="Projects"
          description="All the coding projects I've done over the years (both frontend and backend)."
        >
          <h3>LAST FINISHED PROJECT</h3>
        </HomeItem>
        <HomeItem
          title="About me"
          description="If you're intrigued, you can check out more information about me here."
        >
          <h3>ABOUT ME PAGE LINK VIA IMAGE OF ME</h3>
        </HomeItem>
        <HomeItem
          title="Portfolio"
          description="If you're a recruiter or are reviewing my job application and see this, please check out this website then click here <3"
        >
          <h3>LINK TO PORTFOLIO PAGE</h3>
        </HomeItem>
      </div>
    </PageCont>
  );
}

export default Home;
