import axios from "axios";
import { type ResponseObject } from "@/models/ResponseObject";
const URL = import.meta.env.VITE_APP_BASE_URL as string

async function fetchData (uri: string) : Promise<ResponseObject> {
    const response = await axios.get(uri, {
        baseURL: URL,
    })
    if (response.status !== 200) throw new Error("Failed to fetch data : " + response.statusText)
    return response.data as ResponseObject
}

export { fetchData }