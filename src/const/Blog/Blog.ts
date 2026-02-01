// The idea here is that I'll only fetch the titles, dates and postIDs of the posts. The content of each blog post won't be fetched as it is not needed for the Blog page. It will be fetched only when a certain blog post is clicked.

export const blogCont: {
  title: string;
  description: string;
  blogItems: {
    postTitle: string;
    postDate: string;
    postID: string;
  }[];
} = {
  title: "Blog page",
  description:
    "Here's my blog page! You can find my TMUs (Tri-Monthly Updates) and other blog posts about a lot of topics, which you can browse below. If something interests you, you can leave a comment or contact me.",
  blogItems: [
    {
      postTitle: "First post title!",
      postDate: "Jan 30, 2026",
      postID: "1",
    },
    {
      postTitle: "Second post title!",
      postDate: "Jan 31, 2026",
      postID: "2",
    },
    {
      postTitle:
        "RESIDENT EVIL 5 IS A GREAT GAME AND I DON'T CARE WHAT YOU SAY!!!!",
      postDate: "Jan 31, 2026",
      postID: "3",
    },
  ],
};

export type blogPost = {
  title: string;
  date: string;
  content: string;
};

export const blogPosts: {
  id: string;
  post: blogPost;
}[] = [
  {
    id: "1",
    post: {
      title: "First post title!",
      date: "Jan 30, 2026",
      content:
        "This is my first post! I'm excited to begin this and will soon post my TMU! craaazyyy \nThanks for reading - hope it's interesting! :D",
    },
  },
  {
    id: "2",
    post: {
      title: "Second post title!",
      date: "Jan 31, 2026",
      content:
        "Second post for testing purposes.\n\n I don't really know what I'm doing, but I believe it will turn out great.\n Yay me! (or whatever)",
    },
  },
  {
    id: "3",
    post: {
      title:
        "RESIDENT EVIL 5 IS A GREAT GAME AND I DON'T CARE WHAT YOU SAY!!!!",
      date: "Jan 31, 2026",
      content:
        "RESIDENT EVIL 5 IS GREAT!\n RE5 is a great addition to the games - i don't care what anybody says! Ofcourse it's not even a top 5 Resident Evil game (Top 5 RE games (objectively) are:\n1. Resident Evil HD Remake\n2. Resident Evil 2 (Original)\n3. Resident Evil 7\n4. Resident Evil 3 \n5. Resident Evil 4 (Original))\n BUT! don't let that fool you - this is one of the best CO-OP experiences you can have. It's goofy, creepy, has a great soundtrack, the graphics hold up even in today's ridiculous world, there are a lot of unlockables which make the game replayable. The Mercenaries - oh.my.GOD! How many hours I've sunk into the Games for Windows Live version of RE5 just because of The Mercenaries... I've practically speedran the game before I even knew what speedrunning is! My best time was under 4h (something like 3h30mins) while my previous runs were around 5h. Sadly, I never got near the world record, which is a whopping 1h41m44s on Veteran... Crazy...",
    },
  },
];
