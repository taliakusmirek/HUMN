'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import NeonCursor from '@/components/NeonCursor'
import NeonMiniOrb from '@/components/NeonMiniOrb'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-humn-light text-humn-dark">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-humn-light-green">
        <div className="flex items-center">
          {/* Assuming you have an icon in public folder */}
          <Image src="/icon.png" alt="HUMN Logo" width={40} height={40} className="mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#about" className={`text-[#FBFB23] text-sm ${spaceGrotesk.className} nav-underline`}>About</Link></li>
            <li><Link href="#whynow" className={`text-[#FBFB23] text-sm ${spaceGrotesk.className} nav-underline`}>Why Now</Link></li>
            <li><Link href="#program" className={`text-[#FBFB23] text-sm ${spaceGrotesk.className} nav-underline`}>Program</Link></li>
            <li><Link href="#apply" className={`text-[#FBFB23] text-sm ${spaceGrotesk.className} nav-underline`}>Apply</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="section bg-transparent text-humn-purple text-center relative overflow-hidden p-0 min-h-[80vh] flex flex-col items-center justify-center mt-4">
        {/* More NeonMiniOrbs, scattered but not overwhelming */}
        <NeonMiniOrb size={140} style={{ top: 40, left: 60 }} />
        <NeonMiniOrb size={90} style={{ bottom: 80, left: 180 }} />
        <NeonMiniOrb size={70} style={{ top: '35%', left: 40 }} />
        <NeonMiniOrb size={100} style={{ top: 120, right: 120 }} />
        <NeonMiniOrb size={110} style={{ bottom: 60, right: 90 }} />
        <NeonMiniOrb size={80} style={{ top: '60%', left: '60%' }} />
        <NeonMiniOrb size={60} style={{ bottom: 120, right: '30%' }} />
        <NeonMiniOrb size={90} style={{ top: 200, left: '75%' }} />
        <NeonCursor />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-none mx-auto relative z-10 flex flex-col items-center justify-center"
        >
          <h1 className="text-[12vw] font-bold -mt-20 mb-12 w-full tracking-tight leading-[0.95] text-transparent" style={{ WebkitTextStroke: '0.08em #FBFB23', textShadow: '0 0 1px #FBFB23' }}>HUMN</h1>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-4 rounded-full text-lg font-bold border-4 border-[#FBFB23] text-[#433CE3] bg-white shadow-lg mt-8"
            style={{
              boxShadow: '0 0 32px 8px #FBFB23, 0 0 0 2px #FBFB23 inset',
              textShadow: '0 0 8px #FBFB23',
            }}
            onClick={() => {window.open('https://tally.so/r/n9yXyX', '_blank')}}
          >
            → Join the Waitlist
          </motion.button>
        </motion.div>
      </section>

      {/* Partner marquee section with names instead of images */}
      <section className="w-full flex justify-center items-center min-h-[120px] bg-transparent overflow-hidden hidden">
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="marquee flex items-center gap-16 w-max animate-marquee">
            {['OpenAI','Y Combinator','Sequoia','Google for Startups','a16z','First Round'].map((name, i) => (
              <span key={i} className="text-base font-bold px-6 py-2 rounded-full bg-white/80 text-humn-purple shadow-md border-2 border-[#FBFB23] whitespace-nowrap hover:bg-[#FBFB23] hover:text-[#433CE3] transition duration-300">{name}</span>
            ))}
            {/* Repeat for seamless loop */}
            {['OpenAI','Y Combinator','Sequoia','Google for Startups','a16z','First Round'].map((name, i) => (
              <span key={i+100} className="text-base font-bold px-6 py-2 rounded-full bg-white/80 text-humn-purple shadow-md border-2 border-[#FBFB23] whitespace-nowrap hover:bg-[#FBFB23] hover:text-[#433CE3] transition duration-300">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="about" className={"section bg-white text-humn-dark " + spaceGrotesk.className}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-humn-purple">Our Mission</h2>
            <p className="text-xl mb-4">
              HUMN is more than a hacker house, it&apos;s a launchpad for women building radically good companies.
            </p>
            <p className="text-xl mb-4">
              We bring together a select group of builders creating tech that matters in healthcare, sustainability, community, education, and beyond. We provide a home, support system, and springboard for early-stage founders.
            </p>
            <p className="text-xl font-semibold">Born in Boston. Backed by values.<br />Built for impact.</p>
          </div>
          <div className="md:w-1/2">
          <Image src="/mission.jpg" alt="Our Mission" width={800} height={256} className="w-full h-64 object-cover rounded-lg shadow-lg border-4 border-[#433CE3]/20" />
          </div>
        </div>
      </section>

      {/* The HUMN Experience Section */}
      <section id="program" className="section text-humn-dark relative overflow-hidden min-h-[110vh] py-24 pb-[20px]" style={{ background: 'linear-gradient(to bottom, #433CE3 0%, #FBFB23 100%)' }}>
        {/* Orbs behind cards */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <NeonMiniOrb color="purple" size={100} style={{ top: 30, left: 60 }} />
          <NeonMiniOrb color="purple" size={70} style={{ top: '60%', left: 0 }} />
          <NeonMiniOrb color="purple" size={90} style={{ bottom: 80, right: 120 }} />
          <NeonMiniOrb color="purple" size={60} style={{ top: 120, right: 60 }} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <div className="w-full pt-24 pb-16  flex-shrink-0 flex justify-center items-center">
            <h2 className="text-[8vw] font-bold tracking-tight leading-[0.95] text-transparent whitespace-nowrap mx-auto" style={{ WebkitTextStroke: '0.08em #FBFB23', textShadow: '0 0 1px #FBFB23' }}>
              THE HUMN EXPERIENCE
            </h2>
          </div>
          {/* Horizontal scroll cards with images, hide scrollbar, arrow scrolls */}
          <div className="relative w-full mb-24">
            {/* Left arrow button - moved further out */}
            <button
              type="button"
              aria-label="Scroll left"
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow-lg hover:bg-[#FBFB23]/80 transition-colors animate-bounce"
              onClick={() => {
                const el = document.getElementById('experience-scroll');
                if (el) el.scrollBy({ left: -400, behavior: 'smooth' });
              }}
            >
              <svg width="32" height="32" fill="none" stroke="#433CE3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>
            </button>
            {/* Right arrow button - moved further out */}
            <button
              type="button"
              aria-label="Scroll right"
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow-lg hover:bg-[#FBFB23]/80 transition-colors animate-bounce"
              onClick={() => {
                const el = document.getElementById('experience-scroll');
                if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
              }}
            >
              <svg width="32" height="32" fill="none" stroke="#433CE3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div id="experience-scroll" className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar w-full pl-2">
              {[
                { title: "1-week Cohort in Boston", description: "A one-week immersive residency for mission-aligned founders in a beautiful Boston house.", img: "/exp1.jpg" },
                { title: "Monthly Founder Meetings", description: "Ongoing monthly gatherings for deep connection, peer mentorship, and collaborative growth.", img: "/exp2.jpg" },
                { title: "Expert Mentorship", description: "Access to leaders in healthtech, climate, AI, product, and ethics.", img: "/exp3.jpg" },
                { title: "Demo Night + Public Showcase", description: "End your residency pitching to an invited audience of VCs and allies.", img: "/exp4.jpg" },
                { title: "Wellness Programming", description: "Meditation, movement, and mental health support included because you can't pour from an empty cup.", img: "/exp5.jpg" },
                { title: "Impact Retreat Access or Partner House Swap", description: "At the end of the program, top-performing residents are selected for a fully funded 1-week global retreat or a residency swap with a partner house in SF only focused on impact innovation.", img: "/exp6.jpg" }
              ].map((item, index) => (
                <div key={index} className="snap-center min-w-[340px] max-w-xs bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center relative z-10">
<Image src={item.img} alt={item.title} width={160} height={160} className="w-40 h-40 object-cover rounded-xl mb-4 shadow-md" />
<h3 className="text-xl font-semibold mb-2 text-humn-purple">{item.title}</h3>
                  <p className={spaceGrotesk.className + " text-humn-dark text-base text-center"}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Now Section */}
      <section id="whynow" className={"section text-humn-dark text-center relative overflow-hidden " + spaceGrotesk.className} style={{ background: '#433CE3' }}>
        {/* Purple NeonMiniOrbs, unique arrangement */}
        <NeonMiniOrb color="purple" size={100} style={{ top: 20, left: 80, opacity: 0.7 }} />
        <NeonMiniOrb color="purple" size={60} style={{ top: '70%', left: 0, opacity: 0.5 }} />
        <NeonMiniOrb color="purple" size={90} style={{ bottom: 40, right: 200, opacity: 0.6 }} />
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold mb-8" style={{ color: '#FBFB23' }}>Why Now</h2>
              <p className="text-xl mb-12 font-medium" style={{ color: '#FBFB23' }}>
                We believe mission-driven ventures deserve the same hustle, support, and intensity as the next unicorn. And that women should have a space to lead boldly, without compromise.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center items-center">
          <Image src="/whynow.jpg" alt="Why Now" width={320} height={224} className="w-80 h-56 object-cover rounded-full shadow-2xl border-4" style={{ borderColor: '#FBFB23' }} />
          </div>
        </div>
      </section>

      {/* Who Should Apply Section */}
      <section id="apply" className={"section bg-white text-humn-dark text-center relative overflow-hidden " + spaceGrotesk.className}>
        {/* Purple NeonMiniOrbs, unique arrangement */}
        <NeonMiniOrb color="purple" size={60} style={{ top: 60, left: 120, opacity: 0.6 }} />
        <NeonMiniOrb color="purple" size={80} style={{ top: '60%', right: 0, opacity: 0.5 }} />
        <NeonMiniOrb color="purple" size={70} style={{ bottom: 40, left: 200, opacity: 0.7 }} />
        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold mb-8 text-humn-purple">Who Should Apply?</h2>
              <ul className="list-disc list-inside text-xl space-y-2 text-left mx-auto md:mx-0">
                <li>Female-identifying or nonbinary founders</li>
                <li>Early-stage or pre-seed: idea, MVP, or first users</li>
                <li>Building in healthcare, sustainability, education, or social impact</li>
                <li>Values-driven, collaborative, and bold</li>
                <li>Students, recent grads, or self-taught welcome</li>
              </ul>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-center items-center">
          <Image src="/apply.jpg" alt="Who Should Apply" width={340} height={320} className="w-[340px] h-80 object-cover rounded-3xl shadow-2xl border-4 border-[#433CE3]/30" />
          </div>
        </div>
      </section>

      {/* Location Cards Section */}
      <section className={"section bg-white text-humn-dark " + spaceGrotesk.className}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-humn-purple text-center">Choose Your Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* Cape Cod Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FBFB23]"
            >
              <div className="relative h-64">
                <Image src="/capecod.jpg" alt="Cape Cod" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-humn-purple mb-2">Cape Cod, MA</h3>
                <p className="text-lg mb-4">One Week Immersive Experience</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#FBFB23] text-humn-purple px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
                  onClick={() => {window.open('https://tally.so/r/n9yXyX', '_blank')}}
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>

            {/* Newport Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FBFB23]"
            >
              <div className="relative h-64">
                <Image src="/newport.jpeg" alt="Newport" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-humn-purple mb-2">Newport, RI</h3>
                <p className="text-lg mb-4">One Week Immersive Experience</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#FBFB23] text-humn-purple px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
                  onClick={() => {window.open('https://tally.so/r/n9yXyX', '_blank')}}
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={"section bg-white text-humn-dark " + spaceGrotesk.className}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-humn-purple text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border-2 border-[#FBFB23] rounded-xl overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-[#FBFB23]/10 transition-colors">
                  <h3 className="text-xl font-semibold text-humn-purple">Is this program paid for?</h3>
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </span>
                </summary>
                <div className="p-6 bg-white border-t-2 border-[#FBFB23]">
                  <p className="text-lg">No, the program costs $1,500-$2,000 per person.</p>
                </div>
              </details>
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-2 border-[#FBFB23] rounded-xl overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-[#FBFB23]/10 transition-colors">
                  <h3 className="text-xl font-semibold text-humn-purple">Are scholarships available?</h3>
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </span>
                </summary>
                <div className="p-6 bg-white border-t-2 border-[#FBFB23]">
                  <p className="text-lg">No, we do not currently offer scholarships.</p>
                </div>
              </details>
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-2 border-[#FBFB23] rounded-xl overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-[#FBFB23]/10 transition-colors">
                  <h3 className="text-xl font-semibold text-humn-purple">Who should I contact if I need financial assistance?</h3>
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </span>
                </summary>
                <div className="p-6 bg-white border-t-2 border-[#FBFB23]">
                  <p className="text-lg">Please contact <a href="mailto:kusmire@bc.edu" className="text-humn-purple hover:underline">kusmire@bc.edu</a> for any financial assistance inquiries.</p>
                </div>
              </details>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className={"section bg-white text-humn-dark " + spaceGrotesk.className}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-humn-purple">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4 text-humn-purple">Founders</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FBFB23] text-humn-purple px-8 py-3 rounded-full text-lg font-semibold shadow-lg" style={{ textShadow: '0 0 16px #FBFB23, 0 0 8px #FBFB23' }}
                onClick={() => {window.open('https://tally.so/r/n9yXyX', '_blank')}}
              >
                Join the waitlist
              </motion.button>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4 text-humn-purple">Mentors & Speakers</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FBFB23] text-humn-purple px-8 py-3 rounded-full text-lg font-semibold shadow-lg" style={{ textShadow: '0 0 16px #FBFB23, 0 0 8px #FBFB23' }}
                onClick={() => {window.open('https://tally.so/r/nG4Kje', '_blank')}}
              >
                Support our next generation
              </motion.button>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4 text-humn-purple">Funders</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FBFB23] text-humn-purple px-8 py-3 rounded-full text-lg font-semibold shadow-lg" style={{ textShadow: '0 0 16px #FBFB23, 0 0 8px #FBFB23' }}
              >
                Help make this house a reality
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#433CE3] to-[#FBFB23] text-humn-dark pt-24 pb-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-start gap-12">
          <div className="flex-1 flex flex-col items-start justify-center">
            <span className="text-[5vw] font-extrabold tracking-tight leading-[0.95] text-[#FBFB23]" style={{ letterSpacing: '-0.04em', textShadow: '0 0 12px #FBFB23, 0 0 4px #FBFB23' }}>HUMN</span>
            <p className="mt-4 text-lg text-[#FBFB23]">Built by women, for the world.</p>
          </div>
          <div className="flex-1 flex flex-col md:flex-row md:justify-end md:items-start gap-8 w-full">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FBFB23]">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-[#FBFB23] nav-underline">About</Link></li>
                <li><Link href="#apply" className="text-[#FBFB23] nav-underline">Apply</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FBFB23]">Contact</h3>
              <p className="text-[#FBFB23]">hello@humn.house</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 