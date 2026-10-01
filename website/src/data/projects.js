// Projects shown on the site. Copy a block to add another.
//
// image  Put a picture in website/public, then set "/file.jpg". Leave "" for the placeholder.
// video  A YouTube embed link, like "https://www.youtube.com/embed/VIDEO_ID". Leave "" if none.
// link   The live app or site. Leave "" if you do not have one yet.

/** @type {Array<{
 *   id: string,
 *   title: string,
 *   problem: string,
 *   built: string,
 *   result: string,
 *   tags: string[],
 *   link: string,
 *   image: string,
 *   video: string
 * }>} */
export const projects = [
  {
    id: "primelive",
    title: "PrimeLive",
    problem: "Hosts and viewers needed a live video app that still feels simple when the room is busy.",
    built: "I built the Android app for live rooms, chat, and host tools.",
    result: "The app is live on Google Play.",
    tags: ["Android", "Live video"],
    link: "https://play.google.com/store/apps/details?id=com.primelive.app",
    image: "/primelive.jpg",
    video: "",
  },
  {
    id: "ai-hybrid",
    title: "AI Hybrid",
    problem: "Students needed help studying, without a busy or confusing app.",
    built: "I built a learning app with an AI mentor and simple study screens.",
    result: "It is published on Google Play.",
    tags: ["AI", "Android"],
    link: "https://play.google.com/store/apps/details?id=com.aihybrid",
    image: "/ai-hybrid.jpg",
    video: "",
  },
  {
    id: "axcel-sms",
    title: "Axcel SMS",
    problem: "A school needed one app that works for students, teachers, and admins.",
    built: "I built a clear set of screens for each role, connected to their system.",
    result: "The app is live on Google Play.",
    tags: ["Android", "Schools"],
    link: "https://play.google.com/store/apps/details?id=com.axcel.axcelsms",
    image: "/axcel-sms.jpg",
    video: "",
  },
];
