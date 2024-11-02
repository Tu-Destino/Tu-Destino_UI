import { PlaceProps } from "@/types/types";
import CardGridMain from "./CardGridMain";

export default function GridMain({place}:{place: PlaceProps}) {
  return (
    <section className="bg-white mt-[14rem] py-[8rem] w-full flex items-center justify-center">
      <div className="max-w-[1100px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <CardGridMain key={1} place={place}/>
        <CardGridMain key={2} place={place}/>
        <CardGridMain key={3} place={place}/>
        <CardGridMain key={4} place={place} span="5"/>
        <CardGridMain key={5} place={place} span="7"/>
      </div>
    </section>
  );
}

