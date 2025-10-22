import React from 'react'
import { User, Phone, Mail } from 'lucide-react'

const ContactForm = () => {
    return (
        <section className="min-h-screen px-4 py-16 bg-base-200">
            <div className='container mx-auto flex flex-col items-center justify-center h-full'>

                {/* This is where the contact form will be. */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">

                    <div className="order-1 lg:order-1 flex justify-center">
                        <div className="stack w-80 h-auto mx-1 sm:mx-5 lg:w-[500px]">
                            <img
                                src="https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg"
                                alt="Florist shop"
                                className="w-full h-auto rounded-md rotate-6 sm:rotate-8 shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="order-2 lg:order-2 flex justify-center">
                        <div className='card shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
                            <form className="card-body p-8">

                                {/* name section of the form  */}
                                <label className="label">
                                    <span className='label-text text-base'>Name</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full pl-12 h-12"
                                    />
                                    <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />                            
                                </div>

                                {/* phone section of the form  */}
                                <label className="label">
                                    <span className='label-text text-base'>Phone</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="input input-bordered w-full pl-12 h-12"
                                    />
                                    <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />                            
                                </div>

                                {/* Message section of the form  */}
                                <label className="label">
                                    <span className='label-text text-base'>Message</span>
                                </label>
                                <div className="relative">
                                    <textarea
                                        placeholder="Your Message"
                                        className="textarea textarea-bordered w-full pl-12 pt-4 min-h-[150px] resize-none"
                                    />
                                    <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />                            
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-gradient-to-r from-teal-500 via-sky-500 to-blue-500 text-white border-0 hover:from-teal-600 hover:via-sky-600 hover:to-blue-600 h-12">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactForm