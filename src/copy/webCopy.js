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
    para2:
      "Liminal is currently in development. First platforms will include web, macOS, iPhone, and Android.",
    date: "2020+",
  },
  {
    id: "D-2020",
    heading: "Datavore Labs",
    role: "Lead Product Designer",
    resp:
      "Product design, user interface design, design system development, and cross-application front-end development.",
    para: "The code-free tool for advanced time series anaysis.",
    para2:
      "From 2019–2020, we extended the core Datavore product to include granular tagging––allowing analysts to segment transactions from large data sets without directly accessing the raw data itself. I feel fortunate to work on a product that has implications outside of it's own utility. Having a system that can calculate your analysis  From consumer brands to data marketplaces, businesses can exhange data per usage without the need to open the raw data (which may be prone to identity tracing). We merged this extensive, new feature into Datavore's core product and provided a seamless experience between the two systems.",
    slug: "The code-free tool for advanced time-series analysis.",
    team:
      "Sanjay Venkat, CTO; JP, Systems Architecture; Dante F, Full-stack Tech Lead; Dan Entrup, CEO; Phil Fogel, COO;",
    date: "2019–2020+",
  },
  {
    id: "S-2019",
    heading: "Splashlight",
    role: "UX Manager",
    resp:
      "Service design, design operations, user experience design, and information architecture.",
    para:
      "Splashlights Intelligent Imagery Platform is an end-to-end content management platform, which simplifies the complex omni-channel content creation process, enabling brands to focus on their customer journey. ",
    para2:
      "From 2017–2019, we launched the pilot program for Splashtag, a web analytics and experimentation tool that allows for content teams to examine the reach, location, and trends acrross their creative decisions.",
    slug: "The highest standards in e-commerce photography and video.",
    team:
      "Robyn Dutra, VP of Creative; Thomas Brodin, Design Director; Vivian Zhang, Designer; Say Lim, Designer; Ted Washburne, VP of Research & Analytics; Mohammad Bashir, Tech Lead",
    date: "2017–2019",
  },
  {
    id: "G-2017",
    heading: "Gagosian Gallery",
    role: "Publications Coordinator",
    resp:
      "Print production, image proofing, copy editing, project management, and quality assurance.",
    slug: "Behind the scences acces to modern and contemporary art practices.",
    date: "2015–2017",
    para:
      "The Gagosian Quarterly, in print and online, offers behind-the-art access and editorial content by leading art world professionals. You can find studio visits, artist profiles, and the most recent Gagosian publications. From 2015–2017, we launched the Gagosian Quarterly website in conjuntion with a brand and web redesign by Graphic Thought Facility.",
  },
  {
    id: "I-2015",
    heading: "Independent Design",
    role: "Publications Coordinator",
    date: "2010–2017",
    para:
      "The Gagosian Quarterly, in print and online, offers behind-the-art access and editorial content by leading art world professionals. You can find studio visits, artist profiles, and the most recent Gagosian publications. From 2015–2017, we launched the Gagosian Quarterly website in conjuntion with a brand and web redesign by Graphic Thought Facility.",
  },
]

export const ProjectCopy = WebCopy.filter(({ id }) => id.includes("-"))
