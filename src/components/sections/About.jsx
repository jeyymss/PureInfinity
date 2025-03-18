import React from 'react'
import RevealOnSroll from '../RevealOnSroll'
import About1 from "../../assets/About1.png";
import About2 from "../../assets/About2.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <RevealOnSroll>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Us
          </h2>

          <div className="flex justify-center text-center mb-10">
            <p className="text-lg md:text-xl max-w-3xl">
              At Pure Infinity LLC, we help businesses secure funding and grow with expert strategic guidance. 
              Our mission is to provide entrepreneurs with the right tools and funding support to succeed.
            </p>
          </div>

          {/* About 1 section */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={About1} 
                className="w-full max-w-[450px] h-[300px] object-cover rounded-lg shadow-lg" 
                alt="About 1" 
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">
                Driving Success Through Strategic Consulting
              </h3>
              <p className="text-lg">
                With years of experience in business consulting, we have helped startups and enterprises secure 
                grants, optimize their business strategies, and achieve scalable growth.
              </p>
            </div>
          </div>

          <div className="h-10" />

          {/* About 2 section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={About2} 
                className="w-full max-w-[450px] h-[300px] object-cover rounded-lg shadow-lg" 
                alt="About 2" 
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">
                Turning Challenges into Opportunities for Growth
              </h3>
              <p className="text-lg">
                Our expert team understands the challenges businesses face and provides practical solutions. 
                We are committed to helping you turn ideas into successful ventures.
              </p>
            </div>
          </div>
        </div>
      </RevealOnSroll>
    </section>
  )
}

export default About;
