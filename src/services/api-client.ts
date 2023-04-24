import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c355772a0b8b4f3985f104051493778f'
    },
});

