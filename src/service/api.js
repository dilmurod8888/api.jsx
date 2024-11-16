import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
    baseURL:"https://dummyjson.com/"
});

api.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data
        }
            return response
        
    }
)
export const getProducts = ()=>{
   return useQuery({ queryKey: ['products'], queryFn: () => api.get('products')})
}