import React from "react";
import { MdComputer, MdOutlinePiano } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { FaGuitar, FaPaintBrush, FaRunning } from "react-icons/fa";
import HobbyCard from "../components/HobbyCard";

const Hobbys = () => {
	return (
		<div className="flex justify-center h-[100vh] image" id="Hobbys">
            <div className="flex flex-col gap-y-[40px] justify-center items-center content">
                <h1 className="text-5xl text-light font-bold whitespace-nowrap">My Hobbys</h1>
                <div className="grid grid-cols-3 gap-10">
                    <HobbyCard Icon={IoIosFootball} image="./football.webp" index={1} />
                    <HobbyCard Icon={IoIosFootball} image="./football.webp" index={1} />
                    <HobbyCard Icon={IoIosFootball} image="./football.webp" index={1} />
                    <HobbyCard Icon={IoIosFootball} image="./football.webp" index={1} />
                    <HobbyCard Icon={IoIosFootball} image="./football.webp" index={1} />
                    <HobbyCard Icon={IoIosFootball} image="./football.webp" index={1} />
                </div>
            </div>
		</div>
	);
};

export default Hobbys;
