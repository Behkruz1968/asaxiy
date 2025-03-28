import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import { ThreeDots } from "react-loader-spinner";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import NewProduct from "./pages/NewProduct";
import Discounts from "./pages/Discounts";
import Books from "./pages/Books";
import Telephones from "./pages/Telephones";
import Tv from "./pages/Tv";
import Sport from "./pages/Sport";
import OrderPay from "./pages/OrderPay";
import OrderPayStatus from "./pages/OrderPayStatus";
import Favourites from "./pages/Favourites";
import ProductDetail from "./pages/ProductDetail";
import Slide from "./components/Carausel/Slide";
import Store from "./components/CompanyInfo/Store";
import Footer from "./components/footer/Footer";
import Modal from "./components/Modal/Modal"
function App() {
  const [loader, setLoader] = useState(false);
  const Loader = () => {
    return (
      <div style={{height:'100vh',display:"flex",alignItems:"center",justifyContent:"center"}}>
        <ThreeDots
          height="130"
          width="130"
          radius="9"
          color="#008dff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  };
  useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    },2500)
  },[])
  return (
    <>
     {loader?<Loader/>:<div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/news" element={<Home/>}/>
        <Route path="/newProduct" element={<Home/>}/>
        <Route path="/Discounts" element={<Home/>}/>
        <Route path="/books" element={<Home/>}/>
        <Route path="/telephones" element={<Home/>}/>
        <Route path="/tv" element={<Home/>}/>
        <Route path="/sports" element={<Home/>}/>
        <Route path="/order-pay" element={<Home/>}/>
        <Route path="/order-pay-status" element={<Home/>}/>
        <Route path="/favourites" element={<Home/>}/>
      </Routes>
      <div className="slider">
       <Slide/>
       <Store/>
      </div>
      <Footer/>
      {/* <Modal/> */}
    </div>}
   </>
  );
}

export default App;
