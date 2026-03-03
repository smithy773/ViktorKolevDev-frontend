type projectsType = {
  title: string;
  description: string;
  gitHubURL: string;
  url: string;
}[];

export const projects: projectsType = [
  {
    title: "website-frontend",
    description:
      "This website's frontend. Built with TypeScript + React and TailwindCSS.",
    gitHubURL: "https://github.com/smithy773/ViktorKolevDev-frontend",
    url: "",
  },
  {
    title: "java-AudioPlayer",
    description:
      "A Java audio player. It has a simple UI and basic features like play, pause, stop, next and previous.",
    gitHubURL: "https://github.com/smithy773/java-AudioPlayer",
    url: "asd",
  },
  {
    title: "Threejs-portfolio",
    description:
      "My portfolio built with TypeScript + React and ThreeJS. Used TailwindCSS for the design.",
    gitHubURL: "https://github.com/smithy773/Threejs-portfolio",
    url: "https://js-portfolio-78b1a.web.app/",
  },
  {
    title: "Hangman",
    description:
      "The classic Hangman game, but online. Built with TypeScript + React.",
    gitHubURL: "https://github.com/smithy773/hangman-game-TS-React",
    url: "https://hangman-ts.web.app/",
  },
];
