import PageCont from "../../Helpers/PageCont/PageCont";
import HomeItemList from "./HomeItemList/HomeItemList";

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
        <HomeItemList />
      </div>
    </PageCont>
  );
}

export default Home;
