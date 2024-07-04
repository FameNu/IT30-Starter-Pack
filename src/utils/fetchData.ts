import axios, { type AxiosResponse } from "axios";
import { type ResponseObject } from "@/models/ResponseObject";
const URL = "http://it30starterpack.sit.kmutt.ac.th:1337/api"

async function fetchData (path: string, param?: string) : Promise<ResponseObject> {
    const response = await axios.get(path, {
        baseURL: URL,
        params: param
    })
    if (response.status !== 200) throw new Error("Failed to fetch data : " + response.statusText)
    return response.data as ResponseObject
}

export { fetchData }