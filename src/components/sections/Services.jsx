import React from 'react'
import RevealOnSroll from '../RevealOnSroll'

const Services = () => {

  return (
    <section
        id="services"
        className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnSroll>
        <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'> Services </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>

              <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'> Service #2 </h3>
                    <div className='space-y-4 text-gray-300'>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
              </div>

              <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'> Service #2 </h3>
                    <div className='space-y-4 text-gray-300'>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
              </div>

              <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'> Service #3 </h3>
                    <div className='space-y-4 text-gray-300'>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
              </div>

              <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'> Service #4 </h3>
                    <div className='space-y-4 text-gray-300'>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
              </div>
            </div>
        </div>
        </RevealOnSroll>
        
    </section>
  )
}

export default Services