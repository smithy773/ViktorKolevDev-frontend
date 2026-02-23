import { useEffect, useState } from "react";
import PageCont from "../../Helpers/PageCont/PageCont";
import MarkdownRenderer from "../../Helpers/MarkdownRenderer/MarkdownRenderer";

function About() {
  const [content, setContent] = useState("");
  const fetchMarkdown = () => {
    fetch(`/pages-markdown/About/about.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Failed to load markdown:", err));
  };

  useEffect(() => {
    fetchMarkdown();
  }, []);
  return (
    <PageCont title="About me" description="none">
      <div>
        <section className="flex gap-25 items-center">
          <p className="w-md ml-8 text-xl">
            I'm Viktor Kolev - a{" "}
            {new Date().getMonth() >= 6 && new Date().getDate() >= 7
              ? new Date().getFullYear() - 2003
              : new Date().getFullYear() - 2004}{" "}
            year old guy from Bulgaria. I've been studying Frontend Development
            since 2023 and in late 2025 I decided to learn some Java to expand
            my knowledge and skills. I love playing videogames with friends,
            drawing / painting, playing guitar or bass, reading different kinds
            of books, backpacking, bushcrafting and many other silly endeavours.
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
          <MarkdownRenderer>{content}</MarkdownRenderer>
        </section>
      </div>
    </PageCont>
  );
}

export default About;
