import axios from '@/util/axios'

// export function getDetailInfo(id) {
//     return axios.get('/detail.json', {
//         params: {
//             id
//         }
//     })
// }

const detail = {
    getDetailInfo(id) {
        return axios.get('/detail.json', {
            params: {
                id
            }
        })
    }
}

export default detail