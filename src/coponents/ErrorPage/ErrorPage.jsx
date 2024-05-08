import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center space-y-5 mt-28 md:mt-52">
        <h1 className="text-center text-9xl font-bold font-poppins text-gray-600">404</h1>
        <h4 className="text-center text-4xl font-bold font-poppins">Sorry, we couldnt find this page.</h4>
        <p className="text-gray-400">But dont worry, you can find plenty of other things on our home page</p>
        <Link className="btn btn-warning" to='/'>Back to homepage</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
