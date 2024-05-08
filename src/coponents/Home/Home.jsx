import banner from "../../assets/banner.png";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Community from "../Community/Community";
import Favourite from "../Favourite/Favourite";
import NewArrivals from "../NewArrivals/NewArrivals";
import Vouchers from "../Vouchers/Vouchers";

const Home = () => {
  return (
    <div className="">
      <div className="hero bg-[#F4F6F5] max-w-[1450px] mx-auto rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="rounded-lg w-full md:w-96 md:-mb-14" />
          <div className="md:w-[600px] ">
            <span className="text-5xl  font-bold shadow-xl p-2">LET’S</span>
            <h1 className="text-5xl font-bold mt-5 mb-5 ">EXPLORE</h1>
            <span className="text-5xl font-bold shadow-xl bg-[#EBD96B] ">
              UNIQUE
            </span>
            <h1 className="text-5xl font-bold mt-4 ">CLOTHES.</h1>
            <p className="py-6 font-semibold text-black">
              Live for Influential and Innovative fashion!
            </p>
            <button className="btn bg-slate-950 text-white font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <Brand></Brand>
      <NewArrivals></NewArrivals>
      <div>
      <Banner></Banner>
      </div>
      <Favourite></Favourite>
      <Vouchers></Vouchers>
      <div>
      <Community></Community>
      </div>
    </div>
  );
};

export default Home;
