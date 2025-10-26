import axiosinstance from "../Helper/axiosInstance";

export default async function fetchCoinData(page=1,currency='usd'){
    const per_Page=10;
    try {
        console.log("fetchCoinData",{page,currency});
        const response = await axiosinstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${per_Page}&page=${page}`);
        console.log(response);
        return response.data;
       
    } catch (error) {
        console.log(error);
        return null;
        
    }
}


