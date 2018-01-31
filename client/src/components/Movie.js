import React, { Component } from "react";
import API from "../utils/API";

class Movie extends Component {

	
	state = {
		result: [],
		userMovies: [],
		refresh: false

	};

	handleClick = (movieId) => {
		// console.log("It worked", movieId);
		let userId = localStorage.getItem("movieListUserId")
		// console.log(userId)
		API.saveMovieToUser(userId, movieId);
		let refreshed = this.state.refresh;
		this.setState({
			refresh: !refreshed
		})
	}

	posterOnClick = (movieId) => {

	}

	render() {
		const imgURL = "https://image.tmdb.org/t/p/w300/"
		const MPR = "/MoviePage/"


        return (
			<div>
				{
					this.props.movies.map((movieList) => (

						<div key={movieList.id} className="col s3 movieBox" >
							<div className="card">

								<div className="card-image responsive-img" >
									<img src={imgURL + movieList.poster_path} />
									<span className="card-title"><a onClick={() => {this.handleClick(movieList.id)}} className="btn-floating btn waves-effect waves-light"><i className="material-icons"></i></a></span>

								</div>
								<div className="card-content movieInfo">
										<p>Title: {movieList.title}</p>
										<p>Genre: {movieList.genre_ids}</p>
										<p>Rating: {movieList.vote_average}</p>
										<p>ID: {movieList.id}</p>
								</div>
							</div>
						</div>
					))
				}
				
			</div>
		)
	}
}
export default Movie;