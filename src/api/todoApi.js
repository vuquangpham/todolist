import axiosClient from "./axiosClient";

const todoApi = {
    getAll(params) {
        const url = '/todolists'
        return axiosClient.get(url, {
            params
        })
    },
    get(id) {
        const url = `/todolists/${id}`
        return axiosClient.get(url)
    },
    add(data) {
        const url = `/todolists`
        return axiosClient.post(url, data)
    },
    update(data) {
        console.log(data);
        const url = `/todolists/${data.id}`
        return axiosClient.patch(url)
    },
    remove(id) {
        const url = `/todolists/${id}`
        return axiosClient.delete(url)
    }
}
export default todoApi