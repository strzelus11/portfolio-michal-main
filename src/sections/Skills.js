import React, { useState } from "react";
import { FaHtml5, FaJs, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import SkillIcon from "../components/SkillIcon";

const Skills = () => {
	const [hoveredSkill, setHoveredSkill] = useState("");
	const [color, setColor] = useState("");

	const handleSkillHover = (skillName, color) => {
		setHoveredSkill(skillName);
		setColor(color);
	};

	const handleSkillLeave = () => {
		setHoveredSkill("");
	};

	return (
		<div className="flex justify-center h-screen" id="Skills">
			<div className="flex flex-col gap-y-[70px] justify-center items-center">
				<div className="relative flex justify-center items-center">
					<h1
						className="absolute text-5xl font-bold whitespace-nowrap transition-opacity delay-300 duration-300 ease-in-out opacity-100"
						style={{ opacity: hoveredSkill ? 0 : 1 }}
					>
						My skillset
					</h1>
					<h1
						className={`absolute text-5xl font-bold whitespace-nowrap transition-opacity delay-300 duration-300 ease-in-out opacity-0 text-${color}-500`}
						style={{ opacity: hoveredSkill ? 1 : 0 }}
					>
						{hoveredSkill}
					</h1>
				</div>
				<div className="grid grid-cols-3 sm:flex justify-between gap-x-5 gap-y-5">
					<SkillIcon
						Icon={FaHtml5}
						onMouseEnter={() => handleSkillHover("HTML", "red")}
						onMouseLeave={handleSkillLeave}
						color="text-red-500"
						index={1}
					/>
					<SkillIcon
						Icon={RiTailwindCssFill}
						onMouseEnter={() => handleSkillHover("Tailwind CSS", "blue")}
						onMouseLeave={handleSkillLeave}
						color="text-blue-500"
						index={2}
					/>
					<SkillIcon
						Icon={FaJs}
						onMouseEnter={() => handleSkillHover("JavaScript", "yellow")}
						onMouseLeave={handleSkillLeave}
						color="text-yellow-500"
						index={3}
					/>
					<SkillIcon
						Icon={FaCss3}
						onMouseEnter={() => handleSkillHover("CSS", "blue")}
						onMouseLeave={handleSkillLeave}
						color="text-blue-500"
						index={4}
					/>
					<SkillIcon
						Icon={FaNodeJs}
						onMouseEnter={() => handleSkillHover("Node JS", "green")}
						onMouseLeave={handleSkillLeave}
						color="text-green-500"
						index={5}
					/>
					<SkillIcon
						Icon={FaReact}
						onMouseEnter={() => handleSkillHover("React JS", "blue")}
						onMouseLeave={handleSkillLeave}
						color="text-blue-500"
						index={6}
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
