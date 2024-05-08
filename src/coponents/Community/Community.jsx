const Community = () => {
  return (
    <div>
      <div className="hero md:h-[550px] bg-[#E5C643] mt-20">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="md:text-5xl text-3xl font-bold text-white">
              JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
            </h1>
            <p className="py-6">
              Type your email down below and be young wild generation
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow p-2 w-7 mr-6" placeholder="Search" />
              <span className="btn btn-sm hover:btn-warning bg-black text-white ">Optional</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
