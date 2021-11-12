import React from 'react';
import useAuth from '../../hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import MyOrder from '../OrderNow/MyOrder';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import ManageAllOrders from '../OrderNow/ManageAllOrders';
import AdminRoute from '../Login/AdminRoute/AdminRoute';


const DashBoard = () => {
    const { admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div>
            <Link to={`${url}/myorders`}><button className="btn-color rounded px-4 py-2 border-0 my-5 mx-2">My Orders</button></Link>
            <button onClick={logOut} className="btn-color rounded px-4 py-2 border-0 my-5 mx-2">Log Out</button>
            {admin && <div>
                <Link to={`${url}/manageallorders`}><button className="btn-color rounded px-4 py-2 border-0 my-5 mx-2">Manage All Orders</button></Link>
                <Link to={`${url}/manageproducts`}><button className="btn-color-2 text-white rounded px-4 py-2 border-0 my-5 mx-2">Manage Products</button></Link>
                <Link to={`${url}/makeAdmin`}><button className="btn-color rounded px-4 py-2 border-0 my-5 mx-2">Make Admin</button></Link>
            </div>}



            <Switch>

                <AdminRoute exact path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/myorders`}>
                    <MyOrder></MyOrder>
                </AdminRoute>
                <AdminRoute path={`${path}/manageproducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/manageallorders`}>
                    <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
            </Switch>

        </div>
    );
};

export default DashBoard;