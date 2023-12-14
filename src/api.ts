import axios, {AxiosResponse} from "axios";

const API_BASE_URL = "https://gsi.fly.dev/";

export const fetchData = async (): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.get(`${API_BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};