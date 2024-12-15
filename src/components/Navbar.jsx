import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";
import styles from "../style";

const Navbar = () => {
	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full py-6 navbar flex">
			<div className="foundation flex flex-1 items-center">
				<img src={logo} alt="flowity-logo" className="w-[50px] h-[32px]" />
				<span className="text-white">FLOWITY AI</span>
			</div>

			<div className="list-none sm:flex hidden justify-center items-center flex-1">
				<ul className="flex">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-poppins font-normal cursor-pointer text-[16px] ${
								active === nav.title ? "text-white" : "text-dimWhite"
							} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>
			</div>

			<div className="list-none sm:flex hidden flex flex-1 justify-end">
				<button
					type="button"
					className={`py-3 px-4 font-poppins font-medium text-[16px] text-dimWhite bg-purple-gradient rounded-[10px] outline-none ${styles}`}
				>
					Book a Call
				</button>
				<button className="text-gradient mx-[10px] font-bold text-[18px]">
					Log In
				</button>
			</div>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle(!toggle)}
				/>

				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} p-6 bg-black-gradient absolute top-14 right-0 my-2 min-w-full rounded-xl sidebar`}
				>
					<div className="list-none flex justify-end items-start flex-1 flex-col">
						<ul>
							{navLinks.map((nav, index) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === nav.title ? "text-white" : "text-dimWhite"
									} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
									onClick={() => setActive(nav.title)}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
						<button className="text-gradient my-[10px] font-bold text-[18px]">
							Log In
						</button>
						<button
							type="button"
							className={`my-[10px] py-3 px-4 mb-0 font-poppins font-medium text-[16px] text-dimWhite bg-purple-gradient rounded-[10px] outline-none ${styles}`}
						>
							Book a Call
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
