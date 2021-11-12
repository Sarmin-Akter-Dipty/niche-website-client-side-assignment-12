import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import AddPhones from './Pages/Admin/AddPhones/AddPhones';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/Admin/ManageProducts/ManageProducts';
import Banner from './Pages/Banner/Banner';
import Contact from './Pages/Contact/Contact';
import DashBoard from './Pages/DashBoard/DashBoard';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import ManageAllOrders from './Pages/OrderNow/ManageAllOrders';
import MyOrder from './Pages/OrderNow/MyOrder';
import OrderNow from './Pages/OrderNow/OrderNow';
import Explores from './Pages/Products/Explore/Explores';
import Products from './Pages/Products/Products';
import Reviews from './Pages/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <Products></Products>
              <Contact></Contact>

            </Route>
            <Route path="/home">
              <Banner></Banner>
              <Products></Products>
              <Contact></Contact>

            </Route>
            <Route path="/addphones">
              <AddPhones></AddPhones>
            </Route>
            <Route path="/manageproducts">
              <ManageProducts></ManageProducts>
            </Route>
            <Route path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/explore">
              <Explores></Explores>
              <AddPhones></AddPhones>
            </Route>
            <PrivateRoute path="/reviews">
              <Reviews></Reviews>
            </PrivateRoute>
            <PrivateRoute path="/ordernow/:itemId">
              <OrderNow></OrderNow>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
