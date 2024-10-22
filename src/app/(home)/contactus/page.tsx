"use client"
import React, { useState } from "react";

export default function ContactUs() {
    const [data, setData] = useState({
        name: "",
        email: "",
        textarea: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        textarea: false, 
    });

    const onHandelChange = (e:any) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        
        // Clear error messages when user starts typing
        if (value) {
            setErrors({ ...errors, [name]: false });
        }
    };

    const validateEmail = (email:any) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        
        let valid = true;
        const newErrors = { name: false, email: false, textarea:false };

        if (data.name.trim() === "") {
            newErrors.name = true;
            valid = false;
        }
        
        if (data.textarea.trim() === "") {
            newErrors.textarea = true;
            valid = false;
        }

        if (data.email.trim() === "") {
            newErrors.email = true;
            valid = false;
        }else if (!validateEmail(data.email)) {
            newErrors.email = true; // Invalid email format
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            console.log("Form submitted successfully:", data);
            // Here you can handle form submission (e.g., send data to your API)
            // Reset form data if needed
            setData({ name: "", email: "", textarea: "" });
        }
    };

    return (
        <>
            <div className="flex justify-center">
                <div className="relative md:space-y-[32px] space-y-[16px] md:pt-[96px] pt-[30px] md:pb-[112px] pb-[30px] w-[1280px] mx-4">
                    <div className="relative text-center">
                        <h4 className="text-thinwhite font-semibold md:mb-[80px] mb-[30px] md:text-4xl text-2xl leading-leading-13">
                            Contact Us
                        </h4>
                    </div>
                    <form onSubmit={handleSubmit} className="bg-white drop-shadow-md space-y-6 p-6 rounded-md">
                        <h5 className="text-xl font-semibold mb-6">Have A Query? Ask Our Team</h5>
                        <div>
                            <input
                                type="text"
                                onChange={onHandelChange}
                                name="name"
                                value={data.name}
                                placeholder="Enter Your Name"
                                className="relative w-full text-base font-medium rounded p-3 drop-shadow-md border border-black"
                            />
                            {errors.name && <p className="text-red-600 absolute text-xs">Name is required</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={onHandelChange}
                                name="email"
                                value={data.email}
                                placeholder="Enter your E-mail Id"
                                className="w-full text-base font-medium rounded p-3 drop-shadow-md border border-black"
                            />
                            {errors.email && <p className="text-red-600 absolute text-xs">Valid email is required</p>}
                        </div>
                        <div>
                            <textarea
                                name="textarea"
                                onChange={onHandelChange}
                                value={data.textarea}
                                placeholder="Describe Your Query"
                                rows={5}
                                className="w-full text-base font-medium rounded p-3 drop-shadow-md border border-black"
                            />
                            {errors.textarea && <p className="text-red-600 absolute text-xs">comment is required</p>}
                        </div>
                        <button type="submit" className="bg-black text-base font-semibold text-white px-2 py-[6px] rounded w-full">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}