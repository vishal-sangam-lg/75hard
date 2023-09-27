import { Dela_Gothic_One, Orbitron } from "next/font/google";
import computer from "@/assets/computer.png";
import Image from "next/image";
import diet from "@/assets/diet.png";
import dumbbell from "@/assets/dumbbell.png";
import openbook from "@/assets/openbook.png";
import waterbottle from "@/assets/waterbottle.png";
import styles from "./Header.module.css";
import Marquee from "react-fast-marquee";

const DelaFont = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
});
const Orbi = Orbitron({
  subsets: ["latin"],
  weight: "400",
});
export default function Header() {
  return (
    <div className="min-h-full">
      <div className="flex items-center">
        <div
          className="leading-none px-8 pt-4 basis-7/12 text-7xl"
          style={{
            fontFamily: "Dela Gothic One",
          }}
        >
          {" "}
          75 HARD
        </div>
        <div className=" px-4 pt-4 basis-1/12">
          {" "}
          <Image
            src={computer}
            className="object-contain max-w-full max-h-full p-4"
          />{" "}
        </div>
        <div className=" px-4 pt-4 basis-1/12">
          {" "}
          <Image
            src={diet}
            className="object-contain max-w-full max-h-full p-4"
          />{" "}
        </div>
        <div className=" px-4 pt-4 basis-1/12">
          {" "}
          <Image
            src={dumbbell}
            className="object-contain max-w-full max-h-full p-4"
          />{" "}
        </div>
        <div className=" px-4 pt-4 basis-1/12">
          {" "}
          <Image
            src={openbook}
            className="object-contain max-w-full max-h-full p-4"
          />{" "}
        </div>
        <div className=" px-4 pt-4 basis-1/12">
          {" "}
          <Image
            src={waterbottle}
            className="object-contain max-w-full max-h-full p-4"
          />{" "}
        </div>
      </div>
      <div className="pt-2">
        <Marquee speed="100" delay="0.5" pauseOnHover="true">
          <div
            style={{
              fontFamily: "Orbitron",
            }}
          >
            I DON’T STOP WHEN I’M TIRED, I STOP WHEN I’M DONE
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            YOU DON'T KNOW ME SON
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            STOP BEING A
            BITCH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            MENTAL TOUGHNESS IS A
            LIFESTYLE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </Marquee>
      </div>
    </div>
  );
}
