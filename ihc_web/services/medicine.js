import Axios from '@utils/axios'

const path = '/medicines'

const get = async params => await Axios.get({ path, params })

export default { get }