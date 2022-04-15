import React from "react";
import frame2card from "../asset/frame2card.webp";

function Footer() {
	return (
		<div className=" w-full bg-slate-800 flex justify-start md:items-center items-start md:flex-row flex-col">
			<img src={frame2card} alt="logo" className="w-48" />
			<p className="text-slate-300 flex justify-center w-full md:-ml-48 md:my-0 my-8">
				©Copyright - Pedro Elton - All rights reserved
			</p>
		</div>
	);
}

export default Footer;
