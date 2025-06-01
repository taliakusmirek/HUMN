'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], style: ['italic'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-humn-light text-humn-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center p-6 shadow-md" style={{ background: '#FBFB23' }}>
        <div className="flex items-center">
          <Image src="/icon.png" alt="HUMN Logo" width={40} height={40} className="mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><Link href="#about" className="text-[#433CE3] text-lg font-normal uppercase tracking-widest nav-underline">About</Link></li>
            <li><Link href="#whynow" className="text-[#433CE3] text-lg font-normal uppercase tracking-widest nav-underline">Why Now</Link></li>
            <li><Link href="#program" className="text-[#433CE3] text-lg font-normal uppercase tracking-widest nav-underline">Program</Link></li>
            <li><Link href="#apply" className={playfair.className + " italic text-[#433CE3] text-lg font-extrabold uppercase tracking-widest nav-underline"}>Apply</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="section bg-[#FBFB23] text-[#433CE3] text-left relative overflow-hidden p-0 min-h-[80vh] flex flex-col md:flex-row items-center justify-center -mt-8">
        <div className="relative z-10 flex-1 flex flex-col items-start justify-center pl-8 pt-4 md:pt-16">
          <h1 className="text-[15vw] font-extrabold uppercase tracking-tight leading-[0.95] mb-2" style={{letterSpacing: '-0.04em'}}>HUMN</h1>
          <h2 className={playfair.className + " italic text-[2.5vw] font-normal mb-6"}>Boston&apos;s Launchpad for Women Building Radically Good Companies</h2>
          <p className="text-xl max-w-xl mb-8">HUMN is more than a hacker house—it&apos;s a home, support system, and springboard for early-stage women and nonbinary founders building tech that matters.</p>
          <div className="flex flex-row gap-4">
            <button
              className="px-10 py-4 rounded-full text-lg font-bold border-4 border-[#433CE3] text-white bg-[#433CE3] mt-2 transition-colors duration-200 hover:bg-[#433CE3] hover:text-[#FBFB23] hover:border-[#FBFB23]"
              style={{letterSpacing: '0.02em'}}
              onClick={() => {window.open('https://tally.so/r/n9yXyX', '_blank')}}
            >
              Apply
            </button>
            <button
              className="px-10 py-4 rounded-full text-lg font-bold border-4 border-[#433CE3] text-[#433CE3] bg-white mt-2 transition-colors duration-200 hover:bg-[#433CE3] hover:text-[#FBFB23] hover:border-[#FBFB23]"
              style={{letterSpacing: '0.02em'}}
              onClick={() => {window.open('https://lu.ma/calendar/cal-Zyqts4M5IQq9841', '_blank')}}
            >
              Our Events
            </button>
          </div>
        </div>
        <div className="relative z-10 flex-1 hidden md:flex flex-col items-center justify-center gap-8 ml-48 -mt-[32rem]">
          {/* SVG Collage - all purple, overlayed and scattered */}
          <span className="absolute top-4 left-8 w-20 rotate-6 opacity-90" style={{zIndex:2}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#433CE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </span>
          <span className="absolute top-40 left-32 w-28 -rotate-12 opacity-80" style={{zIndex:3}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#433CE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </span>
          <span className="absolute top-72 -left-10 w-24 rotate-3 opacity-80" style={{zIndex:1}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#433CE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </span>
          <span className="absolute top-14 left-60 w-16 rotate-12 opacity-90" style={{zIndex:4}}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#433CE3"/></svg>
          </span>
          <span className="absolute top-96 left-40 w-20 -rotate-6 opacity-80" style={{zIndex:2}}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g><path fillRule="evenodd" clipRule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#433CE3"/></g></svg>
          </span>
        </div>
      </section>

      {/* Why Now Section */}
      <section id="whynow" className="section bg-[#FBFB23] text-[#433CE3] text-left relative overflow-hidden flex flex-col items-center justify-center py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col items-start justify-center pl-4">
            <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] mb-6" style={{letterSpacing: '-0.04em'}}>WHY NOW</h2>
            <p className={playfair.className + " italic text-2xl font-normal mb-6"}>
              We believe mission-driven ventures deserve the same hustle, support, and intensity as the next unicorn. And that women should have a space to lead boldly, without compromise.
            </p>
            <p className="text-xl max-w-xl mb-8">
              Now is the time to build for impact. The world needs more women and nonbinary founders creating tech that matters—in healthcare, sustainability, education, and beyond.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image src="/whynow.jpg" alt="Why Now" width={320} height={224} className="w-80 h-56 object-cover rounded-3xl shadow-2xl border-4 border-[#433CE3]" />
          </div>
        </div>
      </section>

      {/* The HUMN Experience Section */}
      <section id="program" className="section bg-[#FBFB23] text-[#433CE3] relative overflow-hidden min-h-[110vh] py-24 pb-[20px]">
        {/* SVG Collage for Experience Section */}
        <span className="absolute top-12 left-1/4 w-24 -rotate-12 opacity-60 pointer-events-none" style={{zIndex:1}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#433CE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </span>
      
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="w-full pt-12 pb-8 flex-shrink-0 flex justify-center items-center">
            <h2 className="text-[7vw] font-extrabold uppercase tracking-tight leading-[0.95] text-[#433CE3] whitespace-nowrap mx-auto mb-2" style={{letterSpacing: '-0.04em'}}>THE HUMN EXPERIENCE</h2>
          </div>
          {/* Horizontal scroll cards with images, hide scrollbar, arrow scrolls */}
          <div className="relative w-full mb-24">
            {/* Left arrow button - moved further out */}
            <button
              type="button"
              aria-label="Scroll left"
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-[#FBFB23] border-2 border-[#433CE3] rounded-full p-2 shadow-lg hover:bg-[#433CE3] hover:text-[#FBFB23] transition-colors"
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
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-[#FBFB23] border-2 border-[#433CE3] rounded-full p-2 shadow-lg hover:bg-[#433CE3] hover:text-[#FBFB23] transition-colors"
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
                { title: "Wellness Programming", description: "Meditation, movement, and mental health support included because you can't pour from an empty cup.", img: "/exp5.jpg" }
              ].map((item, index) => (
                <div key={index} className="snap-center min-w-[340px] max-w-xs bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center relative z-10 border-4 border-[#433CE3]">
                  <Image src={item.img} alt={item.title} width={160} height={160} className="w-40 h-40 object-cover rounded-xl mb-4 shadow-md border-2 border-[#FBFB23]" />
                  <h3 className="text-xl font-extrabold uppercase mb-2 text-[#433CE3] tracking-tight" style={{letterSpacing: '-0.02em'}}>{item.title}</h3>
                  <p className={playfair.className + " italic text-[#433CE3] text-base text-center mb-2"}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply Section */}
      <section id="apply" className="section bg-white text-[#433CE3] text-left relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 py-12">
          <div className="flex-1 flex flex-col items-start justify-center">
            <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] mb-8" style={{letterSpacing: '-0.04em'}}>WHO SHOULD APPLY?</h2>
            <ul className={playfair.className + " italic list-disc list-inside text-xl space-y-4 pl-4 mb-4"}>
              <li className="font-normal">Female-identifying or nonbinary founders</li>
              <li className="font-normal">Early-stage or pre-seed: idea, MVP, or first users</li>
              <li className="font-normal">Building in healthcare, sustainability, education, or social impact</li>
              <li className="font-normal">Values-driven, collaborative, and bold</li>
              <li className="font-normal">Students, recent grads, or self-taught welcome</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image src="/apply.jpg" alt="Who Should Apply" width={340} height={320} className="w-[340px] h-80 object-cover rounded-3xl shadow-2xl border-4 border-[#433CE3]/30" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white text-[#433CE3]">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] mb-12 text-[#433CE3] text-left" style={{letterSpacing: '-0.04em'}}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* General FAQ Block */}
            <details className="group border-2 border-[#433CE3] rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-[#FBFB23]/10 transition-colors">
                <h3 className="text-xl font-semibold text-[#433CE3]">Where are HUMN events held?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="#433CE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="p-6 bg-white border-t-2 border-[#FBFB23]">
                <p className="text-lg">Most HUMN events are held in Boston, MA.</p>
              </div>
            </details>
            <details className="group border-2 border-[#433CE3] rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-[#FBFB23]/10 transition-colors">
                <h3 className="text-xl font-semibold text-[#433CE3]">Who can attend HUMN events?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="#433CE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="p-6 bg-white border-t-2 border-[#FBFB23]">
                <p className="text-lg">Our events are open to women, nonbinary founders, and allies interested in building for impact.</p>
              </div>
            </details>
            <details className="group border-2 border-[#433CE3] rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-[#FBFB23]/10 transition-colors">
                <h3 className="text-xl font-semibold text-[#433CE3]">How do I stay updated on upcoming HUMN events?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="#433CE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="p-6 bg-white border-t-2 border-[#FBFB23]">
                <p className="text-lg">Join our mailing list or follow us on social media for the latest updates.</p>
              </div>
            </details>

            {/* Hacker House Program FAQs */}
            <details className="group border-2 border-[#433CE3] rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-[#FBFB23]/10 transition-colors">
                <h3 className="text-xl font-semibold text-[#433CE3]">Is the Hacker House program paid for?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="#433CE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="p-6 bg-white border-t-2 border-[#FBFB23]">
                <p className="text-lg">No, the Hacker House program costs $1,500-$2,000 per person.</p>
              </div>
            </details>
            <details className="group border-2 border-[#433CE3] rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-[#FBFB23]/10 transition-colors">
                <h3 className="text-xl font-semibold text-[#433CE3]">Are scholarships available for the Hacker House?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="#433CE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="p-6 bg-white border-t-2 border-[#FBFB23]">
                <p className="text-lg">No, we do not currently offer scholarships for the Hacker House program.</p>
              </div>
            </details>
            <details className="group border-2 border-[#433CE3] rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer bg-white hover:bg-[#FBFB23]/10 transition-colors">
                <h3 className="text-xl font-semibold text-[#433CE3]">Who should I contact if I need financial assistance for the Hacker House?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg width="24" height="24" fill="none" stroke="#433CE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="p-6 bg-white border-t-2 border-[#FBFB23]">
                <p className="text-lg">Please contact <a href="mailto:kusmire@bc.edu" className="text-[#433CE3] hover:underline">kusmire@bc.edu</a> for any financial assistance inquiries about the Hacker House.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section bg-[#FBFB23] text-[#433CE3]">
        <div className="max-w-6xl mx-auto text-center py-8">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] mb-6" style={{letterSpacing: '-0.04em'}}>Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <h3 className={playfair.className + " italic text-2xl font-normal mb-4 text-[#433CE3]"}>Founders</h3>
              <button
                className="bg-white text-[#433CE3] border-4 border-[#433CE3] px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-colors duration-200 hover:bg-[#433CE3] hover:text-[#FBFB23] hover:border-[#FBFB23]"
                onClick={() => {window.open('https://tally.so/r/n9yXyX', '_blank')}}
              >
                Apply
              </button>
            </div>
            <div className="flex flex-col items-center">
              <h3 className={playfair.className + " italic text-2xl font-normal mb-4 text-[#433CE3]"}>Mentors & Speakers</h3>
              <button
                className="bg-white text-[#433CE3] border-4 border-[#433CE3] px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-colors duration-200 hover:bg-[#433CE3] hover:text-[#FBFB23] hover:border-[#FBFB23]"
                onClick={() => {window.open('https://tally.so/r/nG4Kje', '_blank')}}
              >
                Support our next generation
              </button>
            </div>
            <div className="flex flex-col items-center">
              <h3 className={playfair.className + " italic text-2xl font-normal mb-4 text-[#433CE3]"}>Funders</h3>
              <button
                className="bg-white text-[#433CE3] border-4 border-[#433CE3] px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-colors duration-200 hover:bg-[#433CE3] hover:text-[#FBFB23] hover:border-[#FBFB23]"
              >
                Help make this house a reality
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#433CE3] text-[#FBFB23] pt-24 pb-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-start gap-12">
          <div className="flex-1 flex flex-col items-start justify-center">
            <span className="text-[5vw] font-extrabold tracking-tight leading-[0.95] text-[#FBFB23]" style={{ letterSpacing: '-0.04em' }}>HUMN</span>
            <p className={playfair.className + " italic mt-4 text-lg text-[#FBFB23]"}>Built by women, for the world.</p>
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