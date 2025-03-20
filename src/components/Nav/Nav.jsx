function Nav() {
  return (
    <section>
      <header className="max-w-(--max-width) pt-[55px] px-[55px]">
        <nav className="grid grid-cols-3">
          <div></div>
          <ul className="flex justify-around">
            <li>
              <a
                className="inline-flex py-[16px] font-medium text-[16px]"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="inline-flex py-[16px] font-medium text-[16px]"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="inline-flex py-[16px] font-medium text-[16px]"
                href="#"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="inline-flex py-[16px] font-medium text-[16px]"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="inline-flex py-[16px] font-medium text-[16px]"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex justify-end items-center gap-[10px]">
            <button className="bg-(--light-green) py-[10px] px-[22px] rounded-[6px] font-bold text-[16px] w-[134px] h-[40px]">
              Login
            </button>
            <button className="bg-(--dark-green) py-[10px] px-[22px] rounded-[6px] font-bold text-[16px] w-[134px] h-[40px]">
              Book Demo
            </button>
          </div>
        </nav>
      </header>
    </section>
  );
}

export default Nav;
