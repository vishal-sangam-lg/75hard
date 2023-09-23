import { Dela_Gothic_One } from "next/font/google";
import computer from "@/assets/computer.png";
import Image from "next/image";
import diet from "@/assets/diet.png";
import dumbbell from "@/assets/dumbbell.png";
import openbook from "@/assets/openbook.png";
import waterbottle from "@/assets/waterbottle.png";

const DelaFont = Dela_Gothic_One({
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
            className="object-contain max-w-full max-h-full"
          />{" "}
        </div>
        <div className=" px-4 pt-4 basis-1/12">
          {" "}
          <Image
            src={diet}
            className="object-contain max-w-full max-h-full"
          />{" "}
        </div>
        <div className=" px-4 pt-4 basis-1/12">
          {" "}
          <Image
            src={dumbbell}
            className="object-contain max-w-full max-h-full"
          />{" "}
        </div>
        <div className=" px-4 pt-4 basis-1/12">
          {" "}
          <Image
            src={openbook}
            className="object-contain max-w-full max-h-full"
          />{" "}
        </div>
        <div className=" px-4 pt-4 basis-1/12">
          {" "}
          <Image
            src={waterbottle}
            className="object-contain max-w-full max-h-full"
          />{" "}
        </div>
      </div>
    </div>
  );
}
