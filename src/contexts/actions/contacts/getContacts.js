import axiosInstance from "../../../helpers/axiosInstance";

export default (history) => {
    axiosInstance(history).get('/users')
    .then((res) => {
        console.log(res.data);
    })
    .catch((e) => {
        console.log(e);
    })
}   