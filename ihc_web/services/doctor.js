import Axios from '@utils/axios'

const path = '/doctors'

const get = async params => await Axios.get({ path, params })

export default { get }