import React from "react";
import { LuTrees } from "react-icons/lu";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InfoDiv = ({ text, index }) => {
	return (
		<motion.div
			variants={fadeIn("down", "spring", 0.02 * index, 0.4 * index)}
			initial="hidden"
			whileInView="show"
			whileHover={{ scale: 1.02 }}
			className="flex gap-x-5 items-center bg-white py-2 px-5 rounded-2xl border-2 border-primary cursor-pointer"
		>
			<LuTrees className="text-primary size-[120px] sm:text-[70px]" />
			<p className="text-slate-700 text-[16px] sm:text-[18px]">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
				reiciendis ea natus quibusdam placeat provident eos dolorum consequatur
				ratione incidunt.
			</p>
		</motion.div>
	);
};

export default InfoDiv;
