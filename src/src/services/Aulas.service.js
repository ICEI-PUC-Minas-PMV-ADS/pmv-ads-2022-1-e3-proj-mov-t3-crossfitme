import API from '../services/Webapi.services';
import {BASE_URL} from '../services/Urls';

export const CadastrarAula = async (param) => {
    try {
        return await API.post(`${BASE_URL}/660/aulas`, param).then(
            (response) => {
                return response.data;
            },
            (error) => {
                console.log(error);
                return null;
            },
        );
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const GetAulas = async () => {
    try {
        return await API.get(`${BASE_URL}/660/aulas`).then(
            (response) => {
                return response.data;
            },
            (error) => {
                console.log(error);
                return null;
            },
        );
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteAula = async (id) => {
    try {
        return await API.delete(`${BASE_URL}/660/aulas/${id}`).then(
            (response) => {
                return response.data;
            },
            (error) => {
                console.log(error);
                return null;
            },
        );
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const GetAlunosAula = async (id) => {
    try {
        return await API.get(`${BASE_URL}/aulauser?aulaId=${id}`).then(
            (response) => {
                return response.data;
            },
            (error) => {
                console.log(error);
                return null;
            },
        );
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const GetAlunoAula = async (aulaId, userId) => {
    try {
        return await API.get(
            `${BASE_URL}/aulauser?aulaId=${aulaId}&userId=${userId}`,
        ).then(
            (response) => {
                if (response.data.length === 0) {
                    return 0;
                }
                return response.data[0].id;
            },
            (error) => {
                console.log(error);
                return false;
            },
        );
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const PostAlunoAula = async (param) => {
    try {
        return await API.post(`${BASE_URL}/660/aulauser`, param).then(
            (response) => {
                return response.data;
            },
            (error) => {
                console.log(error);
                return null;
            },
        );
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteAlunoAula = async (aulaUserId) => {
    try {
        return await API.delete(`${BASE_URL}/aulauser/${aulaUserId}`).then(
            (response) => {
                return response.data;
            },
            (error) => {
                console.log(error);
                return null;
            },
        );
    } catch (error) {
        console.log(error);
        return null;
    }
};
