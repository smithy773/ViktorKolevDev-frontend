import PageCont from "../../Helpers/PageCont/PageCont";

function About() {
  return (
    <PageCont>
      <div>
        <h1>About me</h1>
        {/* Basic info */}
        <section>
          {/* MAKE AGE DYNAMIC */}
          <p>
            I'm Viktor Kolev - a 22 year old guy from Bulgaria. I've been
            studying Frontend Development since 2023 and in late 2025 I decided
            to learn some Java to expand my knowledge and skills. This is my own
            website! Pretty much everything is built from the ground up by me
            and I'm quite proud of that. As for me, I'm a metalhead that loves
            playing videogames with friends, drawing / painting, playing guitar
            or bass, reading different kinds of books, backpacking and
            bushcrafting and many other silly endeavours.
          </p>
        </section>
        {/* Music desc + fav albums */}
      </div>
    </PageCont>
  );
}

export default About;
