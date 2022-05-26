import API from '../services/Webapi.services';
import {BASE_URL} from '../services/Urls';

export const CriarRelatorio = async (param) => {
    try {
        return await API.post(`${BASE_URL}/660/relatorios`, param).then(
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

export const GetRelatorios = async () => {
    try {
        return await API.get(`${BASE_URL}/660/relatorios`).then(
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

export const GetRelatoriosAluno = async (id) => {
    try {
        return await API.get(`${BASE_URL}/660/relatorios/?alunoId=${id}`).then(
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

export const deleteRelatorio = async (id) => {
    try {
        return await API.delete(`${BASE_URL}/660/relatorios/${id}`).then(
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
