import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

/* =========================================================
   TECH BACKGROUND
========================================================= */

import techBackground from "../../assets/tech-background.png";

/* =========================================================
   LIGHTNING ASSETS
========================================================= */

import lightningPython from "../../assets/lightning/lightning-python.png";
import lightningSQL from "../../assets/lightning/lightning-sql.png";
import lightningJavaScript from "../../assets/lightning/lightning-javascript.png";
import lightningHTML from "../../assets/lightning/lightning-html.png";
import lightningCSS from "../../assets/lightning/lightning-css.png";
import lightningFastAPI from "../../assets/lightning/lightning-fastapi.png";
import lightningReact from "../../assets/lightning/lightning-react.png";
import lightningOpenAI from "../../assets/lightning/lightning-openai.png";
import lightningStreamlit from "../../assets/lightning/lightning-streamlit.png";
import lightningHuggingFace from "../../assets/lightning/lightning-hugging-face.png";

/* =========================================================
   TYPES
========================================================= */

interface LightningSkill {
  name: string;
  image: string;
}

/* =========================================================
   LIGHTNING MAP
========================================================= */

const lightningSkills: LightningSkill[] = [
  {
    name: "Python",
    image: lightningPython,
  },
  {
    name: "SQL",
    image: lightningSQL,
  },
  {
    name: "JavaScript",
    image: lightningJavaScript,
  },
  {
    name: "HTML",
    image: lightningHTML,
  },
  {
    name: "CSS",
    image: lightningCSS,
  },
  {
    name: "FastAPI",
    image: lightningFastAPI,
  },
  {
    name: "React",
    image: lightningReact,
  },
  {
    name: "OpenAI",
    image: lightningOpenAI,
  },
  {
    name: "Streamlit",
    image: lightningStreamlit,
  },
  {
    name: "Hugging Face",
    image: lightningHuggingFace,
  },
];

/* =========================================================
   GET LIGHTNING FOR TECHNOLOGY
========================================================= */

const getLightning = (
  technologyName: string
): string | undefined => {
  const skill = lightningSkills.find(
    (item) =>
      item.name.toLowerCase() ===
      technologyName.toLowerCase()
  );

  return skill?.image;
};

/* =========================================================
   TECH COMPONENT
========================================================= */

const Tech = () => {
  return (
    <div className="relative w-full overflow-visible">

      {/* =====================================================
          TECH BACKGROUND

          This is ONLY the background.
          It stays behind everything.
      ====================================================== */}

      <img
        src={techBackground}
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

          Nothing else is changed.
      ====================================================== */}

      <div className="relative z-10">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <motion.div
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          className="mb-10"
        >
          <p className="text-[18px] font-medium text-secondary">
            What I have learned so far
          </p>

          <h2 className="mt-2 text-[40px] font-black text-white">
            Technical Skills
          </h2>
        </motion.div>

        {/* =====================================================
            TECHNOLOGY DISPLAY
        ====================================================== */}

        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology, index) => {
            const lightning = getLightning(technology.name);

            return (
              <motion.div
                key={technology.name}
                variants={fadeIn(
                  index % 2 === 0 ? "left" : "right",
                  "spring",
                  index * 0.05,
                  0.75
                )}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="
                  relative
                  h-28
                  w-28
                  overflow-visible
                "
              >

                {/* =================================================
                    LIGHTNING EFFECT

                    Stays BEHIND the BallCanvas.
                    Existing stone is NOT modified.
                ================================================== */}

                {lightning && (
                  <img
                    src={lightning}
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      z-0
                      h-[210px]
                      w-[210px]
                      max-w-none
                      -translate-x-1/2
                      -translate-y-1/2
                      object-contain
                      select-none
                    "
                  />
                )}

                {/* =================================================
                    EXISTING 3D STONE

                    SIZE REMAINS h-28 w-28
                ================================================== */}

                <div className="relative z-10 h-28 w-28">
                  <BallCanvas icon={technology.icon} />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");