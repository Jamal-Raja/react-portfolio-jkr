import Particles from "./Particles";
import TiltedCard from "./TiltedCard";

export default function Project() {
  return (
    <>
      <div className="w-full relative bg-black text-white flex flex-col items-center">
        <div className="absolute inset-0 w-screen">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="mx-12 my-18 max-w-[1200px] w-full">
          <h1 className="text-4xl pb-18 px-12 md:px-0">Projects</h1>
          {/* cardgrid */}
          <div className="flex justify-center flex-wrap gap-10 sm:gap-8 md:gap-6 lg:gap-14">
            {allProjects.map((project) => {
              return (
                <div className="w-full sm:basis-[calc(50%-1rem)] md:basis-[calc(50%-2rem)] lg:basis-[calc(50%-3.5rem)] ">
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
                                <p className="bg-black text-white rounded-full px-2 py-1">
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
    name: "README Generator",
    techStack: ["Python", "Streamlit"],
    description:
      "A lightweight Streamlit application that allows users to generate clean and consistent README.md files. It provides a guided form, live Markdown preview, and one-click download functionality, making documentation fast and user-friendly.",
    repoLink: "https://github.com/Jamal-Raja/readme-generator",
    liveAppLink: "https://readme-generator-by-jamal.streamlit.app",
    screenshot:
      "public/assets/images/project-screenshots/readme-generator-python.png",
  },
];
