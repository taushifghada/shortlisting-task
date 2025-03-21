import styles from "./Login.module.css";

function Login() {
  return (
    <section>
      <div className="max-w-(--max-width) mx-auto">
        <div
          className={`${styles.background}  pt-[90px] px-[150px] mx-auto flex flex-col justify-center`}
        >
          <header className="text-center pt-[100px]">
            <h1 className="font-bold text-[32px] leading-[40px] text-(--text-color-white)">
              Ready to take meaningful action on your ESG journey?
            </h1>
            <p className="font-normal text-[16px] leading-[24px] text-(--text-color-white) mt-[21px]">
              Drive impact with accurate carbon accounting, reduction
              strategies, and transparent reporting.
            </p>
            <div className="flex justify-center items-center gap-[10px] mt-[42px]">
              <button className="bg-(--light-green) py-[10px] px-[22px] flex justify-center items-center  rounded-[6px] font-bold text-[16px] w-[134px] h-[40px]">
                Login
              </button>
              <button className="bg-(--dark-green) py-[10px] px-[22px] flex justify-center items-center  rounded-[6px] font-bold text-[16px] w-[134px] h-[40px]">
                Book Demo
              </button>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}

export default Login;
