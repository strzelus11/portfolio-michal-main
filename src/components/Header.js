import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

import { slideIn } from "../utils/motion";

const links = ["More", "Skills", "Hobbys", "Testimonials"];

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="p-5 h-[80px] flex items-center transition delay-150 duration-300 bg-secondary text-light hover:opacity-100">
			<div className="hidden sm:flex w-full justify-around">
				<a href="#Hero">
					<img className="w-12" src="./logo.png" alt="" />
				</a>
				<div className="flex justify-center gap-x-10">
					{links.map((link, index) => (
						<button
							key={index}
							className="hover:scale-105 hover:text-white transition delay-100 duration-300"
						>
							<a href={`#${link}`}>{link}</a>
						</button>
					))}
				</div>
				<button className="border-2 bg-light border-primary px-3 py-2 rounded-xl text-primary transition duration-300 delay-150 hover:scale-105 whitespace-nowrap font-semibold button-shadow">
					<a href="#GetStarted">Get Started</a>
				</button>
			</div>
			<div className="sm:hidden flex w-full items-center justify-between">
				<a href="#Hero">
					<img className="w-12" src="./logo.png" alt="" />
				</a>
				<button onClick={() => setOpen(true)}>
					<FaBars className="w-8 h-8" />
				</button>
				<AnimatePresence>
					{open && (
						<motion.div
							variants={slideIn("right", "tween", 0, 0.5)}
							initial="hidden"
							whileInView="show"
							exit="exit"
							className="absolute right-0 top-0 bg-secondary w-[60%] h-screen"
						>
							<button className="m-5" onClick={() => setOpen(false)}>
								<IoMdClose className="w-8 h-8" />
							</button>
							<div className="h-[50%] flex flex-col justify-between py-10 items-center gap-y-10">
								{links.map((link, index) => (
									<button
										key={index}
										className="hover:scale-105 hover:text-white transition delay-100 duration-300"
										onClick={() => setOpen(false)}
									>
										<a href={`#${link}`}>{link}</a>
									</button>
								))}
								<button
									className="border-2 bg-light border-primary px-3 py-2 rounded-xl text-primary transition duration-300 delay-150 hover:scale-105 whitespace-nowrap font-semibold button-shadow"
									onClick={() => setOpen(false)}
								>
									<a href="#GetStarted">Get Started</a>
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Header;
