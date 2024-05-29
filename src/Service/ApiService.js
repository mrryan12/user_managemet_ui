import request from "./ApiUtils";

class ApiService {

    login(username,password) {
        return request({
            url: `http://localhost:8080/user/login?username=${username}&password=${password}`,
            method: 'POST'
        });
    }

     register(data) {
        return request({
            url: "http://localhost:8080/user/register",
            method: 'POST',
            body:JSON.stringify(data)
        });
    }


}
export default new ApiService();