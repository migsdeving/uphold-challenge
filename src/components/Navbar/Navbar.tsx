export const Navbar = () => {
  return (
    <nav className=" p-12">
      <div className="grid grid-cols-3 gap-4 text-center justify-center">
        <div
          data-testid="navigation-links"
          className="flex justify-center items-center "
        >
          <a href="">Personal</a>
          <a className="ml-12" href="">
            Business
          </a>
          <a className="ml-12" href="">
            Partners
          </a>
        </div>
        <div className="flex justify-center items-center">
          <img src="/assets/logo.svg" alt="logo" />
        </div>
        <div className="flex justify-center items-center ">
          <button
            data-testid="login-button"
            className="bg-[#6FE68A] w-36 rounded-full hover:bg-[#329C4A] transition ease-in-out p-3 text-white"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};
