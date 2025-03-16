import React from 'react'
import RevealOnSroll from '../RevealOnSroll'

const About = () => {

  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ]
  
  const backendSkills = [
    "Node.js",
    "Python",
    "AWS",
    "MongoDB",
    "GraphQL",
  ]



  return (
    <section
        id="about"
        className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnSroll>
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'> About Us</h2>

            <div className='flex justify-center text-center mb-5'>
              <h1 className='text-1xl mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
              <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                      <h3 className='text-xl font-bold mb-4 text-center'> COO </h3>
                      <div className='space-y-4 text-gray-300'>
                            <div>
                                <img src="https://archive.org/download/placeholder-image/placeholder-image.jpg" alt="profile" 
                                
                                className='w-3xl h-3xl'/>
                                <p className='mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                      </div>
              </div>

              <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                      <h3 className='text-xl font-bold mb-4 text-center'> CEO </h3>
                      <div className='space-y-4 text-gray-300'>
                            <div>
                                <img src="https://archive.org/download/placeholder-image/placeholder-image.jpg" alt="profile" 
                                
                                className='w-3xl h-3xl'/>
                                <p className='mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                      </div>
              </div>

              <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                      <h3 className='text-xl font-bold mb-4 text-center'> CFO </h3>
                      <div className='space-y-4 text-gray-300'>
                            <div>
                                <img src="https://archive.org/download/placeholder-image/placeholder-image.jpg" alt="profile" 
                                
                                className='w-3xl h-3xl'/>
                                <p className='mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                      </div>
              </div>
            </div>
            
        </div>
        </RevealOnSroll>    

    </section>
  )
}

export default About