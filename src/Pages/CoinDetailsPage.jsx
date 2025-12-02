import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchCoinDetails from "../services/fetchCoinDetails";
import parse from 'html-react-parser'
import store from "../Zustand/Zustand";
import ContentLoader from "react-content-loader";
import Coininfocontainer from "../Component/CoinInfo/CoinInfoContainer";
function CoinDetailsPage(){

    const {coinId} = useParams();
    const {currency}=store();
   
    const{isLoading ,isError, data:coin}=useQuery({
        queryKey:[],
        queryFn:()=>fetchCoinDetails(coinId),
        retryDelay:1000,
        gcTime:1000*60*2,
    });
    
    if (isLoading) {
        return <div><ContentLoader/></div>
    }
    if (isError) {
        return <div>Error:Something went wrong</div>
    }
    return(
        <>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center w-full mt-6 border-r-2 md:w-1/3 md:mt-0 border-gray-50">
                    <img 
                        src={coin?.image?.large}
                        alt=""
                        className="mb-5 h-52"
                    />
                    <h1 className="mb-3 text-4xl font-bold">
                        {coin?.name}
                    </h1> 
                    <p className="w-full px-6 py-4 text-justify">
                        {parse(coin?.description?.en)}
                    </p>
                    <div className="flex flex-col justify-around w-full md:flex-row">
                        <div className="flex items-center mb-4 md:mb-0">
                            <h2 className="text-xl font-bold">Rank</h2>
                            <span className="ml-3 text-xl">{coin?.market_cap_rank}</span>
                        </div>
                    </div>    
                    <div className="flex flex-col justify-around w-full md:flex-row">
                        <div className="flex items-center mb-4 md:mb-0">
                            <h2 className="text-xl font-bold text-yellow-400">Current Price</h2>
                            <span className="ml-3 text-xl">{coin?.market_data.current_price[currency]}</span>
                        </div>
                    </div>    
                </div>
                <div className="flex flex-col w-full p-6 text-xl md:w-2/3 md:flex-row">
                    <Coininfocontainer coinId={coinId}/>
                </div>
            </div>
        </>
    )
}
export default CoinDetailsPage;