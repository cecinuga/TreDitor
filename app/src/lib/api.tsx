import axios from "axios"

export const SERVER_URL = "https://menumal.it/"

export class Api {
    private static request = axios.create({
        baseURL:`${SERVER_URL}`,
        withCredentials: false,
        headers: {
             "Content-Type": "application/json",
             "Access-Control-Allow-Credentials":"true", 
             "Access-Control-Allow-Origin":"*", 
             "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
             "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
            },
    });

    static async post <T>(url: string, body?: T, headers?: {}) {
        const finalUrl = `${url}`;
        const res = await this.request.post(finalUrl, body, { headers: headers })
            .then(function (res){
                return {kind: 'ok', res: res, error:false}
            })
            .catch(function (err) {
                console.log("Errore nella richiesta al server, riprovare più tardi.."+err)
                return {kind: 'notok', err: err, error:true}
            })
        return res
    }

    static async get(url: string, headers?: {}) {
        const finalUrl = `${url}`;
        const res = await this.request.get(finalUrl, { headers: headers, withCredentials:true })
            .then(function (res){
                return {kind: 'ok', res: res, error:false}
            })
            .catch(function (err) {
                console.log("Errore nella richiesta al server, riprovare più tardi.."+err)
                return {kind: 'notok', err: err, error:true}
            })
        return res
    }
}