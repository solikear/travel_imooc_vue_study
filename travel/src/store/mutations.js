export default {
    changeCity(state, city) {
        state.city = city;
        try {
            localStorage.city = city;
        } catch (e) {
            console.log(e)
        }
    },
    showLoading(state){
      state.loading = true
    },
    hideLoading(state){
        state.loading = false
    },
}