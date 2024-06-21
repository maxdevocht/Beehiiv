import { bgImg, starOne } from "../assets";

const Hero = () => {
  return (
    <section className="relative mx-auto overflow-hidden bg-lightBlue">
      {/* <div className="lg:-top-[40px] absolute h-full w-full items-center justify-center object-cover sm:flex">
        <div className="lf-player-container">
          <div className="bg-transparent my-0 mx-auto outline-none overflow-hidden">
            <img src={bgImg} alt="background_image" />
          </div>
        </div>
      </div> */}
      <section className="relative mx-auto pt-28 pb-20">
        <img
          src={starOne}
          alt="Star"
          className="absolute -top-24 -left-24 block md:-top-20 md:-left-0 mix-blend-multiply"
        />
        <div className="xl:p-18 flex flex-col justify-center px-1 lg:p-16 ">
          <h1 className="font-josefin z-10 mx-auto max-w-4xl text-center font-heading text-[2.75rem] uppercase md:text-7xl lg:text-[4rem] xl:text-[5.75rem]">
            The newsletter platform built for{" "}
            <strong className="bg-lightPink px-2">growth.</strong>
          </h1>
        </div>
      </section>
    </section>
  );
};

export default Hero;
