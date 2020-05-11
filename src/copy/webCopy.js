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
      "In an age of cloud services, our media consumption is split across a range of products and services. Liminal was designed for creatives, researchers, and curious people to combat this frankenstack of media applications. It allows you to build feeds, save links, and integrate your activity into a single digital timeline.",
    date: "2020+",
    images: [],
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
]

export const ProjectCopy = WebCopy.filter(({ id }) => id.includes("-"))
