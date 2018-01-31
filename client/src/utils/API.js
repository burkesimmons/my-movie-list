import axios from  "axios";


const SEARCHURL = `https://api.themoviedb.org/3/search/movie?api_key=dfc918e89334423f004fdc14fda75e92&query=zoolander`;

export default {
    saveUser:(userData)=> {
         return axios.post("/api/authRoutes/register", userData)
         
    },
    login: (userData)=> {
        return axios.post("/api/authRoutes/login", userData)

    },
    exampleRequest: (movieData)=> {
        let movieToken = document.cookie.split("movieListUser=")[1]
        let headers = {headers: {"Authorization": movieToken}}
        axios.post("/api/movie", movieData, headers)
    },
    moviedetails: function(query) {
      return axios.get(SEARCHURL);
    },

    topMovies: function(genre) {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dfc918e89334423f004fdc14fda75e92&sort_by=popularity.desc&page=1`);

    },

    movieSearch: function(genre) {
        console.log(genre)
        return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=dfc918e89334423f004fdc14fda75e92&sort_by=popularity.desc&with_genres='+ genre);
    },

    userMovies: (userId)=> {
        console.log('userMovies utils api', userId);
        return axios.get("/api/appRoutes/userMovies/"+ userId);
    },

    saveMovieToUser: (userId, movieId) => {
        var userInfo = {
            userId: userId,
            movieId: movieId
        }
        return axios.post("/api/appRoutes/savemovie", userInfo);
    },

    
};




