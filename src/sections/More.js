import React from "react";

import InfoDiv from "../components/InfoDiv";

const More = () => {
	return (
		<div className="h-screen flex justify-center items-center image" id="More">
			<div className="w-[50%] flex flex-col gap-y-8 content">
				<h1 className="text-5xl text-light text-center font-bold whitespace-nowrap mb-5">
					More about me
				</h1>
                <div className="flex flex-col gap-y-7">
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
