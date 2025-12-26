"use client";
import React from "react";
import { skills, education } from "@/contents/about";
import * as FaIcons from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, fadeInDown, fadeIn, staggerContainer, cardHoverSmall, cardHover } from "@/utils/animations";

type IconName = keyof typeof FaIcons;

const About = () => {
  return (
    <section id="about" className="container max-w-7xl mx-auto py-20">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
      <motion.h1 
      variants={fadeInDown}
      className="text-4xl font-bold mb-8 text-center text-cyan-400">About Me</motion.h1>

      {/* bio section */}
      <motion.section 
      variants={fadeInUp}
      className="mb-16">
        <p className="text-lg max-w-3xl mx-auto text-center text-slate-300">I&apos;m a passionate Frontend Developer and Agentic AI Engineer with expertise in modern programming languages. With a strong foundation in front-end technologies and Python, I create stunning websites and powerful chatbots in a short time.</p>
      </motion.section>

      {/* skills section */}
      <motion.section 
      variants={fadeIn}
      className="mb-16">

        <motion.h2 className="section-title"
        variants={fadeInUp}
        >
          Skills
          </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        >
          {skills.map((skill) => {
            const IconComponent = FaIcons[skill.icon as IconName]; // Dynamically get icon component
            return (
              <motion.div
                key={skill.name}
                className="bg-slate-700 text-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHover}
              >
                {IconComponent && <IconComponent className="h-8 w-8 text-cyan-400 mb-4" />}
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <ul className="text-slate-300 space-y-2">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* education section */}
      <motion.section
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, delay: 0.6 } }
      }}>
        <motion.h2 className="section-title"
        variants={fadeInUp}
        >Education</motion.h2>

        <motion.div 
        variants={staggerContainer}
        className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index} // Using index as key since no unique ID is available
              variants={fadeInUp}
              {...cardHoverSmall}
              className="bg-slate-700 text-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-cyan-400 mb-2">{edu.institution} <span className="mx-2">|</span> {edu.duration}</p>  
              <p className="text-slate-300">{edu.description}</p>   
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

    </motion.div>
    </section>
  );
}

export default About;
