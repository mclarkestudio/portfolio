// Add '-' in the ID for the section to appear in the left nav
export const WebCopy = [
  {
    id: "liminal",
    heading: "Liminal",
    slug: "A personal media library for the web.",
    role: "Designer, Developer",
    resp:
      "Product concept, mobile interface design, desktop interface design, and cross-platform full-stack development.",
    para:
      "Liminal is a personal media library for the web. Designed for creatives, researchers, and curious people, it’s mission is to make researching and collecting the web more reliable, secure, and extensible.",
    para3:
      "I started Liminal in 2020 to organize my research topics and daily media consumption. It is currently in development in close collaboration with family and friends.",
    para2:
      "With core feature support for RSS feeds, YouTube media activity, bookmarking, and browser history storage, Liminal provides complete data access to a single timeline of your media consumption––allowing you to track a single topic across a range of sources. Built in knowledge services, such as a structured data inspector and Wikipedia API, allow you to quickly store and discover commonly known people, places, and things.",
    date: "2020+",
  },
  {
    id: "datavore",
    heading: "Datavore Labs",
    role: "Lead Product Designer",
    resp:
      "Product design, user research, user interface design, design systems, and cross-application front-end development.",
    para:
      "Datavore is a code-free data platform for advanced time series analysis. It was built for analysts and data scientists to efficiently track indicators across datasets in order to validate and backtest data signals from a wide-range of sources, timelines, and strengths.",
    para2:
      "Joining the team in 2019, I helped extend the core product to include granular data tagging, a feature that allows analysts to segment and deploy reports for big, real-time datasets. This provides a unique opportunity for data providers and customers to test hypotheses without exchanging raw datasets. It also allieves security concerns from consumers and businesses over personal identity tracing in anonymized datasets––setting a hopeful, optimistic standard for an era of wild-west data exchanges.",
    para3:
      "As Design Lead on a 4 person development team, I took a highly iterative approach to the design process. We updated the client interfaces with weekly deploys and prioritized user feedback from analysts and early-adopters at daily standup meetings.",
    slug: "The code-free tool for advanced time-series analysis.",
    team:
      "Dan Entrup, (CEO), Sanjay Venkat (Founder, CTO), JP Kosmyna (VP Engineering), Dante (Technology Lead), Phil Fogel (COO).",
    date: "2019–2020+",
  },
  {
    id: "splashlight",
    heading: "Splashlight",
    role: "UX Manager",
    resp:
      "User experience design, service design, design operations, content strategy, and information architecture.",
    para:
      "Splashlight’s Intelligent Imagery Platform is an end-to-end content management platform, which simplifies the complex omni-channel content creation process, enabling brands to focus on their customer journey.",
    para2:
      "From 2017–2019, we launched the pilot program for Splashtag, a web analytics and experimentation tool that allows for content teams to examine the reach, location, and trends across their creative decisions.",
    slug: "The highest standards in e-commerce photography and video.",
    team:
      "Robyn Dutra (VP of Creative), Thomas Brodin (Design Director), Vivian Zhang (Designer), Say Lim, (Designer), Joe Stanek (UX Copywriter), Ted Washburne (VP of Research & Analytics), Mohammad Bashir (Technology Lead).",
    date: "2017–2019",
  },
  {
    id: "gagosian",
    heading: "Gagosian Gallery",
    role: "Publications Coordinator",
    resp:
      "Project management, content strategy, print production, image proofing, and quality assurance.",
    slug: "Behind the scences acces to modern and contemporary art practices.",
    date: "2015–2017",
    team:
      "Alison McDonald (Publications Director), Graphic Thought Facility (Design Team)",
    para:
      "The Gagosian Quarterly, in print and online, offers behind-the-art access and editorial content by leading art world professionals.",
    para2:
      "From 2015–2017, we launched the Gagosian Quarterly website in conjunction with a brand and web redesign by Graphic Thought Facility.",
  },
  {
    id: "visual",
    heading: "More work...",
    date: "Ongoing",
    para:
      "The Gagosian Quarterly, in print and online, offers behind-the-art access and editorial content by leading art world professionals. You can find studio visits, artist profiles, and the most recent Gagosian publications. From 2015–2017, we launched the Gagosian Quarterly website in conjuntion with a brand and web redesign by Graphic Thought Facility.",
  },
]

export const ProjectCopy = WebCopy.filter(({ id }) => id.includes("-"))
