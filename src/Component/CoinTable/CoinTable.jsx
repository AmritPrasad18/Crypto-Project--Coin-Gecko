import React from "react";// import { useState } from "react";
import  fetchCoinData  from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
// import { CurrencyContext } from "../../Context/CurrencyContext";
import store from "../../Zustand/Zustand";
import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";


function CoinTable() {
    

    const navigate = useNavigate();

    const {currency} = store();

    const [page, setPage] = useState(1);
    const { data, isError, isLoading, error } = useQuery({
        queryKey:['coins',page, currency] , //unique key
        queryFn:()=> fetchCoinData(page,currency), //
        retry:2,
        retryDelay:1000,
        gcTime:1000*60*2, //gcTime=cacheTime or garbage collection time
    });
        console.log(data);
        console.log(page);
        
    if (isError) {
        return <div>Error:{error.message}</div>;
    }
    if(isLoading){
        return<ContentLoader/>
    }

    // function handlePagination(){
    //   setPage(prev => prev+1); //prev=bydefault value of usestate 
    //   console.log(page);

    // }
    function handleCoinRedirect(id){
        navigate(`/details/${id}`)
    }

    return (
        <div className="flex flex-col my-5 mx-auto w-[80vw] justify-center items-center gap-4">

            <div className="flex items-center justify-center w-full px-4 py-4 font-bold text-black bg-yellow-400">
            <div className="basis-[35%]">
                Coin
            </div>
            <div className="basis-[25%]">
                Price
            </div>
            <div className="basis-[20%]">
                24th Change
            </div>
            <div className="basis-[20%]">
                Price Cap
            </div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {isLoading && <div className="items-center justify-center text-3xl">Loading...</div>}
                {data && data.map((coin) => {
                    return (
                        <div onClick={()=>handleCoinRedirect(coin.id)} key={coin.id} className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent">
                            <div className="flex items-center justify-start basis-[35%]">
                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" loading="lazy" />
                                </div>
                                {/* name and symbol */}
                                <div className="flex flex-col"> 
                                    <div className="pl-1 text-3xl">{coin.name}</div>
                                    <div className="pl-1 text-xl">{coin.symbol}</div>
                                </div>

                            </div>

                            <div className="basis-[25%]">
                                {coin.high_24h}
                            </div>
                            <div className="basis-[20%]">
                                {coin.price_change_24h}
                            </div>
                            <div className="basis-[20%]">
                                {coin.market_cap}
                            </div>

                        </div>
                        
                    )
                    
                })}

            </div>

            {/* buttons */}
            <div className="flex items-center justify-center gap-5">
                <button 
                 disabled={page===1}
                 onClick={() => setPage(page-1)}
                 className="text-2xl text-white btn btn-primary btn-wide">
                    Prev
                </button>
                <button 
                 onClick={() => setPage(page+1)}
                 
                 className="text-2xl text-white btn btn-secondary btn-wide">
                    Next
                </button>
            </div>
        
        </div>

    );
}




//     const result=await response.json();
//     console.log(result);
// }

// useEffect(() => {
//     download();

// },[count]); //[]->one time run, [count]->run when count changes

// useEffect(() => {
//     console.log("Flag changed");

// },[flag]); //[]->one time run, [count]->run when count changes

// useEffect(() => {
//    console.log("Everytime changed");

// },); //[]->one time run, [count]->run when count changes

// useEffect(() => {

//    console.log("count or flag changed");  
// },[count,flag]);



export default CoinTable;