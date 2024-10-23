
import CardGridMain from "./CardGridMain";

export default function GridMain() {
  return (
    <section className="bg-black mt-[14rem] w-full flex items-center justify-center">
      <div className="max-w-[1100px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <CardGridMain/>
        <CardGridMain/>
        <CardGridMain/>
        <CardGridMain span="5"/>
        <CardGridMain span="7"/>
      </div>
    </section>
  );
}

{/* <Link
          className="col-span-12 sm:col-span-4 "
          href={"/places/details/cooco"}
        >
          <Card className="h-[320px]">
            <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                What to watch
              </p>
              <h4 className="text-white font-medium text-large">
                Stream the Acme event
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/tombo.webp"
            />
          </Card>
        </Link>

        <Link
          className="col-span-12 sm:col-span-4"
          href={"/places/details/cooco"}
        >
          <Card className=" h-[320px]">
            <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Plant a tree
              </p>
              <h4 className="text-white font-medium text-large">
                Contribute to the planet
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/tombo.webp"
            />
          </Card>
        </Link>
        <Link
          className="col-span-12 sm:col-span-4"
          href={"/places/details/cooco"}
        >
          <Card className=" h-[320px]">
            <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Supercharged
              </p>
              <h4 className="text-white font-medium text-large">
                Creates beauty like a beast
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/tombo.webp"
            />
          </Card>
        </Link>
        <Link
          className="col-span-12 sm:col-span-5"
          href={"/places/details/cooco"}
        >
          <Card isFooterBlurred className="w-full h-[320px] ">
            <CardHeader className="absolute z-10 bottom-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full object-cover"
              src="/tombo.webp"
            />
          </Card>
        </Link>
        <Link className="col-span-12 sm:col-span-7" href={"/places/details/cooco"}>
          <Card className="w-full h-[320px] ">
            <Image
              isZoomed
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="/tombo.webp"
            />
            <CardHeader className="absolute z-10 bottom-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
          </Card>
        </Link> */}