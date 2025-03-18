import React, { useState } from 'react'
import RevealOnSroll from '../RevealOnSroll'
import emailjs from 'emailjs-com'
import SelectDropdown from '../SelectDropdown'


const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        service: "",
        message: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", service: "", message: "" })
        }).catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    const services = [
        "Business Plan Template & Guide",
        "Marketing Strategy Toolkit",
        "Startup Launch Blueprint",
        "Financial Forecasting Spreadsheet",
        "Sales Funnel Optimization Guide",
        "Brand Positioning Workbook",
        "Customer Retention Strategy Guide",
        "Product Pricing Calculator",
        "Social Media Growth Playbook",
        "Time Management & Productivity System",
        "Other Concerns",
    ];

  return (
    <section
        id="contact"
        className='min-h-screen flex items-center justify-center py-20'
    >
        <RevealOnSroll>
            <div className='px-4 w-full min-w-[300px] md:w-[500px]  p-6'>
                <h2 className='text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'> Get in Touch </h2>
                <form className='space-y-6' onSubmit={handleSubmit}>

                    <div className='relative'>
                        <input 
                            type='text' 
                            id='name' 
                            name='name' 
                            required 
                            value={formData.name}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                            placeholder='Name...'
                            onChange={(e) => 
                                setFormData({...formData, name: e.target.value
                            })}
                        />
                    </div>

                    <div className='relative'>
                        <input 
                            type='email' 
                            id='email' 
                            name='email' 
                            required 
                            value={formData.email}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                            placeholder='example@gmail.com'
                            onChange={(e) => 
                                setFormData({...formData, email: e.target.value
                            })}
                        />
                    </div>

                    <div className='relative'>
                        <div className='flex flex-col space-y-1'>
                            <SelectDropdown
                                name="service"
                                id="service"
                                options={services}
                                required
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            />
                        </div>
                    </div>
                        
                    <input type="hidden" name="service" value={formData.service} />

                    <div className='relative'>
                        <textarea 
                            id='message' 
                            name='message' 
                            required 
                            rows={5}
                            value={formData.message}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                            placeholder='Your Message...'
                            onChange={(e) => 
                                setFormData({...formData, message: e.target.value
                            })}
                        />
                    </div>

                    <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'>
                        Send Message
                    </button>

                </form>
            </div>
        </RevealOnSroll>

    </section>
  )
}

export default Contact