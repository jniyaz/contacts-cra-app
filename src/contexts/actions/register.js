import axiosInstance from '../../helpers/axios'

// tests
export const register = () => {
    axiosInstance.get('/users')
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
}