import PageCont from "../../Helpers/PageCont/PageCont";

function About() {
  return (
    <PageCont title="About me" description="none">
      <section>
        {/* MAKE AGE DYNAMIC */}
        <div className="flex items-center">
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
          <img src="" alt="ME!!!" title="A pic of moi" />
        </div>
        <div>
          {/* Music desc + fav albums */}
          <p>
            I believe people should be really passionate about many things in
            life. One of my favorite things in existance is music. From the most
            pretentious indie rock to the noisiest, sludgiest metal to whatever
            The Prodigy are - I love it all!
          </p>
          <div className="flex">
            <ul>
              Top 5 albums:
              <li>Smashing Pumpkins - Mellon Collie</li>
              <li>Hammerhead - Into the Vortex</li>
              <li>Portishead - Dummy</li>
              <li>Dave Grohl - Pocketwatch</li>
              <li>Machine Girl - WLFGRL</li>
            </ul>
            <ul>
              Top 5 artists:
              <li>Dave Grohl</li>
              <li>Daughter</li>
              <li>Deftones</li>
              <li>The Prodigy</li>
              <li>Electric Wizard</li>
            </ul>
          </div>
        </div>
      </section>
    </PageCont>
  );
}

export default About;
