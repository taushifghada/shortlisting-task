import styles from "./Hero.module.css";

function Hero() {
  return (
    <section>
      <div
        className={`${styles.background} max-w-(--max-width) relative px-[85px] flex flex-col justify-center`}
      >
        <header>
          <h1 className="font-bold text-[81px] leading-[100%] tracking-[-2px] w-[50%] ">
            GHG Accounting Scope 1, Scope 2, Scope 3
          </h1>
          <p className="w-[50%] font-medium text-[24px] leading-[100%] mt-[27px] text-(--text-color-dark)">
            Track, minimize, offset, and report your carbon emissions
            effortlessly to drive faster decarbonization progress.
          </p>
        </header>
        <div className="absolute right-[134px]">
          <img src="climate-change.png" />
          <div className="w-[60%] h-[10px] absolute bottom-[42px] bg-(--black) left-[50%] translate-x-[-50%] blur-[16.8px]"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
