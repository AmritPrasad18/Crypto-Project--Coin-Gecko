import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { lazy ,  Suspense} from "react";
import React from "react";
import MainLayout from "../Layout";
import MyLoader from "../Loader/PageLoader";



const Home = lazy(
    ()=> import ('../../Pages/Home')
);
const CoinDetailsPage = lazy(
    ()=> import ('../../Pages/CoinDetailsPage')
);

function Routing(){
    return(
        <Routes>
            
            <Route path="/" element={<MainLayout/>} >

                <Route index element={

                    <Suspense fallback={<MyLoader/>}>
                    <Home/>
                    </Suspense>

                    } />
                <Route path="/details/:coinId" element={
                    
                    <Suspense fallback={<MyLoader/>}>
                    <CoinDetailsPage/>
                    </Suspense>
                
                } />

            </Route>

        </Routes>
    )
}

export default Routing;