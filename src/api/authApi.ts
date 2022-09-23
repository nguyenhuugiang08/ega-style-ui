import axiosClient from "./axiosClient";

export interface DataLogin {
    email: string;
    password: string;
}

export interface DataRegister {
    name: string;
    surname: string;
    email: string;
    password: string;
    phone: string;
}

const authApi = {
    login: (data: DataLogin) => {
        const url = "/auth/login";
        return axiosClient.post(url, data);
    },
    register: (data: DataRegister) => {
        const url = "/auth/register";
        return axiosClient.post(url, data);
    },
};

export default authApi;
