import axiosinstance from "../Helper/axiosInstance";

export default async function fetchCoinDetails(id){
    
    try {
        
        const response = await axiosinstance.get(`/coins/${id}`);
        
        return response.data;
       
    } catch (error) {
        console.log(error);
        return null;
        
    }
}