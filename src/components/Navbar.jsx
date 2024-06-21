import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full z-50 px-6 lg:px-10 py-4 lg:py-3 hidden xl:block relative sticky top-0 bg-white border-b-2">
      <div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between">
        <a href="#" className="flex gap-2 items-center">
          <img
            src={logo}
            alt="Beehiiv"
            width={48}
            height={48}
            className="relative"
          />{" "}
          <p className="font-manrope font-bold text-2xl">Beehiiv</p>
        </a>
        <nav className="navigation flex items-center font-medium lg:gap-2">
          <a
            href="/features"
            className="false transition-colors hover:bg-[#F7F5FF] px-[10px] py-[12px] rounded-lg"
          >
            Features
          </a>
          <a
            className="false transition-colors hover:bg-[#F7F5FF] px-[10px] py-[12px] rounded-lg"
            href="/pricing"
          >
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            className="false text-[15px] text-black py-2 px-2 lg:px-3 hover:bg-gray-200/50 rounded-md transition h-fit font-medium"
            href="https://app.beehiiv.com/login"
            target="_blank"
            rel="noreferrer"
          >
            Login
          </a>
          <a
            href="/pricing"
            className="flex cursor-pointer justify-center gap-[10px] text-white bg-darkBlue border-[#3843D0] border-2 rounded-[10px] py-4 px-6 lg:py-3 lg:px-8 font-medium transition-colors hover:bg-[#060419] hover:text-white "
          >
            Start trial
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
