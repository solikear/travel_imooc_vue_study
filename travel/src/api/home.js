
import axios from '@/util/axios'

// export function getHomeInfo(city) {
//     return axios.get(`/index.json?city=${city}`)
// }

const home = {
    getHomeInfo(city) {
        return axios.get(`/index.json?city=${city}`)
    }
}

export default home