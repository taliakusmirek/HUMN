'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Knewave, Roboto_Mono } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'
import ClientOnly from './ClientOnly'

const knewave = Knewave({ subsets: ['latin'], weight: ['400']});
const robotoMono = Roboto_Mono({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400', '700'] });

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0000FF' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center p-6" style={{ background: '#0000FF' }}>
        <div className="flex items-center">
          <Image src="/logo.png" alt="HUMN Logo" width={40} height={40} className="mr-2" />
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className={robotoMono.className + " flex space-x-8"}>
            <li><Link href="#about" className="text-[#FFFF00] text-lg uppercase tracking-widest hover:underline">About</Link></li>
            <li><Link href="#experience" className="text-[#FFFF00] text-lg uppercase tracking-widest hover:underline">Experience</Link></li>
            <li><Link href="#apply" className="text-[#FFFF00] text-lg uppercase tracking-widest hover:underline">Apply</Link></li>
            <li><Link href="#contact" className="text-[#FFFF00] text-lg font-bold uppercase tracking-widest hover:underline">Contact</Link></li>
          </ul>
        </nav>
        {/* Mobile Nav Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50 text-[#FFFF00]">
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-[#0000FF] z-40 flex flex-col items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <nav>
              <ul className={robotoMono.className + " flex flex-col items-center space-y-8"}>
                <li><Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-[#FFFF00] text-2xl uppercase tracking-widest">About</Link></li>
                <li><Link href="#experience" onClick={() => setIsMenuOpen(false)} className="text-[#FFFF00] text-2xl uppercase tracking-widest">Experience</Link></li>
                <li><Link href="#apply" onClick={() => setIsMenuOpen(false)} className="text-[#FFFF00] text-2xl uppercase tracking-widest">Apply</Link></li>
                <li><Link href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[#FFFF00] text-2xl font-bold uppercase tracking-widest">Contact</Link></li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="h-[88vh] flex flex-col md:flex-row text-white">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
          <div> {/* Top content */}
            <p className={robotoMono.className + " text-xs uppercase tracking-widest mb-4"}>PRESENTING HUMN</p>
            <h1 className={knewave.className + " text-6xl md:text-7xl lg:text-8xl text-[#FFFF00] leading-none flex flex-col"}>
              <span>boston&apos;s</span>
              <span>new founder</span>
              <span>circle is here.</span>
            </h1>
            <div className="flex items-center gap-4 mt-12">
                <p className={robotoMono.className + " text-lg uppercase"}>
                    FOR GEN Z WOMEN BUILDING BOLD <br /> STARTUPS IN SCHOOL (OR JUST OUT).
                </p>
                <button
                  className="bg-[#FFFF00] text-[#0000FF] font-bold py-4 px-8 text-xl uppercase transition-transform duration-200 hover:scale-105 flex-shrink-0 ml-4"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)'
                  }}
                  onClick={() => {window.open('https://tally.so/r/n9yXyX', '_blank')}}
                >
                  Apply Now
                </button>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 h-full relative">
            <Image
                src="/landing.jpg" 
                alt="A zine-style collage of a woman on the phone"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            {/* Zine-style dots */}
            <div 
              className="hidden md:block absolute -top-16 -left-16 w-64 h-64 z-30"
              style={{
                background: 'radial-gradient(circle, #FFFF00 25%, transparent 26%), radial-gradient(circle, #FFFF00 25%, transparent 26%)',
                backgroundSize: '32px 32px',
                backgroundPosition: '8px 8px, 24px 24px'
              }}
            ></div>
            <div 
              className="hidden md:block absolute -bottom-16 -right-16 w-64 h-64 z-30"
              style={{
                background: 'radial-gradient(circle, #FFFF00 25%, transparent 26%), radial-gradient(circle, #FFFF00 25%, transparent 26%)',
                backgroundSize: '32px 32px',
                backgroundPosition: '8px 8px, 24px 24px'
              }}
            ></div>
            {/* Grain overlay: Add a 'noise.png' to your /public folder for this to work */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none z-20"></div>
        </div>
      </section>
      
      {/* Meet the Founders Section */}
      <ClientOnly>
        <motion.section 
          id="founders" 
          className="py-12 px-8 bg-[#0000FF] text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="max-w-lg mx-auto">
            <h2 className={robotoMono.className + " text-xl uppercase text-center mb-8"}>Founded By</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Talia */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-4">
                    <Image src="/talia.png" alt="Talia Kusmirek" layout="fill" objectFit="contain" objectPosition="center" />
                </div>
                <a href="https://www.linkedin.com/in/talia-kusmirek-b0421b289/" target="_blank" rel="noopener noreferrer" className={knewave.className + " text-2xl uppercase text-[#FFFF00] transition-opacity hover:opacity-75"}>
                    Talia Kusmirek
                </a>
              </div>
              {/* Christy */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-4">
                    <Image src="/christy.png" alt="Christy Lam" layout="fill" objectFit="contain" objectPosition="center" />
                </div>
                <a href="https://www.linkedin.com/in/christy-lam-468a1a334/" target="_blank" rel="noopener noreferrer" className={knewave.className + " text-2xl uppercase text-[#FFFF00] transition-opacity hover:opacity-75"}>
                    Christy Lam
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </ClientOnly>

      {/* About HUMN Section */}
      <ClientOnly>
        <motion.section 
          id="about" 
          className="py-20 px-8 md:px-12 bg-[#0000FF] text-white mt-20 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                  <h2 className={knewave.className + " text-6xl md:text-7xl text-[#FFFF00] uppercase mb-6"}>Our Mission</h2>
                  <p className={robotoMono.className + " text-xl mb-4"}>
                      HUMN is a founder circle for Gen Z women students and recent grads in Boston building for-profit startups. Whether you&apos;re pre-launch or post-pitch, we&apos;re the crew that helps you move faster, feel supported, and stay sane.
                  </p>
                  <p className={robotoMono.className + " text-xl"}>
                      This is your space if you&apos;re serious about building, but tired of feeling like the only girl in the room.
                  </p>
              </div>
              <div className="relative h-64 md:h-96">
                  <Image src="/about.png" alt="About HUMN" layout="fill" objectFit="cover" className="z-10" />
                  {/* Grain overlay */}
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none z-20"></div>
                  <div className="absolute -top-4 -left-4 w-full h-full  border-white"></div>
              </div>
          </div>
        </motion.section>
      </ClientOnly>

      {/* The HUMN Experience Section */}
      <ClientOnly>
        <motion.section 
          id="experience" 
          className="py-20 px-8 md:px-12 bg-[#FFFF00] text-[#0000FF]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="text-center mb-12">
              <h2 className={knewave.className + " text-6xl md:text-8xl uppercase"}>The Humn Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                  { 
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
                      title: "HUMN Circles", 
                      description: "Monthly accountability & connection sessions for real talk and support." 
                  },
                  { 
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
                      title: "Sprint Nights", 
                      description: "Co-working and testing in Boston IRL + dinner and good vibes." 
                  },
                  { 
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>,
                      title: "Impact Nights", 
                      description: "Talks and panels with female leaders who keep it real." 
                  },
                  { 
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>,
                      title: "Retreats", 
                      description: "Cape Cod weekends for strategy, bonding, and reset." 
                  },
                  { 
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
                      title: "Built-In Wellness", 
                      description: "Movement, rest, and therapy-style convos: because we don't burn out here." 
                  },
                  { 
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
                      title: "Demo Showcases", 
                      description: "Show off what you've built and get feedback from the best." 
                  }
              ].map((item, index) => (
                  <div key={index} className="bg-white p-6 relative border-4 border-black -rotate-1 hover:rotate-0 transition-transform flex flex-col items-center text-center">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className={knewave.className + " text-3xl mb-3"}>{item.title}</h3>
                      <p className={robotoMono.className + " text-lg"}>{item.description}</p>
                  </div>
              ))}
          </div>
        </motion.section>
      </ClientOnly>

      {/* Who It's For Section */}
      <ClientOnly>
        <motion.section 
          id="apply" 
          className="py-20 px-8 md:px-12 bg-[#0000FF] text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className={knewave.className + " text-6xl md:text-7xl text-[#FFFF00] uppercase mb-8"}>Who It&apos;s For</h2>
                    <ul className={robotoMono.className + " list-none text-xl space-y-4"}>
                        <li className="flex items-start"><span className="text-[#FFFF00] font-bold text-2xl mr-4">→</span>Gen Z women & femme-identifying founders</li>
                        <li className="flex items-start"><span className="text-[#FFFF00] font-bold text-2xl mr-4">→</span>Undergrad, recent grad, or early-stage</li>
                        <li className="flex items-start"><span className="text-[#FFFF00] font-bold text-2xl mr-4">→</span>Working on a for-profit startup (or ready to start)</li>
                    </ul>
                </div>
                <div className="relative -rotate-2">
                  <Image src="/walking.png" alt="Who It's For" layout="responsive" width={300} height={300} />
                  {/* Grain overlay */}
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none z-20"></div>
                </div>
            </div>
        </motion.section>
      </ClientOnly>

      {/* Join the inner circle Section */}
      <ClientOnly>
        <motion.section 
          className="bg-[#0000FF] text-white text-center py-20 px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className={knewave.className + " text-6xl md:text-8xl text-[#FFFF00] uppercase mb-4"}>Join The<br/>Inner Circle</h2>
          <p className={robotoMono.className + " text-xl max-w-2xl mx-auto mb-12"}>
              Founder nights, retreats, honest convos, and demo showcases: all in Boston.
          </p>
          <div className="flex flex-col items-center gap-6">
              <button
                className="bg-[#FFFF00] text-[#0000FF] font-bold py-3 px-8 text-xl uppercase transition-transform duration-200 hover:scale-105 w-80 max-w-full"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)' }}
                onClick={() => {window.open('https://tally.so/r/n9yXyX', '_blank')}}
              >
                Join the Circle
              </button>
              <button
                className="bg-white text-[#0000FF] font-bold py-3 px-8 text-xl uppercase transition-transform duration-200 hover:scale-105 w-80 max-w-full"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 15%)' }}
                onClick={() => {window.open('mailto:hello@humn.house?subject=Speaker%20Inquiry')}}
              >
                Become a Speaker
              </button>
              <button
                className="border-4 border-[#FFFF00] text-[#FFFF00] font-bold py-3 px-8 text-xl uppercase transition-transform duration-200 hover:bg-[#FFFF00] hover:text-[#0000FF] w-80 max-w-full"
                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 15%, 100% 100%, 0 100%)' }}
                onClick={() => {window.open('#', '_blank')}}
              >
                Help make this house a reality
              </button>
          </div>
        </motion.section>
      </ClientOnly>
      
      {/* Footer */}
      <footer id="contact" className="bg-[#FFFF00] text-[#0000FF] py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
                <h3 className={knewave.className + " text-5xl"}>HUMN</h3>
                <p className={robotoMono.className + " text-lg mt-2"}>Built by women, for the world.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-left">
                <div>
                    <h4 className={robotoMono.className + " font-bold text-xl uppercase mb-2"}>Navigate</h4>
                    <ul className={robotoMono.className}>
                        <li><Link href="#about" className="hover:underline">About</Link></li>
                        <li><Link href="#experience" className="hover:underline">Experience</Link></li>
                        <li><Link href="#apply" className="hover:underline">Apply</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className={robotoMono.className + " font-bold text-xl uppercase mb-2"}>Contact</h4>
                    <a href="mailto:hello@humn.house" className="hover:underline">hello@humn.house</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
} 