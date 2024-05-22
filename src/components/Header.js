import React from "react";

const Header = () => {
	return (
		<div
			className={`p-5 h-[80px] flex items-center justify-around transition delay-150 duration-300 bg-secondary text-light hover:opacity-100 ${
				sticky ? "opacity-100" : ""
			}`}
		>
			<a href="#Hero">
				<img className="w-12" src="./logo.png" alt="" />
			</a>
			<div className="flex justify-center gap-x-10">
				{links.map((link, index) => (
					<button
						key={index}
						className="hover:scale-105 hover:text-white transition delay-100 duration-300 "
					>
						<a href={`#${link}`}>{link}</a>
					</button>
				))}
			</div>
			<div>
				<button className="border-2 bg-light border-primary px-3 py-2 rounded-xl text-primary transition duration-300 delay-150 hover:scale-105 button-shadow whitespace-nowrap font-semibold">
					<a href="#GetStarted">Get Started</a>
				</button>
			</div>
		</div>
	);
};

export default Header;
