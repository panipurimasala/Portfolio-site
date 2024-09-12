import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text4xl">About 
            <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div className="w-full lg:w-1/2 lg:p-8"
                    initial = {{x:-100, opacity:0}}
                    whileInView = {{x:0, opacity:1}}
                    transition = {{duration:0.5, delay:1}}
            >
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt = ""></img>
                </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2"
                    initial = {{x:100, opacity:0}}
                    whileInView = {{x:0, opacity:1}}
                    transition = {{duration:0.5, delay:1}}>
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 maxw-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
