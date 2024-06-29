import Axios from '@utils/axios'

const path = '/medical_specialties'

const get = async params => await Axios.get({ path, params })

export default { get }