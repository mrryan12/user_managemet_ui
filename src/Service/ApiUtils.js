const request = (options) => {

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        ...options.headers,
    };


    return fetch(options.url, {...options, headers: headers})
    .then(response =>
        response.json().then(json => {         
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );

}
export default request;