const Home = () => {
  return (
    <>
      {/* Top bar */}
      <div>
        {/* App name */}
        <div className="text-xl md:text-2xl w-fit relative">
          <div className="text-[#929AAB] font-medium">
            <span className="font-bold italic text-[#393E46]">Deep</span>Ref
          </div>
          <span className="font-bold italic stroke-text absolute top-[1.25px] left-[1.25px] z-[-1]">
            Deep
          </span>
        </div>
      </div>
      {/* Motto */}

      <div className="h-56 my-8 w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-light text-[#393E46] text-center">Research <span className="font-medium">Smarter</span>, Learn <span className="font-bold italic">Deeper</span></div>
      </div>
    </>
  );
};

export default Home;
