// Add '-' in the ID for the section to appear in the left nav
export const WebCopy = [
  {
    id: "L-2020+",
    heading: "Liminal",
    slug: "A personal media library for the web.",
    role: "Principal Designer, Developer",
    resp:
      "Product concept, mobile interface design, desktop interface design, and cross-platform full-stack development.",
    para:
      "Liminal is a personal media library for the web––designed for creatives and researchers, and curious people to collect our daily frankenstack of media sources. It allows you to build feeds, save links, and integrate your activity into a single digital timeline.",
    date: "2020+",
    images: [],
  },
  {
    id: "D-2020",
    heading: "Datavore Labs",
    role: "Design Lead",
    resp:
      "Product design, user interface design, design system development, and cross-application front-end development.",
    para:
      "Datavore bridges the gap between analysts and data scientists by offering a light-weight search and analysis tool for your teams data. From 2019–2020, we extended the product to include granular tagging, which allows analysts to create cohorts from billions of transactional data without accessing the raw data itself.",
    slug: "The code-free tool for advanced time-series analysis.",
    team:
      "Sanjay Venkat, CTO; JP, Systems Architecture; Dante F, Full-stack Tech Lead; Dan Entrup, CEO; Phil Fogel, COO;",
    date: "2019–2020",
  },
  {
    id: "S-2019",
    heading: "Splashlight x Telmar",
    role: "UX Manager, Global",
    resp:
      "Service design, design operations, user experience design, and information architecture.",
    para:
      "Splashlights Intelligent Imagery Platform is an end-to-end content management platform, which simplifies the complex omni-channel content creation process, enabling brands to focus on their customer journey. With the I² Platform, you can create and deliver uncompromising images at the unforgiving pace of modern #ecommerce.",
    slug: "The highest standards in e-commerce photography and video.",
    team:
      "Robyn Dutra, VP of Creative; Thomas Brodin, Design Director; Vivian Zhang, Designer; Say Lim, Designer; Ted Washburne, VP of Research & Analytics; Mohammad Bashir, Tech Lead",
    date: "2017–2019",
  },
  {
    id: "G-2017",
    heading: "Gagosian Quarterly",
    role: "Publications Coordinator",
    resp:
      "Print production, image proofing, copy editing, project management, and quality assurance.",
    slug: "Behind the scences acces to modern and contemporary art practices.",
    date: "2015–2017",
    para:
      "The Gagosian Quarterly, in print and online, offers behind-the-art access and editorial content by leading art world professionals. You can find studio visits, artist profiles, and the most recent Gagosian publications. From 2015–2017, we launched the Gagosian Quarterly website in conjuntion with a brand and web redesign by Graphic Thought Facility.",
  },
]

export const ProjectCopy = WebCopy.filter(({ id }) => id.includes("-"))
