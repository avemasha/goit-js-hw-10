function fetchCountries (name) {
    const BASE_URL = 'https://restcountries.com/v3.1/name/'
    const nameParameters = '?fields=name,capital,population,flags,languages'
    return fetch (`${BASE_URL}${name}${nameParameters}`)
    .then(resp => {
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        return resp.json()
    })
}

export { fetchCountries }