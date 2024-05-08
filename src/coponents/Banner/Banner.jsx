import banner from "../../assets/image 12.png";
const Banner = () => {
  return (
    <div>
      <div className="hero mt-16 bg-[#EBD96B]">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner} className="-mb-4 mr-20" />
          <div>
            <span className="text-5xl bg-white p-2 shadow-xl font-bold">
              PAYDAY
            </span>
            <h1 className="text-5xl mt-5 font-bold">SALE NOW</h1>
            <p className="py-6 text-xl">
              Spend minimal $100 get 30% off <br />
              voucher code for your next purchase
            </p>
            <p className="text-xl"><span className="text-xl font-bold">1 June - 10 June 2021</span> <br />*Terms & Conditions apply</p>
            <button className="btn hover:btn-info mt-5 bg-black text-white border-none">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
