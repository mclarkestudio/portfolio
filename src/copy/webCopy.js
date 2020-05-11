// Add '-' in the ID for the section to appear in the left nav
export const WebCopy = [
  {
    id: "L-2020+",
    heading: "Liminal",
    slug: "A personal media library for the web.",
    role: "Principal Design",
    resp:
      "Concept development, user interface design, and cross-platform full-stack development (WIP).",
    para:
      "Personal computers allow people to collect a wide range of digital media. However, in the age of cloud services our media consumption is split across web services and user identities per company. So how do we collect and store our interests? For many creatives, consuming media isnt a one off experience. Its something that should be saved for ever. Liminal is a personal media library built for the web. It allows users to build media feeds, save collections, and integrate their activity into a single timeline.",
    date: "2020+",
  },
  {
    id: "D-2020",
    heading: "Datavore Labs",
    role: "Design Lead",
    resp:
      "Product design, user interface design, design system development, and cross-application front-end development.",
    // para: 'Liminal is a cross-platform web ',
    slug: "The code-free tool for advanced time-series analysis.",
    date: "2019–2020",
  },
  {
    id: "S-2019",
    heading: "Splashlight x Telmar",
    role: "UX Manager",
    resp:
      "Service design, design operations, user experience design, and information architecture.",
    // para: 'Liminal is a cross-platform web ',
    slug: "The highest standards in e-commerce photography and video.",
    date: "2017–2019",
  },
  {
    id: "G-2017",
    heading: "Gagosian Gallery",
    role: "Publications Coordinator",
    slug: "Behind the scences acces to modern and contemporary art practices.",
    date: "2015–2017",
  },
  {
    id: "about",
    heading: "About",
  },
  {
    id: "contact",
    heading: "mclarkestudio@gmail.com",
  },
]

export const ProjectCopy = WebCopy.filter(({ id }) => id.includes("-"))
