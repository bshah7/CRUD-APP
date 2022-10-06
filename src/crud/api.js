import axios from "axios";

export const getNames = async () => {
    // eslint-disable-next-line
    return await axios.get('http://localhost:5000/data');
};

export const createName = async (name) => {
    // eslint-disable-next-line
    return await axios.post('http://localhost:5000/data', name);
};

export const getName = async (id) => {
    // eslint-disable-next-line
    return await axios.get('http://localhost:5000/data/' + encodeURIComponent(id));
};

export const removeName = async (id) => {
    // eslint-disable-next-line
    return await axios.delete('http://localhost:5000/data/' + encodeURIComponent(id));
};

export const updateName = async (id, name) => {
    let aLink = 'http://localhost:5000/data/' + encodeURIComponent(id)
    // eslint-disable-next-line
    return await axios.put(aLink, name);
};

