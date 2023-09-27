"use client";

import styles from "./checkbox.module.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Checkboxes() {
  const [days1, setDays1] = useState([
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
  ]);

  const [days2, setDays2] = useState([
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
  ]);

  const [days3, setDays3] = useState([
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
  ]);

  const [days4, setDays4] = useState([
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
  ]);

  const [days5, setDays5] = useState([
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
  ]);
  useEffect(() => {
    let d1 = localStorage.getItem("days1");
    let d2 = localStorage.getItem("days2");
    let d3 = localStorage.getItem("days3");
    let d4 = localStorage.getItem("days4");
    let d5 = localStorage.getItem("days5");
    console.log(d1, d2, d3, d4, d5);
    if (d1) {
      setDays1(JSON.parse(d1));
    } else {
      localStorage.setItem("days1", JSON.stringify(days1));
    }
    if (d2) {
      setDays2(JSON.parse(d2));
    } else {
      localStorage.setItem("days2", JSON.stringify(days2));
    }
    if (d3) {
      setDays3(JSON.parse(d3));
    } else {
      localStorage.setItem("days3", JSON.stringify(days3));
    }
    if (d4) {
      setDays4(JSON.parse(d4));
    } else {
      localStorage.setItem("days4", JSON.stringify(days4));
    }
    if (d5) {
      setDays5(JSON.parse(d5));
    } else {
      localStorage.setItem("days5", JSON.stringify(days5));
    }
  }, []);

  return (
    <div className="w-3/4 flex px-8">
      <div className="flex flex-col w-full justify-center">
        {days1.map((day, i) => {
          return (
            <div
              key={day.day}
              className="flex items-center mb-3 "
              style={{
                fontFamily: "Outfit",
              }}
            >
              <div
                className={styles.formGroup}
                onClick={() => {
                  let d1 = days1.map((d) => {
                    if (day.day == d.day) {
                      return {
                        ...d,
                        finished: !d.finished,
                      };
                    } else {
                      return d;
                    }
                  });
                  setDays1(d1);
                  localStorage.setItem("days1", JSON.stringify(d1));
                }}
              >
                <input type="checkbox" checked={day.finished} />
                <label>{day.day}</label>
              </div>
              <div
                className="text-white text-sm border border-1 h-5 w-5 rounded-full text-center mx-2"
                onClick={() => {
                  let desc = day.description;
                  if (desc == "") desc = "Description N/A";
                  Swal.fire({
                    text: desc,
                    background: "#3a6073",
                    color: "#fff",
                    confirmButtonColor: "#334e5f",
                  });
                }}
              >
                i
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-full justify-center">
        {days2.map((day, i) => {
          return (
            <div
              key={day.day}
              className="flex items-center mb-3"
              style={{
                fontFamily: "Outfit",
              }}
            >
              <div
                className={styles.formGroup}
                onClick={() => {
                  let d2 = days2.map((d) => {
                    if (day.day == d.day) {
                      return {
                        ...d,
                        finished: !d.finished,
                      };
                    } else {
                      return d;
                    }
                  });
                  setDays2(d2);
                  localStorage.setItem("days2", JSON.stringify(d2));
                }}
              >
                <input type="checkbox" checked={day.finished} />
                <label>{day.day}</label>
              </div>
              <div
                className="text-white text-sm border border-1 h-5 w-5 rounded-full text-center mx-2"
                onClick={() => {
                  let desc = day.description;
                  if (desc == "") desc = "Description N/A";
                  Swal.fire({
                    text: desc,
                    background: "#3a6073",
                    color: "#fff",
                    confirmButtonColor: "#334e5f",
                  });
                }}
              >
                i
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-full justify-center">
        {days3.map((day, i) => {
          return (
            <div
              key={day.day}
              className="flex items-center mb-3"
              style={{
                fontFamily: "Outfit",
              }}
            >
              <div
                className={styles.formGroup}
                onClick={() => {
                  let d3 = days3.map((d) => {
                    if (day.day == d.day) {
                      return {
                        ...d,
                        finished: !d.finished,
                      };
                    } else {
                      return d;
                    }
                  });
                  setDays3(d3);
                  localStorage.setItem("days3", JSON.stringify(d3));
                }}
              >
                <input type="checkbox" checked={day.finished} />
                <label>{day.day}</label>
              </div>
              <div
                className="text-white text-sm border border-1 h-5 w-5 rounded-full text-center mx-2"
                onClick={() => {
                  let desc = day.description;
                  if (desc == "") desc = "Description N/A";
                  Swal.fire({
                    text: desc,
                    background: "#3a6073",
                    color: "#fff",
                    confirmButtonColor: "#334e5f",
                  });
                }}
              >
                i
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-full justify-center">
        {days4.map((day, i) => {
          return (
            <div
              key={day.day}
              className="flex items-center mb-3"
              style={{
                fontFamily: "Outfit",
              }}
            >
              <div
                className={styles.formGroup}
                onClick={() => {
                  let d4 = days4.map((d) => {
                    if (day.day == d.day) {
                      return {
                        ...d,
                        finished: !d.finished,
                      };
                    } else {
                      return d;
                    }
                  });
                  setDays4(d4);
                  localStorage.setItem("days4", JSON.stringify(d4));
                }}
              >
                <input type="checkbox" checked={day.finished} />
                <label>{day.day}</label>
              </div>
              <div
                className="text-white text-sm border border-1 h-5 w-5 rounded-full text-center mx-2"
                onClick={() => {
                  let desc = day.description;
                  if (desc == "") desc = "Description N/A";
                  Swal.fire({
                    text: desc,
                    background: "#3a6073",
                    color: "#fff",
                    confirmButtonColor: "#334e5f",
                  });
                }}
              >
                i
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-full justify-center">
        {days5.map((day, i) => {
          return (
            <div
              key={day.day}
              className="flex items-center mb-3"
              style={{
                fontFamily: "Outfit",
              }}
            >
              <div
                className={styles.formGroup}
                onClick={() => {
                  let d5 = days5.map((d) => {
                    if (day.day == d.day) {
                      return {
                        ...d,
                        finished: !d.finished,
                      };
                    } else {
                      return d;
                    }
                  });
                  setDays5(d5);
                  localStorage.setItem("days5", JSON.stringify(d5));
                }}
              >
                <input type="checkbox" checked={day.finished} />
                <label>{day.day}</label>
              </div>
              <div
                className="text-white text-sm border border-1 h-5 w-5 rounded-full text-center mx-2"
                onClick={() => {
                  let desc = day.description;
                  if (desc == "") desc = "Description N/A";
                  Swal.fire({
                    text: desc,
                    background: "#3a6073",
                    color: "#fff",
                    confirmButtonColor: "#334e5f",
                  });
                }}
              >
                i
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
