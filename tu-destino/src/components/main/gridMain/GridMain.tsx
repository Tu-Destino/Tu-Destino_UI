import { PlaceProps } from "@/types/types";
import CardGridMain from "./CardGridMain";

export default function GridMain({place}:{place: PlaceProps[]}) {
  return (
    <section className="bg-white mt-[3rem] py-[8rem] w-full flex items-center justify-center">
      <div className="max-w-[1100px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <CardGridMain key={1} place={place[0]}/>
        <CardGridMain key={2} place={place[1]}/>
        <CardGridMain key={3} place={place[2]}/>
        <CardGridMain key={4} place={place[3]} span="5"/>
        <CardGridMain key={5} place={place[4]} span="7"/>
      </div>
    </section>
  );
}

