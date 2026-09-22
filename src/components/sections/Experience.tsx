import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

import experienceBackground from "../../assets/experience.png";

// ============================================================
// EXPERIENCE CARD
// ============================================================

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          "linear-gradient(135deg, rgba(29,24,54,0.96), rgba(12,18,42,0.94))",
        color: "#fff",
        border: "1px solid rgba(145,94,255,0.45)",
        borderRadius: "18px",
        boxShadow:
          "0 0 30px rgba(145,94,255,0.14), inset 0 0 30px rgba(80,120,255,0.04)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(29,24,54,0.96)",
      }}
      date={experience.date}
      dateClassName="!text-white/80 !font-semibold"
      iconStyle={{
        background:
          "linear-gradient(135deg, #915EFF, #4cc9f0)",
        boxShadow:
          "0 0 0 4px rgba(145,94,255,0.18), 0 0 25px rgba(145,94,255,0.65)",
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      {/* ======================================================
          CARD CONTENT
      ====================================================== */}

      <div>
        <h3 className="text-[22px] font-bold text-white sm:text-[24px]">
          {experience.title}
        </h3>

        <p
          className="mt-1 text-[15px] font-semibold text-[#aaa6c3] sm:text-[16px]"
          style={{ marginBottom: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      {/* ======================================================
          EXPERIENCE POINTS
      ====================================================== */}

      <ul className="mt-5 ml-5 list-disc space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-[13px] leading-6 tracking-wide text-white/80 sm:text-[14px]"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// ============================================================
// EXPERIENCE SECTION
// ============================================================

const Experience = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#050816",
      }}
    >
      {/* ======================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${experienceBackground})`,
          opacity: 0.42,
        }}
      />

      {/* ======================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,8,22,0.38) 0%, rgba(5,8,22,0.50) 45%, rgba(5,8,22,0.72) 100%)",
        }}
      />

      {/* ======================================================
          BLUE / PURPLE GLOW
      ====================================================== */}

      <div
        className="pointer-events-none absolute -right-40 top-10 z-0 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(79,172,254,0.16) 0%, rgba(145,94,255,0.08) 40%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-20 z-0 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(145,94,255,0.14) 0%, rgba(79,172,254,0.06) 45%, transparent 70%)",
        }}
      />

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10">
        {/* ====================================================
            EXPERIENCE HEADER
        ==================================================== */}

        <Header
          useMotion={true}
          {...config.sections.experience}
        />

        {/* ====================================================
            EXPERIENCE INTRO TEXT
        ==================================================== */}

        <div className="mx-auto mt-5 max-w-3xl px-6 text-center">
          <p className="text-[14px] leading-7 text-[#aaa6c3] sm:text-[16px]">
            Turning ideas into real-world solutions through code,
            collaboration and continuous learning.
          </p>
        </div>

        {/* ====================================================
            DECORATIVE LINE
        ==================================================== */}

        <div className="mx-auto mt-8 flex items-center justify-center">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#915EFF] to-[#4cc9f0]" />

          <div className="mx-3 h-2 w-2 rounded-full bg-[#915EFF] shadow-[0_0_15px_#915EFF]" />

          <div className="h-[1px] w-16 bg-gradient-to-r from-[#4cc9f0] via-[#915EFF] to-transparent" />
        </div>

        {/* ====================================================
            EXPERIENCE TIMELINE
        ==================================================== */}

        <div className="mt-16 flex flex-col">
          <VerticalTimeline
            lineColor="rgba(145,94,255,0.65)"
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                {...experience}
              />
            ))}
          </VerticalTimeline>
        </div>

        {/* ====================================================
            BOTTOM DECORATION
        ==================================================== */}

        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 pb-12 pt-4">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#77738f]">
              Better Solutions
            </p>

            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#77738f]">
              A Brighter Tomorrow
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="h-[1px] w-12 bg-[#77738f]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#77738f]">
              Developer Portfolio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");