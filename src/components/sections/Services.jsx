import React from 'react'
import RevealOnSroll from '../RevealOnSroll'
import products from '../Products'
import ProductCard from '../ProductCard'

const Services = () => {
    
  return (
    <section
        id="services"
        className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnSroll>
        <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'> Services </h2>
            <div className='flex justify-center text-center'>
                <h1 className='text-1xl mb-10'>Tailored Strategies for Business Growth & Funding</h1>
            </div>
            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 place-items-center">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`flex items-center  shadow-md space-x-4 rounded-xl border-white/10 border
                        ${index === products.length - 2 ? "md:col-start-2" : ""} 
                        ${index === products.length - 1 ? "md:col-start-3" : ""}`}
                    >
                    <ProductCard name={product.name} price={product.price} Icon={product.icon} />
                    </div>
                ))}
            </div>
            
        </div>
        </RevealOnSroll>
    </section>
  )
}

export default Services