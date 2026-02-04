import PageCont from "../../Helpers/PageCont/PageCont";

function About() {
  return (
    <PageCont title="About me" description="none">
      <div>
        {/* MAKE AGE DYNAMIC */}
        <section className="flex justify-between">
          <p className="w-md">
            I'm Viktor Kolev - a 22 year old guy from Bulgaria. I've been
            studying Frontend Development since 2023 and in late 2025 I decided
            to learn some Java to expand my knowledge and skills. This is my own
            website! Pretty much everything is built from the ground up by me
            and I'm quite proud of that. As for me, I'm a metalhead that loves
            playing videogames with friends, drawing / painting, playing guitar
            or bass, reading different kinds of books, backpacking, bushcrafting
            and many other silly endeavours.
          </p>
          <div className="flex flex-col items-center">
            <img
              src="/imgs/me and bubka.jpg"
              className="h-auto w-3xs"
              alt="Me and my lady"
              title="A pic of me and my lady"
            />
            <p className="text-sm">Me and my lady :{")"}</p>
          </div>
        </section>
        <section>
          {/* Insert markdown file via or other similar thing */}
        </section>
      </div>
    </PageCont>
  );
}

export default About;
