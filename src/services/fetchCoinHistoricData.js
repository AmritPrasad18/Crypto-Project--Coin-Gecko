import axiosinstance from "../Helper/axiosInstance";

export default async function fetchCoinHistoricData(id,currency ='usd',days=7,interval="daily" ){
    
    try {

        const response = await axiosinstance.get(`/coins/${id}/market_chart?&vs_currency=${currency}&interval=${interval}&days=${days}`);

        return response.data;
       
    } catch (error) {
        console.log(error);
        return null;
        
    }
}