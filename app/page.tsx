import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* App name */}
        <div className="text-xl md:text-xl w-fit relative">
          <div className="text-[#929AAB] font-medium">
            <span className="font-bold italic text-[#393E46]">Deep</span>Ref
          </div>
          <span className="font-bold italic stroke-text absolute top-[1.25px] left-[1.25px] z-[-1]">
            Deep
          </span>
        </div>
        {/* Login button */}
        <Button size="sm" className="bg-[#393E46]">Login</Button>
      </div>
      {/* Motto and search bar */}
      <div className="h-72 my-8 w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col gap-4 md:gap-8 items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_75%,black)]"></div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-light text-[#393E46] text-center mx-4">
          Research <span className="font-medium">Smarter</span>, Learn{" "}
          <span className="font-bold italic">Deeper</span>
        </div>
        {/* Search bar */}
        <div className="w-full sm:w-4/5 max-w-2xl">
          <Input type="text" className="border-[#393E46] placeholder:text-[#393E46]" placeholder="Search for any topic..." />
        </div>
      </div>
      {/* Trending notes */}
      <div className="flex flex-col gap-4">
        <div className="text-2xl text-[#393E46]"><span className="font-bold italic">Trending</span> Notes</div>
      </div>
    </>
  );
};

export default Home;
