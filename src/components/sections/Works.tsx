import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { TProject } from "../../types";

type ProjectCardProps = TProject & {
  index: number;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveDemoLink,
}: ProjectCardProps) => {
  const openLink = (url?: string) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full sm:w-[300px]"
    >
      <Tilt
        glareEnable
        glareMaxOpacity={0.2}
        glareColor="#915EFF"
        glarePosition="all"
        tiltEnable
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.02}
        transitionSpeed={1500}
      >
        <div className="flex h-full w-full flex-col rounded-2xl bg-tertiary p-5 shadow-card">
          
          {/* PROJECT IMAGE */}
          <div className="relative h-[230px] w-full overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={`${name} project`}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* TOP BUTTONS */}
            <div className="absolute right-3 top-3 flex gap-2">
              {sourceCodeLink && (
                <button
                  type="button"
                  onClick={() => openLink(sourceCodeLink)}
                  aria-label={`View ${name} GitHub repository`}
                  title="GitHub Repository"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#915EFF]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.58 9.58 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.002 10.002 0 0022 12C22 6.477 17.523 2 12 2z" />
                  </svg>
                </button>
              )}

              {liveDemoLink && (
                <button
                  type="button"
                  onClick={() => openLink(liveDemoLink)}
                  aria-label={`Open ${name} live demo`}
                  title="Live Demo"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#915EFF]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      d="M7 17L17 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7h10v10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* PROJECT DETAILS */}
          <div className="mt-5 flex flex-1 flex-col">
            <h3 className="text-[24px] font-bold text-white">
              {name}
            </h3>

            <p className="mt-2 text-[14px] leading-[22px] text-secondary">
              {description}
            </p>

            {/* TAGS */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[13px] ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-5 flex gap-3">
              {sourceCodeLink && (
                <button
                  type="button"
                  onClick={() => openLink(sourceCodeLink)}
                  className="flex-1 rounded-lg border border-[#915EFF] px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#915EFF]"
                >
                  GitHub
                </button>
              )}

              {liveDemoLink && (
                <button
                  type="button"
                  onClick={() => openLink(liveDemoLink)}
                  className="flex-1 rounded-lg bg-[#915EFF] px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#7c4ee8]"
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* =====================================================
          PROJECT SECTION HEADING
      ====================================================== */}

      <motion.div
        variants={fadeIn("down", "spring", 0.1, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="text-[18px] font-medium text-secondary">
          What I have built so far
        </p>

        <h2 className="mt-2 text-[40px] font-black text-white">
          Projects
        </h2>
      </motion.div>

      {/* =====================================================
          PROJECT GRID
      ====================================================== */}

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="mt-10 grid w-full grid-cols-1 justify-items-center gap-7 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`${project.name}-${index}`}
            index={index}
            {...project}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");