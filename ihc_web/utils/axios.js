import axios from 'axios'

const Axios = axios.create({ baseURL: 'http://localhost:3001', headers: { 'Content-Type': 'application/json' } })

const get = async ({ path, id, params = {} }) => {
    const { data, status } = await Axios.get(id? `${path}/${id}` : path, { params, validateStatus: false })
    return status >= 200 && status <= 300 ? data : null
}

const post = async ({ path, params = {} }) => {
    const { data, status } = await Axios.post(path, params, { validateStatus: false })
    return status >= 200 && status <= 300 ? data : null
}

const put = async ({ path, id, params = {} }) => {
    const { data, status } = await Axios.put(`${path}/${id}`, params, { validateStatus: false })
    return status >= 200 && status <= 300 ? data : null
}

const remove = async ({ path, id }) => {
    const { data, status } = await Axios.delete(`${path}/${id}`, { validateStatus: false })
    return status >= 200 && status <= 300 ? data : null
}

export default { get, post, put, remove }