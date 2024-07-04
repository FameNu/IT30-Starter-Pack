// Objective: Define the response object structure for the API responses.
interface ResponseObject {
    data: string | object | Array<any> | null;
    meta: any;
}

export {type ResponseObject};