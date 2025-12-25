"use client"
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, fadeIn, staggerContainer } from '@/utils/animations';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4 text-slate-100'>
        <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className='max-w-3xl mx-auto text-center'>

            <motion.div 
            variants={scaleIn}
            className='flex flex-col items-center mb-4'>
                <Image src="/profile.png" alt='profile image' height={100} width={100} className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-cyan-400'/>
            </motion.div>

            <motion.h1 
            variants={fadeInUp}
            transition={{delay: 0.3}}
            className='text-4xl md:text-6xl font-bold mb-6'>Hi, I&apos;m <motion.span 
            variants={fadeIn}
            transition={{delay: 0.8}}
            className='text-cyan-400'>Hashmi</motion.span>
            </motion.h1>

            <motion.p
            variants={fadeInUp}
            transition={{delay: 0.4}}
            className='text-xl md:text-2xl mb-8 text-slate-300'>Front-End Developer | Agentic AI Enthusiast</motion.p>

            <motion.div
            variants={fadeInUp}
            transition={{delay: 0.5}}
            className='flex justify-center space-x-4 mb-8'>
              <motion.a
              href="https://github.com/bismahashmi2"  target='_blank' rel='noopener noreferrer' className='text-2xl text-slate-300 hover:text-cyan-400 transition-colors'
              whileHover={{scale: 1.2}}><FaGithub/>
              </motion.a>

              <motion.a href="https://www.linkedin.com/in/hashmi-hashmi" target='_blank' rel='noopener noreferrer' className='text-2xl text-slate-300 hover:text-cyan-400 transition-colors'
              whileHover={{scale: 1.2}}><FaLinkedin/>
              </motion.a>
            </motion.div>

            <motion.div
            variants={fadeInUp}
            transition={{delay: 0.6}}
            className='flex flex-col md:flex-row justify-center gap-4'>
              <Link href={'#projects'} className='bg-cyan-400 text-white inline-block w-full md:w-auto px-8 py-3 rounded-lg hover:bg-cyan-400/90 transition-colors duration-300'>View Projects</Link>

              <Link href={'#contact'} className='bg-slate-200 text-slate-800 inline-block w-full md:w-auto px-8 py-3 rounded-lg hover:bg-slate-200/90 transition-colors duration-300'>Contact Me</Link>
            </motion.div>


        </motion.div>
    </section>
  )
}

export default Hero;