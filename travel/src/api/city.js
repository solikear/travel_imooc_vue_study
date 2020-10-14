
import axios from '@/util/axios'

// export function getCityInfo() {
//     return axios.get(`/city.json`)
// }

const city = {
    getCityInfo() {
        return axios.get(`/city.json`)
    }
}

export default city