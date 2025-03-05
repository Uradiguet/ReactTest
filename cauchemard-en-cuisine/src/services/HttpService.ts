export default class HttpService {
    static async get(url: string, headers?: RequestInit): Promise<any>{
        const response = await fetch(url, headers);
        return await response.json();
    }

    static async post(url: string, body: any, headers?: RequestInit): Promise<any>{
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
}