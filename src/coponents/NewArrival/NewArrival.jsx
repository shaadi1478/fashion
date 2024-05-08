import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NewArrival = ({ card }) => {
  const {id, title, image, short_description, rating, brand} = card;
  return (
    <div>
      <div className="cursor-pointer md:p-0 p-3">
        <div className="rounded-xl shadow-lg">
            <img src={image} className="rounded-xl md:h-[330px] w-full " />
        </div>
        <div className='space-y-2'>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="w-60 font-semibold">{short_description} </p>
        </div>
        <div className='md:flex items-center gap-28 mt-2 mb-2 text-gray-400'>
          <p>{brand}</p>
          <p>{rating}</p>
        </div>
        <div className="">
            <Link to={`/job/${id}`} className="btn mr-7 text-white bg-orange-500 hover:bg-success">Vew Details</Link>
            <Link className="btn text-white bg-blue-800 hover:bg-success ">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
NewArrival.propTypes = {
  card:PropTypes.object
}
