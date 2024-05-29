import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const Hero = () => {
	return (
		<div className="flex justify-center items-center h-screen" id="Hero">
			<div className="relative">
				<img
					src="./woods.jpeg"
					className="w-[50rem] rounded-xl drop-shadow-2xl"
					alt=""
				/>
				<motion.div
					variants={fadeIn("left", "spring", 0, 1)}
					initial="hidden"
					whileInView="show"
					className="absolute left-[500px] top-[100px] flex flex-col bg-light p-5 rounded-2xl gap-y-5 border-2 border-primary drop-shadow-2xl"
				>
					<h1 className="text-5xl font-bold whitespace-nowrap">
						Michał Szczepański
					</h1>
					<p className="text-slate-700">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
						exercitationem eligendi a voluptatibus omnis ad obcaecati et sunt
						dicta unde.
					</p>
					<div className="flex gap-x-5">
                        <button className="bg-primary px-3 py-2 rounded-xl text-white transition duration-300 delay-150 hover:scale-105 button-shadow">
                            <a href="#GetStarted">Get Started</a>
                        </button>
                        <button className="border-2 bg-white border-primary px-3 py-2 rounded-xl text-primary transition duration-300 delay-150 hover:scale-105 button-shadow">
                            <a href="#More">More Info</a>
                        </button>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
