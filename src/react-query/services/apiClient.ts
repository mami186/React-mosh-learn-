import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});
class ApiClient <T>{
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}
	getall=()=> {
		return axiosInstance
			.get<T[]>(this.endpoint)
			.then((res) => res.data)
	}
    post=(data:T)=>{
        return axiosInstance
        .post<T>(this.endpoint,data) 
        .then((res)=>res.data)
    }
    delete=(id:number)=>{
        return axiosInstance
        .delete<T>(`${this.endpoint}/${id}`)
        .then((res)=>res.data)
    }
}

export default ApiClient; 