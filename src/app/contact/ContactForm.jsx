'use client'

import { useRouter } from "next/router";
import { useState } from "react"


export default function ContactForm() {

    const url = `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME}`;

    const [formSent, setFormSent] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        
        // console.log('Form data submitted:', formData);

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`
            },
            body: JSON.stringify({fields: {
                name:formData.name,
                email:formData.email,
                message:formData.message
            
            }})   
        })

        setFormSent(true)
    };

    return(
        <div id="contact-us" className="overflow-hidden py-16 px-4 bg-background sm:px-6 lg:px-8 lg:py-24">
            {!formSent && 
                <div className="relative mx-auto max-w-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight primarytext sm:text-4xl">Contact Us</h2>
                        <p className="mt-4 text-lg leading-6 primarysecondary">Please use the form below to contact us. Thank you!</p>
                    </div>
                    <div className="mt-12">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-fontSecondary">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-fontSecondary">Email</label>
                                <input 
                                    type="text" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-fontSecondary">Email</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                                />
                            </div>
                            <button 
                            className="button"
                            disabled={isLoading}
                            >
                                {isLoading && <span>Submiting...</span>}
                                {!isLoading && <span>Send Message</span>}
                            </button>

                        </form>
                    </div>
                </div>
            }


            {formSent && 
                <div className="relative mx-auto max-w-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight primarytext sm:text-4xl"> Thank You</h2>
                        <p className="mt-4 text-lg leading-6 primarysecondary">We have recieved your inquiry and will get back to you by email</p>
                    </div>
                </div>
            }
        </div>
     
    )

}