import { useLoaderData, useParams } from "react-router-dom";

const NewArrivalDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idint = parseInt(id)
    const job = jobs.find(job=> job.id === idint);
    console.log(job)
  return (
    <div>
      <h1>k.ujihwesdfdciolh.zsd {id}</h1>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src=''
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalDetails;
