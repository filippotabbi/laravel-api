let app =  Vue({
  el : '#root',
  data : {
    sports: []
  },
  created() {

    axios.get('http://localhost:8000/api/sport').then((response) => {
        this.sports = response.data.data;
    })
  }
})
