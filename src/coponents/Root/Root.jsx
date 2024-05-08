import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Brand from "../Brand/Brand";
import NewArrivals from "../NewArrivals/NewArrivals";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Brand></Brand>
            <NewArrivals></NewArrivals>
        </div>
    );
};

export default Root;