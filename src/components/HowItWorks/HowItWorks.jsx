import styles from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <section>
      <div
        className={`${styles["hwt-container"]} px-[60px] mx-auto max-w-(--max-width)`}
      >
        <header className="text-center">
          <h4 className="font-bold text-[20px] leading-[100%] text-(--dark-green-2)">
            How It works?
          </h4>
          <h1 className="font-bold text-[48px] leading-[100%] mt-[25px]">
            Getting Started is easy
          </h1>
          <p className="font-semibold text-[24px] leading-[100%] mt-[16px] text-(--text-color-dark)">
            How carboncrunch SAAS works
          </p>
        </header>
        <ul className="mt-[69px] p-[25px] flex gap-[28px]">
          <li className="pt-[8px] relative">
            <p className="font-(family-name:--font-family-nunito) font-black text-[16px] leading-[100%] text-(--dark-green)">
              01
            </p>
            <h4 className="font-bold text-[16px] leading-[100%] text-(--dark-green) mt-[16px]">
              Track and manage your Net Zero Pathway
            </h4>
            <p className="font-normal text-[16px] leading-[100%] text-(--black) mt-[8px]">
              Set decarbonisation targets, obtain insights on the amount of
              emissions to be emitted by the target year, analyse the
              year-on-year progress against the targets and gain valuable
              analytics...
            </p>
          </li>
          <li className="pt-[8px] relative">
            <p className="font-(family-name:--font-family-nunito) font-black text-[16px] leading-[100%] text-(--text-color-dark)">
              02
            </p>
            <h4 className="font-bold text-[16px] leading-[100%] text-(--text-color-dark) mt-[16px]">
              Track and manage your Net Zero Pathway
            </h4>
            <p className="font-normal text-[16px] leading-[100%] text-(--black) mt-[8px]">
              Set decarbonisation targets, obtain insights on the amount of
              emissions to be emitted by the target year, analyse the
              year-on-year progress against the targets and gain valuable
              analytics...
            </p>
          </li>
          <li className="pt-[8px] relative">
            <p className="font-(family-name:--font-family-nunito) font-black text-[16px] leading-[100%] text-(--text-color-dark)">
              03
            </p>
            <h4 className="font-bold text-[16px] leading-[100%] text-(--text-color-dark) mt-[16px]">
              Track and manage your Net Zero Pathway
            </h4>
            <p className="font-normal text-[16px] leading-[100%] text-(--black) mt-[8px]">
              Set decarbonisation targets, obtain insights on the amount of
              emissions to be emitted by the target year, analyse the
              year-on-year progress against the targets and gain valuable
              analytics...
            </p>
          </li>
        </ul>
        <div
          className={`${styles["employee-one"]} relative mx-auto w-fit mt-[87.45px] bg-linear-b from-(--white-0) to-(--white-light-1)`}
        >
          <img src="Employee 1.png" />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
