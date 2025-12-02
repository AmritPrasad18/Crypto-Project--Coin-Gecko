import React from "react";
import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import  Chart  from "chart.js/auto";

function CoinInfo({historicData,setDays,setCoinInterval,days,currency}){

    Chart.register(CategoryScale); //registration

    if(!historicData){
        return <Alert message="No historic data present" type="info"/>
    }
    return(
        <div className="flex flex-col items-center justify-center w-full p-6 mt-6 md:w-3/4">
            <Line
                data={{
                    labels:historicData.prices.map(coinPrice => {
                      let date = new Date(coinPrice[0]); 
                      let time = date.getHours()> 12 ? `${date.getHours() - 12}:${date.getMinutes} PM` :
                      `${date.getHours}:${date.getMinutes} AM`;
                        return days===1?time:date.toLocaleDateString();
                     }),
                    datasets:[{
                        label:`Price(past ${days} Days) in ${currency.toUpperCase()}`,
                        data:historicData.prices.map(coinPrice => coinPrice[1])
                        }],
                }}
            
            />
        </div>
    )
}
export default CoinInfo;