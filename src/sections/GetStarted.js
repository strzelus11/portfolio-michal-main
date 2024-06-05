import React from "react";
import { IoIosMail, IoMdCreate } from "react-icons/io";
import { motion } from "framer-motion";

const GetStarted = () => {
	return (
		<div
			className="flex justify-center items-center h-screen image"
			id="GetStarted"
		>
			<div className="w-full flex flex-col sm:w-[50%] gap-y-[50px] justify-center items-center content">
				<h1 className="text-5xl font-bold text-light">Get Started</h1>
				<div className="flex gap-x-3 sm:w-[50%] justify-center items-center relative">
					<IoIosMail className="w-10 h-10 text-light absolute top-1 left-[-60px]" />
					<motion.input
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						type="email"
						placeholder="Your E-mail"
						className="w-full border-2 border-secondary p-2 rounded-xl bg-white button-shadow focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition duration-150"
					/>
				</div>
				<div className="flex gap-x-3 sm:w-[50%] justify-center items-center relative">
					<IoMdCreate className="w-10 h-10 text-light absolute top-1 left-[-60px]" />
					<motion.textarea
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						placeholder="Type your message ..."
						className="w-full h-[200px] p-2 rounded-xl bg-white border-2 border-secondary button-shadow focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition duration-150"
					></motion.textarea>
				</div>
				<button className="w-[50%] bg-secondary px-3 py-2 rounded-xl text-white transition duration-300 delay-150 hover:scale-105 hover:bg-primary hover:text-white button-shadow">
					Submit
				</button>
			</div>
		</div>
	);
};

export default GetStarted;
