import submitStyles from "./submit.module.css";

export default function Description() {
	return (
		<div className="w-1/4 p-8 flex flex-col justify-center">
			<h3 className="text-center">How was your day 1</h3>
			<textarea
				rows="6"
				className="bg-transparent border border-1 rounded-lg mt-4 w-full outline-none resize-none p-2"
			/>
			<div className={submitStyles.container}>
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
