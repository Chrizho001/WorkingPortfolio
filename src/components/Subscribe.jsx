import Button from "./Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container w-full flex flex-col justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-[70%] text-center font-palanquin font-bold ">
        Sign Up for<span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="w-full lg:max-w-[70%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-hidden sm:border-hidden border max-sm:border-slate-gray max-sm:rounded-full"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
