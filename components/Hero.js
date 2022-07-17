import Buttons from "./reusable/Buttons";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-[20px] py-[120px] ">
      <div className=" text-center lg:text-left space-y-5">
        <h1 className="text-6xl font-bold tracking-tight">
          One workspace.
          <br />
          Every team.
        </h1>
        <p className="text-greyish font-medium text-lg">
          We’re more than a doc. Or a table. Customize <br /> Notion to work the
          way you do.
        </p>
        <Buttons />
        <div>
          <p className="text-greyish mt-10 mb-2 text-sm">Trusted by teams at</p>
          <div className="flex justify-between space-x-5">
            <img
              className="w-[80px] h-[20px]"
              src="/curology.png"
              alt="curology-logo"
            />
            <img
              className="w-[80px] h-[25px]"
              src="/mixpanel.png"
              alt="curology-logo"
            />
            <img
              className="w-[120px] h-[20px]"
              src="/match.png"
              alt="curology-logo"
            />
            <img
              className="w-[100px] h-[20px]"
              src="/headspace.png"
              alt="curology-logo"
            />
          </div>
        </div>
      </div>

      <div className=" mb-5">
        <img className="w-[500px] h-auto" src="/hero.avif" alt="notion-image" />
      </div>
    </div>
  );
};

export default Hero;
