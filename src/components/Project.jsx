import Particles from "./Particles";
import TiltedCard from "./TiltedCard";

export default function Project() {
  return (
    <>
      <div className="w-full relative bg-black text-white flex flex-col items-center">
        <div className="absolute inset-0 w-screen">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={2000}
            particleSpread={7}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="mx-12 my-18 max-w-[1200px] w-full">
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-4xl pb-18 px-12 md:px-0"
          >
            Projects
          </h1>
          {/* cardgrid */}
          <div className="flex justify-center flex-wrap gap-10 sm:gap-8 md:gap-6 lg:gap-14">
            {allProjects.map((project) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  className="w-full sm:basis-[calc(50%-1rem)] md:basis-[calc(50%-2rem)] lg:basis-[calc(50%-3.5rem)] "
                  key={project.name}
                >
                  <TiltedCard
                    imageWidth="0"
                    rotateAmplitude={6}
                    scaleOnHover={1.05}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                      <div>
                        {/* Card contents */}
                        <div className="h-full w-full border border-white/20 rounded-xl p-4 bg-white/5 flex flex-col gap-4">
                          {/* Title */}
                          <h1 className="text-center text-3xl">
                            {project.name}
                          </h1>
                          {/* Screenshot */}
                          <img
                            src={project.screenshot}
                            className="rounded-xl"
                          />
                          {/* Tech Stack */}
                          <div className="flex gap-2 justify-center flex-wrap">
                            {project.techStack.map((i) => {
                              return (
                                <p
                                  className="bg-black text-white rounded-full px-2 py-1"
                                  key={i}
                                >
                                  {i}
                                </p>
                              );
                            })}
                          </div>
                          {/* Description */}
                          <p className="">{project.description}</p>
                          {/* Links */}
                          <div className="flex justify-center gap-4">
                            <a
                              href={project.repoLink}
                              className="bg-red-500 px-4 py-2 rounded-full"
                              target="_blank"
                            >
                              Github Repo
                            </a>
                            <a
                              href={project.liveAppLink}
                              className="bg-red-500 px-4 py-2 rounded-full"
                              target="_blank"
                            >
                              Live App
                            </a>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const allProjects = [
  {
    name: "SONA – Full-Stack Blogging Platform",
    techStack: [
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "bcryptjs",
      "JWT",
      "dotenv",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    description:
      "A modern full-stack blogging platform featuring secure authentication, full blog CRUD functionality, category filtering, responsive interfaces, and a RESTful API. The backend is built with Node.js and Express, while the frontend uses vanilla JavaScript, HTML, and CSS.",
    repoLink:
      "https://github.com/Jamal-Raja/sona-fullstack-blogging-platform.git",
    liveAppLink:
      "https://sona-fullstack-blogging-platform-production.up.railway.app/",
    screenshot:
      "public/assets/images/project-screenshots/sona-fullstack-blog.jpeg",
  },
  {
    name: "Citiline Accountants",
    techStack: ["HTML", "CSS", "JavaScript", "Python"],
    description:
      "Designed and built a fully responsive site using HTML, CSS, JavaScript, and Python, tailored for a professional accounting practice. Integrated Calendly to streamline client bookings, embedded a live HMRC news feed, and connected Slack webhooks to deliver instant callback notifications to the Citiline team. The result is a modern, client-focused platform that enhances efficiency and credibility.",
    repoLink: "https://github.com/Jamal-Raja/Citiline-Website.git",
    liveAppLink: "https://jamal-raja.github.io/Citiline-Website/",
    screenshot:
      "public/assets/images/project-screenshots/citiline-accountants.jpeg",
  },
  {
    name: "README Generator",
    techStack: ["Python", "Streamlit"],
    description:
      "A lightweight Streamlit application that allows users to generate clean and consistent README.md files. It provides a guided form, live Markdown preview, and one-click download functionality, making documentation fast and user-friendly.",
    repoLink: "https://github.com/Jamal-Raja/readme-generator",
    liveAppLink: "https://readme-generator-by-jamal.streamlit.app",
    screenshot:
      "public/assets/images/project-screenshots/readme-generator-python.png",
  },
  {
    name: "Clarity — Minimalist Note App",
    techStack: [
      "HTML",
      "JavaScript",
      "TailwindCSS",
      "DaisyUI",
      "Node.js",
      "Express",
      "JSON Storage",
      "Nodemon",
      "Tailwind CLI",
    ],
    description:
      "Clarity is a minimalist note-taking web app built with Express, Tailwind CSS v4, and DaisyUI. It offers real-time auto-save, instant note creation and deletion, multi-theme support with localStorage, and lightweight JSON-based storage — making it fast, simple, and distraction-free.",
    repoLink: "https://github.com/Jamal-Raja/clarity.git",
    liveAppLink: "https://clarity-7op9.onrender.com/",
    screenshot:
      "public/assets/images/project-screenshots/clarity-notes-app.png",
  },
  {
    name: "Interactive To-Do List",
    techStack: ["HTML", "CSS", "JavaScript"],
    description:
      "A dynamic to-do list application focused on DOM manipulation. Built using vanilla JavaScript, HTML, and CSS, the app provides a clean interface for adding, managing, and removing tasks. The emphasis is on core JavaScript functionality rather than framework-based behaviour.",
    repoLink: "https://github.com/Jamal-Raja/interactive-to-do-list.git",
    liveAppLink: "https://jamal-raja.github.io/interactive-to-do-list/",
    screenshot: "public/assets/images/project-screenshots/to-do-list.jpeg",
  },
  {
    name: "Wireframe-to-Production — Renaissance Construction",
    techStack: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive, multi-page website built from an initial wireframe for Renaissance Construction, a UK-based construction company. Developed with semantic HTML5, modern CSS3, and vanilla JavaScript, the site includes a light/dark theme toggle, sticky header, mobile dropdown navigation, reusable components, responsive hero sections, interactive service cards, and persistent user preferences. The build adheres strictly to the original wireframe specifications.",
    repoLink: "https://github.com/Jamal-Raja/wireframe-to-production.git",
    liveAppLink: "https://jamal-raja.github.io/wireframe-to-production/",
    screenshot:
      "public/assets/images/project-screenshots/wireframe-to-production.jpeg",
  },
];
