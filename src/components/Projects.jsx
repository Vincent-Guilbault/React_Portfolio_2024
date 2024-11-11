import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Projets
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              {project.video ? (
                <iframe
                  src={project.video}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="mb-6 rounded w-full sm:w-3/4"
                ></iframe>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded w-full sm:w-3/4"
                />
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex items-center mb-2">
                <h6 className="font-semibold mr-2">
                  {project.title} -{" "}
                  <span className="text-sm text-purple-100">
                    {project.category}
                  </span>
                </h6>
                {/* Icons for live demo and source code */}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-purple-300 hover:text-purple-500"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-purple-300 hover:text-purple-500"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
              </div>
              <p className="mb-1 text-neutral-400">{project.description}</p>
              {project.technologies.map((technologie, index) => (
                <span
                  key={index}
                  className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 inline-block"
                >
                  {technologie}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
