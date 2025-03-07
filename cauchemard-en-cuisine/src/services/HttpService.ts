type HttpResponse = {
    status: number;
    data: any;

}

export default class HttpService {
    static async get(url: string,headers?: RequestInit): Promise<any> {
        const  response = await fetch(url,headers);
        return response?await response.json():null;
    }

    private static async request(url: string, method: string, data: any,headers?: RequestInit): Promise<any> {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            ...headers
        })
        const respData = response?await response.json():null;
        return (status:response.status,data:respData);
    }

    static async post(url: string, data: any,headers?: RequestInit): Promise<any> {
        return await fetch(url, 'POST', data,headers);
    }

    static async put(url: string, data: any,headers?: RequestInit): Promise<any> {
        return await fetch(url, 'PUT', data,headers);
    }

    static async delete(url: string, headers?: RequestInit): Promise<any> {
        return await fetch(url, 'DELETE', {}, headers);
    }
}