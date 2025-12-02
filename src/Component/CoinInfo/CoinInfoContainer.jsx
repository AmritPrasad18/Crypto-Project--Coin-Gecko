import React, { useState } from "react";
import CoinInfo from "./CoinInfo";
import fetchCoinHistoricData from "../../services/fetchCoinHistoricData"
import { useQuery } from "@tanstack/react-query";
import store from "../../Zustand/Zustand";
import Alert from "../Alert/Alert";
import PageLoader from "../../Pages/Loader/PageLoader"
function Coininfocontainer({coinId}){

    const {currency} = store();
    const [days,setDays]=useState(7);
    const {interval , setCoinInterval}=useState('');

    const {data:historicData,isLoading,isError} = useQuery({
        queryKey:['CoinHistoricData', coinId , currency , days , interval],
        queryFn:()=>fetchCoinHistoricData(coinId  ,currency ,days,interval),
        staleTime:1000 * 60 * 5,
        gcTime:1000 * 60 * 5,
    });
    if (isError) {
        return <Alert message="Error fetching data" type="error"/>
    }
    if (isLoading) {
        return <PageLoader/>
    }
    return(
        <>
            <CoinInfo
             historicData={historicData}
             setDays={setDays}
             setCoinInterval={setCoinInterval}
             days={days}
             currency={currency}/>
        </>
    )
}
export default Coininfocontainer;