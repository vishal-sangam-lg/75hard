"use client";

import submitStyles from "./submit.module.css";
import { useState } from "react";

export default function Description() {
	const [day, setDay] = useState("");
	const [desc, setDesc] = useState("");

	const submitHandler = () => {
		if (day == "" || desc == "" || day <= 0 || day > 75) {
			return;
		}
		let formattedDay = "Day " + day;
		if (day <= 15) {
			let local = JSON.parse(localStorage.getItem("days1"));
			let newLocal = local.map((d) => {
				if (d.day == formattedDay) {
					return {
						...d,
						description: desc,
					};
				} else {
					return d;
				}
			});
			localStorage.setItem("days1", JSON.stringify(newLocal));
		} else if (day <= 30) {
			let local = JSON.parse(localStorage.getItem("days2"));
			let newLocal = local.map((d) => {
				if (d.day == formattedDay) {
					return {
						...d,
						description: desc,
					};
				} else {
					return d;
				}
			});
			localStorage.setItem("days2", JSON.stringify(newLocal));
		} else if (day <= 45) {
			let local = JSON.parse(localStorage.getItem("days3"));
			let newLocal = local.map((d) => {
				if (d.day == formattedDay) {
					return {
						...d,
						description: desc,
					};
				} else {
					return d;
				}
			});
			localStorage.setItem("days3", JSON.stringify(newLocal));
		} else if (day <= 60) {
			let local = JSON.parse(localStorage.getItem("days4"));
			let newLocal = local.map((d) => {
				if (d.day == formattedDay) {
					return {
						...d,
						description: desc,
					};
				} else {
					return d;
				}
			});
			localStorage.setItem("days4", JSON.stringify(newLocal));
		} else if (day <= 75) {
			let local = JSON.parse(localStorage.getItem("days5"));
			let newLocal = local.map((d) => {
				if (d.day == formattedDay) {
					return {
						...d,
						description: desc,
					};
				} else {
					return d;
				}
			});
			localStorage.setItem("days5", JSON.stringify(newLocal));
		}
		setDay("");
		setDesc("");
		window.location.reload();
	};

	return (
		<div className="w-1/4 p-8 flex flex-col justify-center">
			<div className="flex">
				<h3 className="text-center">How was your day </h3>
				<input
					className="w-6 ml-2 bg-transparent border-b-4 outline-none text-center"
					onChange={(e) => {
						setDay(e.target.value);
					}}
					value={day}
				/>
			</div>
			<textarea
				rows="6"
				className="bg-transparent border border-1 rounded-lg mt-4 w-full outline-none resize-none p-2"
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			/>
			<div className={submitStyles.container} onClick={submitHandler}>
				<div className={submitStyles.radioWrapper}>
					<input
						className={submitStyles.input}
						name="btn"
						id="value-2"
						checked="true"
						type="radio"
					/>
					<div className={submitStyles.btn} style={{ fontSize: "1rem" }}>
						Submit
						<span className={submitStyles.btn__glitch} aria-hidden="">
							_S_U_B_M_I_T_
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
