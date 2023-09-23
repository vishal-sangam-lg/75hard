import Checkboxes from "@/components/Body/Checkboxes";
import Description from "@/components/Body/Description";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen gradient">
      <div className="h-1/6">
        <Header />
      </div>
      <hr className="hr-1" />
      <div className="h-5/6">
        <div className="min-h-full flex">
          <Description />
          <Checkboxes />
        </div>
      </div>
    </div>
  );
}
