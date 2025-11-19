export default function About() {
  return (
    <>
      <div
        id="About"
        className="bg-[#181A1C] text-white w-full py-18 px-12 flex justify-center"
      >
        <div className="max-w-[1200px]">
          <h1 className="text-4xl">Get the highlights.</h1>
          <p className="mt-6">
            I’m a UK-based full-stack developer and BCS Level 4 graduate with a
            focus on building efficient, scalable web applications. I enjoy
            creating clean, responsive interfaces and pairing them with
            well-structured APIs and secure backend logic. Along the way, I’ve
            built strong experience with modern JavaScript tooling,
            component-based architecture, RESTful services, database design, and
            authentication workflows.
            <br />
            <br />
            I’m driven by solving problems in a clear, logical way and writing
            code that’s maintainable and easy to build on. I’m now looking for a
            role where I can bring these skills into a production environment,
            learn from experienced engineers, and continue pushing my technical
            abilities forward.
          </p>

          <div className="flex flex-col gap-8 text-4xl pt-8">
            {/* Front-end */}
            <div>
              <h3 className="text-xl mb-3 font-semibold">Front-end</h3>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <i className="devicon-javascript-plain colored"></i>
                  <span className="text-base">JavaScript</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="devicon-typescript-plain colored"></i>
                  <span className="text-base">TypeScript</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="devicon-react-original colored"></i>
                  <span className="text-base">React</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="devicon-tailwindcss-plain colored"></i>
                  <span className="text-base">Tailwind</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="devicon-bootstrap-plain colored"></i>
                  <span className="text-base">Bootstrap</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="devicon-html5-plain colored"></i>
                  <span className="text-base">HTML</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="devicon-css3-plain colored"></i>
                  <span className="text-base">CSS</span>
                </div>
              </div>
            </div>

            {/* Back-end */}
            <div>
              <h3 className="text-xl mb-3 font-semibold">Back-end</h3>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <i className="devicon-nodejs-plain colored"></i>
                  <span className="text-base">Node.js</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="devicon-express-original"></i>
                  <span className="text-base">Express</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="devicon-sequelize-plain colored"></i>
                  <span className="text-base">Sequelize</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="devicon-jwt-plain colored"></i>
                  <span className="text-base">JWT</span>
                </div>

                <div className="flex items-center gap-2">
                  <i className="devicon-mysql-plain colored"></i>
                  <span className="text-base">MySQL</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    className="w-10 h-10"
                  />
                  <span className="text-base">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
