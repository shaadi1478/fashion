import slid2 from "../../assets/Rectangle 50.png";
import slid1 from "../../assets/Rectangle 49.png";

const Favourite = () => {
  return (
    <div className="max-w-[1450px]  mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-center mt-20">
          Young’s Favourite
        </h1>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <div className="">
          <div className="">
          <img src={slid2} />
          <span>
            Trending on instagram <br /> Explore Now!
          </span>
          </div>
          </div>
         <div>
         <img src={slid1} />
          <span>All Under $40 <br /> Explore Now!</span>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
