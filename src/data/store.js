	
import { reactive } from 'vue'

export const store = reactive({
  apiMovies: 'https://api.themoviedb.org/3/search/movie',
  apiTv: 'https://api.themoviedb.org/3/search/tv',
  moviesList: [],
  tvList: [],
  queryParams: {
    api_key: '2e47e1a752aafcbbc481774f148a4cc5',
    language: 'it-IT',
    query: 'matrix'
  },
  errorMsg: '',

})