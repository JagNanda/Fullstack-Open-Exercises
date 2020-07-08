import axios from 'axios';

const url = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(url)
        .then(response => response.data);
}

const create = (person) => {
    return axios.post(url, person)
        .then(response => response.data);
}

const deletePerson = (id) => {
    return axios.delete(`${url}/${id}`)
        .then(response => response);
}

const editPerson = (id, editedPerson) => {
    console.log(id);
    return axios.put(`${url}/${id}`, editedPerson)
        .then(response => response.data);
}

export default {
    getAll,
    create,
    deletePerson,
    editPerson
}
