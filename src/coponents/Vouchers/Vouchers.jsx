import mobile from "../../assets/Mobile_app.png";
import play from "../../assets/Rectangle_18.png";
import apple from "../../assets/Rectangle_55.png";

const Vouchers = () => {
  return (
    <div className="max-w-[1450px] mx-auto mt-20">
      <div className="hero bg-slate-50">
        <div className="hero-content flex-col md:gap-40 lg:flex-row-reverse">
          <img src={mobile} className=" " />
          <div>
            <h1 className="md:text-5xl text-3xl font-bold">
              DOWNLOAD APP &  <br />GET THE VOUCHER!
            </h1>
            <p className="py-6">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </p>
            <div className="md:flex items-center gap-3 text-center justify-center md:justify-start">
                <img src={play} className=" md:w-auto" />
                <img src={apple} className="md:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vouchers;
