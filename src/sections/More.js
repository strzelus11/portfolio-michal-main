import React from "react";

import InfoDiv from "../components/InfoDiv";

const More = () => {
	return (
		<div className="h-screen py-10 flex justify-center items-center image" id="More">
			<div className="p-5 sm:p-0 sm:w-[50%] flex flex-col gap-y-5 sm:gap-y-8 content">
				<h1 className="mt-10 text-5xl text-light text-center font-bold pb-5">
					More about me
				</h1>
                <div className="flex flex-col gap-y-5 sm:gap-y-7">
                    <InfoDiv index={1} />
                    <InfoDiv index={2} />
                    <InfoDiv index={3} />
                    <InfoDiv index={4} />
                </div>
			</div>
		</div>
	);
};

export default More;
