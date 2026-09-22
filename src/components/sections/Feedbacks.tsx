import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { certifications } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

/* =========================================================
   CONTACT / CERTIFICATIONS BACKGROUND
========================================================= */

import contactBackground from "../../assets/contact-background.png";

/* =========================================================
   CERTIFICATION CARD
========================================================= */

interface ICertificationCard {
  index: number;
  name: string;
  issuer: string;
  date: string;
  icon?: string;
}

const CertificationCard: React.FC<ICertificationCard> = ({
  index,
  name,
  issuer,
  date,
  icon,
}) => {
  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.25}
      glareColor="#aaa6c3"
      glarePosition="all"
      tiltEnable
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      scale={1.02}
      transitionSpeed={1500}
    >
      <div className="w-full max-w-[350px] xs:w-[350px]">
        <motion.div
          variants={fadeIn(
            "right",
            "spring",
            index * 0.3,
            0.75
          )}
          className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
        >
          <div className="flex min-h-[330px] flex-col items-center justify-between rounded-[20px] bg-tertiary px-6 py-6">

            {/* CERTIFICATION IMAGE */}

            <div className="flex h-[130px] w-full items-center justify-center">
              {icon ? (
                <img
                  src={icon}
                  alt={name}
                  className="h-24 w-24 object-contain"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#915EFF]/20 text-4xl">
                  🏆
                </div>
              )}
            </div>

            {/* DATE */}

            <p className="mt-4 text-center text-sm font-medium text-[#aaa6c3]">
              {date}
            </p>

            {/* CERTIFICATION NAME */}

            <h3 className="mt-3 text-center text-[20px] font-bold text-white">
              {name}
            </h3>

            {/* ISSUER */}

            <p className="mt-3 text-center text-[15px] text-secondary">
              {issuer}
            </p>
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
};

/* =========================================================
   CERTIFICATIONS
========================================================= */

const Feedbacks = () => {
  return (
    <div className="relative w-full overflow-visible">

      {/* =====================================================
          CONTACT BACKGROUND

          - Behind all content
          - Blended with the existing dark background
          - Slightly reduced brightness
          - Does not affect text/cards
      ===================================================== */}

      <img
        src={contactBackground}
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
          object-center
          opacity-[0.65]
          select-none
        "
      />

      {/* =====================================================
          DARK BLENDING OVERLAY

          Makes the background blend into the portfolio
          instead of looking like a separate image.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[#050816]/20
        "
      />

      {/* =====================================================
          EXISTING CONTENT
      ===================================================== */}

      <div className="relative z-10">

        {/* CERTIFICATIONS HEADER */}

        <Header
          useMotion={true}
          {...config.sections.feedbacks}
        />

        {/* CERTIFICATIONS DESCRIPTION */}

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          {config.sections.feedbacks.content}
        </motion.p>

        {/* CERTIFICATION CARDS */}

        <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={`${certification.name}-${index}`}
              index={index}
              {...certification}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SectionWrapper(
  Feedbacks,
  "certifications"
);