function Footer() {
  return (
    <footer>
      <div className="max-w-(--max-width) grid grid-cols-3 gap-[38px] mx-auto px-[72px] py-[96px] bg-(--black-shade)">
        <div className="flex flex-col gap-[36px]">
          <form className="flex flex-col gap-[8px] relative">
            <label className="font-semibold text-[16px] leading-[100%] text-(--text-color-white)">
              Subscribe to our mailing
            </label>
            <input
              className="w-[80%] mt-[8px] py-[11px] pr-[8px] pl-[13px] bg-white rounded-[12px] hover:outline-0 focus:outline-0 focus:border-1 border-(--dark-green)"
              placeholder="Enter mail"
            />
            <button className="bg-(--dark-green) text-(--black-shade) py-[5px] px-[8px] flex justify-center items-center absolute left-[220px] top-[37px] rounded-[10px] font-bold text-[16px]">
              Subscribe
            </button>
          </form>
          <div className="flex justify-start items-center gap-[4px]">
            <img
              className="w-[123px] h-[128px]"
              src="https://s3-alpha-sig.figma.com/img/d70d/1ee5/1d8efab56fcce4d64ce300402075c9d6?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KSr4EttDzzCfjMDzIlx18a1VstZ4ovVdXNib8TdlxZD1sZetuDejBxrDhehHMlBc9QBMKM6iwOkgbbYcxKPVEYmT-VmmgQwzLClX5M1jPF301DJXOvj4EkeqolDndl4TBhAgpQpKH88CO8RXJCNNX3Y9aNnhnehLOJjUyo8rymE0XgbqlBBmWAUsGx6R7dwvbK5ocJ1nPWOI6gQ38c5L97O1DuX4P-ZHrOjUkydlX~O8EYtSu3d47kR1lFY-dE09JMmW7kyqp4rQS6gxvN6FAduc7lw68JNQI9mb1~vI8XskCh9v4-UldD3vd8ztn1ZTniE83q3aZ0bNTl~XZQIx4Q__"
            />
            <span className="text-(--text-color-white) font-bold text-[34.2px] leading-[100%]">
              Carboncrunch
            </span>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-[40px]">
          <nav>
            <ul className=" flex flex-col flex-wrap max-h-[152px] gap-y-[10px]">
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Home
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  About
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  How it works
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Contact us
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  FAQs
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Start your transaction
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Why choose us
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Businesses
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Refund Policy
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Email
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Facebook
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  X - twitter
                </a>
              </li>
              <li>
                <a className="inline-flex px-[8px] py-[5px] font-medium text-[16px] leading-[127%] text-(--text-color-light-2)">
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-between">
            <p className="font-medium text-[16px] leading-[127%] text-(--text-color-white)">
              © Carboncrunch. All Rights Reserved.
            </p>
            <div className="flex gap-[21px]">
              <a href="#" className="inline-flex">
                <img src="mail.svg" />
              </a>
              <a href="#" className="inline-flex">
                <img src="facebook.svg" />
              </a>
              <a href="#" className="inline-flex">
                <img src="twitter.svg" />
              </a>
              <a href="#" className="inline-flex">
                <img src="instagram.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
