import styles from "./checkbox.module.css";

const days1 = [
	{
		day: "Day 1",
		description: "",
		finished: false,
	},
	{
		day: "Day 2",
		description: "",
		finished: false,
	},
	{
		day: "Day 3",
		description: "",
		finished: false,
	},
	{
		day: "Day 4",
		description: "",
		finished: false,
	},
	{
		day: "Day 5",
		description: "",
		finished: false,
	},
	{
		day: "Day 6",
		description: "",
		finished: false,
	},
	{
		day: "Day 7",
		description: "",
		finished: false,
	},
	{
		day: "Day 8",
		description: "",
		finished: false,
	},
	{
		day: "Day 9",
		description: "",
		finished: false,
	},
	{
		day: "Day 10",
		description: "",
		finished: false,
	},
	{
		day: "Day 11",
		description: "",
		finished: false,
	},
	{
		day: "Day 12",
		description: "",
		finished: false,
	},
	{
		day: "Day 13",
		description: "",
		finished: false,
	},
	{
		day: "Day 14",
		description: "",
		finished: false,
	},
	{
		day: "Day 15",
		description: "",
		finished: false,
	},
];

const days2 = [
	{
		day: "Day 16",
		description: "",
		finished: false,
	},
	{
		day: "Day 17",
		description: "",
		finished: false,
	},
	{
		day: "Day 18",
		description: "",
		finished: false,
	},
	{
		day: "Day 19",
		description: "",
		finished: false,
	},
	{
		day: "Day 20",
		description: "",
		finished: false,
	},
	{
		day: "Day 21",
		description: "",
		finished: false,
	},
	{
		day: "Day 22",
		description: "",
		finished: false,
	},
	{
		day: "Day 23",
		description: "",
		finished: false,
	},
	{
		day: "Day 24",
		description: "",
		finished: false,
	},
	{
		day: "Day 25",
		description: "",
		finished: false,
	},
	{
		day: "Day 26",
		description: "",
		finished: false,
	},
	{
		day: "Day 27",
		description: "",
		finished: false,
	},
	{
		day: "Day 28",
		description: "",
		finished: false,
	},
	{
		day: "Day 29",
		description: "",
		finished: false,
	},
	{
		day: "Day 30",
		description: "",
		finished: false,
	},
];

const days3 = [
	{
		day: "Day 31",
		description: "",
		finished: false,
	},
	{
		day: "Day 32",
		description: "",
		finished: false,
	},
	{
		day: "Day 33",
		description: "",
		finished: false,
	},
	{
		day: "Day 34",
		description: "",
		finished: false,
	},
	{
		day: "Day 35",
		description: "",
		finished: false,
	},
	{
		day: "Day 36",
		description: "",
		finished: false,
	},
	{
		day: "Day 37",
		description: "",
		finished: false,
	},
	{
		day: "Day 38",
		description: "",
		finished: false,
	},
	{
		day: "Day 39",
		description: "",
		finished: false,
	},
	{
		day: "Day 40",
		description: "",
		finished: false,
	},
	{
		day: "Day 41",
		description: "",
		finished: false,
	},
	{
		day: "Day 42",
		description: "",
		finished: false,
	},
	{
		day: "Day 43",
		description: "",
		finished: false,
	},
	{
		day: "Day 44",
		description: "",
		finished: false,
	},
	{
		day: "Day 45",
		description: "",
		finished: false,
	},
];

const days4 = [
	{
		day: "Day 46",
		description: "",
		finished: false,
	},
	{
		day: "Day 47",
		description: "",
		finished: false,
	},
	{
		day: "Day 48",
		description: "",
		finished: false,
	},
	{
		day: "Day 49",
		description: "",
		finished: false,
	},
	{
		day: "Day 50",
		description: "",
		finished: false,
	},
	{
		day: "Day 51",
		description: "",
		finished: false,
	},
	{
		day: "Day 52",
		description: "",
		finished: false,
	},
	{
		day: "Day 53",
		description: "",
		finished: false,
	},
	{
		day: "Day 54",
		description: "",
		finished: false,
	},
	{
		day: "Day 55",
		description: "",
		finished: false,
	},
	{
		day: "Day 56",
		description: "",
		finished: false,
	},
	{
		day: "Day 57",
		description: "",
		finished: false,
	},
	{
		day: "Day 58",
		description: "",
		finished: false,
	},
	{
		day: "Day 59",
		description: "",
		finished: false,
	},
	{
		day: "Day 60",
		description: "",
		finished: false,
	},
];

const days5 = [
	{
		day: "Day 61",
		description: "",
		finished: false,
	},
	{
		day: "Day 62",
		description: "",
		finished: false,
	},
	{
		day: "Day 63",
		description: "",
		finished: false,
	},
	{
		day: "Day 64",
		description: "",
		finished: false,
	},
	{
		day: "Day 65",
		description: "",
		finished: false,
	},
	{
		day: "Day 66",
		description: "",
		finished: false,
	},
	{
		day: "Day 67",
		description: "",
		finished: false,
	},
	{
		day: "Day 68",
		description: "",
		finished: false,
	},
	{
		day: "Day 69",
		description: "",
		finished: false,
	},
	{
		day: "Day 70",
		description: "",
		finished: false,
	},
	{
		day: "Day 71",
		description: "",
		finished: false,
	},
	{
		day: "Day 72",
		description: "",
		finished: false,
	},
	{
		day: "Day 73",
		description: "",
		finished: false,
	},
	{
		day: "Day 74",
		description: "",
		finished: false,
	},
	{
		day: "Day 75",
		description: "",
		finished: false,
	},
];

export default function Checkboxes() {
	return (
		<div className="w-3/4 flex">
			<div className="flex flex-col w-full justify-center items-center">
				{days1.map((day, i) => {
					return (
						<div className={styles.formGroup} key={day.day}>
							<input type="checkbox" checked={false} />
							<label>{day.day}</label>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col w-full justify-center items-center">
				{days2.map((day, i) => {
					return (
						<div className={styles.formGroup} key={day.day}>
							<input type="checkbox" />
							<label>{day.day}</label>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col w-full justify-center items-center">
				{days3.map((day, i) => {
					return (
						<div className={styles.formGroup} key={day.day}>
							<input type="checkbox" />
							<label>{day.day}</label>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col w-full justify-center items-center">
				{days4.map((day, i) => {
					return (
						<div className={styles.formGroup} key={day.day}>
							<input type="checkbox" />
							<label>{day.day}</label>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col w-full justify-center items-center">
				{days5.map((day, i) => {
					return (
						<div className={styles.formGroup} key={day.day}>
							<input type="checkbox" />
							<label>{day.day}</label>
						</div>
					);
				})}
			</div>
		</div>
	);
}
