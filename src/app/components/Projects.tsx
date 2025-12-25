'use client'
import React from 'react'
import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'


const Projects = () => {
  return (
    <section id="projects" className='py-20 container max-w-7xl mx-auto px-4'>
        <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        >
        <motion.h2 className='text-3xl font-bold mb-12 text-center'
        variants={fadeInUp}
        >Featured Projects</motion.h2>

        <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-8'
        variants={staggerContainer}
        >
          {
            projects.map((project) => (
              <motion.article
              key={project.id}
              variants={fadeInUp}
              {...cardHoverSmall}
              className='bg-slate-800 rounded-lg shadow-md p-6'>
                <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
                  <Image src={project.image} alt={project.title} fill className='object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                </div>

                <motion.h3 className='text-xl font-semibold mb-2 text-cyan-400'
                whileHover={{ x: 2, color: '#55e2f4ff' }}
                >{project.title}</motion.h3>

                <motion.p 
                variants={fadeInUp}
                className='mb-4 text-slate-300'>{project.description}</motion.p>

                <motion.div
                variants={fadeInUp}
                className='flex flex-wrap gap-2'>
                  {
                    project.technologies.map((tech) => (
                      <motion.span key={tech} 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='px-3 py-1 bg-slate-700 rounded-full text-cyan-400 text-sm'>{tech}</motion.span>
                    ))
                  }
                </motion.div>

                <div className='mt-6 flex flex-row gap-4'>
                  {project.githublink && (
                    <motion.a
                    href={project.githublink} target='_blank' rel='noopener noreferrer' 
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center text-cyan-400 hover:text-cyan-300 transition-colors'>
                      <FaGithub className='w-5 h-5 mr-2'/>
                      View on GitHub
                    </motion.a>
                  )}
                  {project.liveLink && (
                    <motion.a
                    href={project.liveLink} target='_blank' rel='noopener noreferrer' 
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center text-cyan-400 hover:text-cyan-300 transition-colors'>
                      <FaExternalLinkAlt className='w-4 h-4 mr-2'/>
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.article>
            ))
          }
        </motion.div>

        </motion.div>
    </section>
  )
}

export default Projects