import Buttons from "./reusable/Buttons";

const Hero = () => {
  return (
    <div className="md:container md:mx-auto flex flex-col-reverse lg:flex-row items-center justify-between md:px-[20px] md:py-[120px] ">
      <div className=" text-center lg:text-left space-y-5">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
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

      <div className="mb-5">
        <img
          className="lg:mr-20 w-[320px] h:[500px] md:w-[400px] md:[500px] lg:w-[500px] lg:h-auto"
          src="/hero.png"
          alt="notion-image"
        />
      </div>
    </div>
  );
};

export default Hero;
