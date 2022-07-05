const _baseURL = 'https://gateway.marvel.com:443/v1/public/characters'
const _apiKey = 'apikey=0f8dc82207fa3278202f7978af3d205e'
const _baseOffset = 1200;


const getAllCharacters = async (limit = 20) => {
    const response = await fetch(_baseURL + `?limit=${limit}&offset=${_baseOffset}` + '&' + _apiKey);
    return await response.json()
}

const getCharacter = async (id) => {
    const response = await fetch(_baseURL + `/${id}` + '?' + _apiKey);
    return await response.json()
}

export { getAllCharacters, getCharacter }