import Axios from '@utils/axios'

const path = '/pharmacies'

const get = async params => await Axios.get({ path, params })

export default { get }