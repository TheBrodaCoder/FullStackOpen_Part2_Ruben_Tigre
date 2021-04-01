import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl);
}

const addPerson = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const popPerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}
// eslint-disable-next-line
export default {
    getAll,
    addPerson,
    popPerson,
    updatePerson
}