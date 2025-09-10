import axios from 'axios';
const baseDomain = 'https://payments.mamapesa.com/api'; // API for utility payments
export const basePostUrl = 'https://backend.mamapesa.com'; // API for core app backend

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
