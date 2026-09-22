import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { aboutIntroVideo, services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

/* =========================================================
   ABOUT BACKGROUND
========================================================= */

import aboutBackground from "../../assets/about-background.png";

/* =========================================================
   SERVICE CARD
========================================================= */

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({
  index,
  title,
  icon,
}) => {
  return (
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      glareColor="#aaa6c3"
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full max-w-[200px]"
      >
        <div
          className="
            rounded-[18px]
            border
            border-blue-400/30
            bg-[#07111f]/70
            p-[1px]
            shadow-[0_0_25px_rgba(0,140,255,0.08)]
            transition-all
            duration-300
            hover:border-cyan-400/60
            hover:shadow-[0_0_30px_rgba(0,200,255,0.15)]
          "
        >
          <div
            className="
              flex
              min-h-[125px]
              flex-col
              items-center
              justify-center
              rounded-[17px]
              bg-[#07111f]/80
              px-5
              py-5
            "
          >
            <img
              src={icon}
              alt={title}
              className="mb-3 h-12 w-12 object-contain"
            />

            <h3
              className="
                text-center
                text-[16px]
                font-semibold
                text-white
              "
            >
              {title}
            </h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  const [introFinished, setIntroFinished] = useState(false);

  /* =======================================================
     VIDEO ENDED
  ======================================================= */

  const handleVideoEnded = () => {
    setIntroFinished(true);
  };

  return (
    <div className="relative w-full overflow-hidden">

      {/* =====================================================
          ABOUT BACKGROUND

          Only the background is added.
          All existing content stays above it.
      ===================================================== */}

      <img
        src={aboutBackground}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          select-none
          opacity-60
        "
      />

      {/* =====================================================
          EXISTING CONTENT
      ===================================================== */}

      <div className="relative z-10">

        {/* =====================================================
            ABOUT HEADER
        ===================================================== */}

        <div
          className={`
            transition-all
            duration-700
            ${introFinished ? "mb-2" : "mb-8"}
          `}
        >
          <Header
            useMotion={true}
            {...config.sections.about}
          />
        </div>

        {/* =====================================================
            MAIN ABOUT AREA
        ===================================================== */}

        <div
          className="
            relative
            grid
            w-full
            items-center
            gap-10
            lg:grid-cols-[1.15fr_0.85fr]
          "
        >
          {/* ===================================================
              LEFT SIDE
          =================================================== */}

          <motion.div
            initial={false}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full"
          >
            {/* =================================================
                WHAT I DO LABEL
            ================================================= */}

            <div className="mb-5 flex items-center gap-5">
              <span
                className="
                  text-[14px]
                  font-medium
                  uppercase
                  tracking-[5px]
                  text-[#aaa6c3]
                "
              >
                WHAT I DO
              </span>

              <span
                className="
                  h-[2px]
                  w-16
                  bg-cyan-400
                  shadow-[0_0_12px_rgba(34,211,238,0.9)]
                "
              />
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h2
              className="
                max-w-[850px]
                text-[42px]
                font-black
                leading-[1.02]
                tracking-[-2px]
                text-white
                sm:text-[52px]
                md:text-[60px]
                lg:text-[64px]
              "
            >
              I Build Intelligent
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                Solutions.
              </span>
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                mt-8
                max-w-[850px]
                text-secondary
                text-[16px]
                leading-[30px]
                sm:text-[17px]
                lg:w-[calc(100%+70px)]
                lg:max-w-none
              "
            >
              {config.sections.about.content}
            </motion.p>

            {/* =================================================
                SERVICE CARDS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="
                mt-10
                flex
                flex-wrap
                gap-5
                max-sm:justify-center
              "
            >
              {services.slice(0, 4).map((service, index) => (
                <ServiceCard
                  key={service.title}
                  index={index}
                  {...service}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* ===================================================
              RIGHT SIDE VIDEO
          =================================================== */}

          <motion.div
            layout
            className="
              relative
              flex
              w-full
              items-end
              justify-center
              lg:justify-end
            "
          >
            {/* =================================================
                BLUE GLOW
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-[10%]
                h-[350px]
                w-[300px]
                rounded-full
                bg-cyan-500/10
                blur-[100px]
              "
            />

            {/* =================================================
                TRANSPARENT VIDEO

                Plays ONE TIME and stops at final frame.
            ================================================= */}

            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              className="
                relative
                z-10
                block
                h-auto
                w-full
                max-w-[500px]
                object-contain
              "
            >
              <source
                src={aboutIntroVideo}
                type="video/webm"
              />

              Your browser does not support WebM video.
            </video>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");