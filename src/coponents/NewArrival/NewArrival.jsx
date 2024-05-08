import { Link } from "react-router-dom";

const NewArrival = ({ card }) => {
  const {id, title, image, short_description, rating, brand} = card;
  return (
    <div>
      <div className="cursor-pointer">
        <div className="rounded-xl">
            <img src={image} className="rounded-xl h-[330px] " />
        </div>
        <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="w-60">{short_description} </p>
        </div>
        <div className="">
            <Link to={`/fashion/:id${id}`} className="btn mr-7 text-white bg-orange-500 hover:bg-success">Vew Details</Link>
            <Link className="btn text-white bg-blue-800 hover:bg-success ">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
