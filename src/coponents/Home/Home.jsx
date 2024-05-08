import banner from '../../assets/banner.png'

const Home = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
<div className="hero bg-[#F4F6F5] rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="rounded-lg" />
    <div className='w-[600px] '>
      <span className="text-5xl  font-bold shadow-xl p-2">LET’S</span>
      <h1 className="text-5xl font-bold mt-5 mb-5 ">EXPLORE</h1>
      <span className="text-5xl font-bold shadow-xl bg-[#EBD96B] ">UNIQUE</span>
      <h1 className="text-5xl font-bold mt-4 ">CLOTHES.</h1>
      <p className="py-6 font-semibold text-black">Live for Influential and Innovative fashion!</p>
      <button className="btn bg-slate-950 text-white font-bold">Shop Now</button>
    </div>
  </div>
</div>        </div>
    );
};

export default Home;