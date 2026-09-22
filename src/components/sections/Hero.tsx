import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import { heroBackground } from "../../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[#020617]
      "
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}

      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt=""
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* =========================================================
          DARK CINEMATIC OVERLAY
      ========================================================= */}

      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-gradient-to-r
          from-[#020617]/95
          via-[#020617]/65
          to-[#020617]/25
        "
      />

      {/* Bottom cinematic gradient */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-[2]
          h-[45%]
          bg-gradient-to-t
          from-[#020617]
          via-[#020617]/60
          to-transparent
        "
      />

      {/* =========================================================
          PURPLE / BLUE LIGHTING
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[20%]
          z-[2]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#915EFF]/15
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[15%]
          z-[2]
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          z-20
          mx-auto
          flex
          max-w-7xl
          flex-row
          items-start
          ${styles.paddingX}
        `}
      >
        {/* =======================================================
            LEFT VERTICAL LINE
        ======================================================= */}

        <div
          className="
            mt-[150px]
            hidden
            flex-col
            items-center
            justify-center
            sm:flex
          "
        >
          {/* Glowing dot */}

          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              h-4
              w-4
              rounded-full
              bg-[#915EFF]
              shadow-[0_0_20px_rgba(145,94,255,0.9)]
            "
          />

          {/* Glowing vertical line */}

          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: 260,
            }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="
              w-[2px]
              bg-gradient-to-b
              from-[#915EFF]
              via-purple-400
              to-transparent
              shadow-[0_0_15px_rgba(145,94,255,0.8)]
            "
          />
        </div>

        {/* =======================================================
            TEXT CONTENT
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
            mt-[120px]
            ml-0
            max-w-[650px]
            sm:ml-6
            md:ml-8
            lg:ml-10
          "
        >
          {/* =====================================================
              STYLISH HI
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              x: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              relative
              mb-2
              inline-block
              font-['cursive']
              text-[42px]
              italic
              leading-none
              text-white
              drop-shadow-[0_0_15px_rgba(145,94,255,0.8)]
              sm:text-[48px]
              md:text-[54px]
            "
          >
            {/* Lightning glow */}

            <motion.span
              animate={{
                opacity: [0.4, 1, 0.5, 1, 0.4],
                textShadow: [
                  "0 0 5px #ffffff",
                  "0 0 15px #915EFF",
                  "0 0 30px #22d3ee",
                  "0 0 10px #ffffff",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              Hi,
            </motion.span>

            {/* Small lightning flash */}

            <motion.span
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0.5, 1.4, 0.5],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              className="
                pointer-events-none
                absolute
                -right-5
                top-1/2
                h-7
                w-[2px]
                rotate-[25deg]
                bg-cyan-300
                shadow-[0_0_8px_#22d3ee,0_0_20px_#22d3ee]
              "
            />
          </motion.div>

          {/* =====================================================
              NAME - ONE LINE
          ===================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.35,
            }}
            className="
              whitespace-nowrap
              text-[36px]
              font-black
              leading-tight
              tracking-[-1.5px]
              text-white
              sm:text-[44px]
              md:text-[52px]
              lg:text-[58px]
            "
          >
            I'm{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#915EFF]
                via-purple-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              {config.hero.name}
            </span>
          </motion.h1>

          {/* =====================================================
              ROLE
          ===================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="
              mt-5
              text-[16px]
              font-medium
              tracking-wide
              text-white/90
              sm:text-[18px]
              md:text-[20px]
            "
          >
            Software Engineer&nbsp; | &nbsp;AI/ML Engineer&nbsp; | &nbsp;Python
            Developer
          </motion.p>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="
              mt-5
              max-w-[650px]
              text-[15px]
              leading-[27px]
              text-white/75
              sm:text-[16px]
              sm:leading-[29px]
              md:text-[17px]
            "
          >
            I build AI-powered, modern, and scalable full-stack applications
            using Python and cutting-edge web technologies.
          </motion.p>

          {/* =====================================================
              SMALL GLOWING LINE
          ===================================================== */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 120,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className="
              mt-7
              h-[2px]
              bg-gradient-to-r
              from-[#915EFF]
              to-cyan-400
              shadow-[0_0_15px_rgba(34,211,238,0.8)]
            "
          />
        </motion.div>
      </div>

      {/* =========================================================
          ROTATABLE 3D COMPUTER

          IMPORTANT:
          ComputersCanvas is kept exactly as the existing
          interactive 3D PC component.

          Do NOT replace this with an image.
      ========================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          mx-auto
          h-[55%]
          w-full
          sm:h-[60%]
          md:h-[65%]
        "
      >
        <ComputersCanvas />
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="
          pointer-events-auto
          absolute
          bottom-8
          left-1/2
          z-30
          -translate-x-1/2
        "
      >
        <a
          href="#about"
          className="
            flex
            h-[55px]
            w-[32px]
            items-start
            justify-center
            rounded-3xl
            border-2
            border-white/50
            bg-black/70
            p-2
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-[#915EFF]
            hover:shadow-[0_0_20px_rgba(145,94,255,0.5)]
          "
        >
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-white
              shadow-[0_0_10px_rgba(255,255,255,0.8)]
            "
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;