import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
import UserSidebar from "../components/UserSidebar";
import Td from "../components/Td";
import API from "../utils/API";

class Profile extends Component {

	state = {
		userMovies: []
	};

	componentDidMount() {
		let userId = localStorage.getItem('movieListUserId');

		API.userMovies(userId)
			.then(moviesResponse => {
				console.log('moviesResponse', moviesResponse);
				this.setState({
					userMovies: moviesResponse.data.movies
				})
				this.state.movies.forEach(element => {
					if (!this.state.userMovies.includes(element.id)) {
						this.state.displayMovies.push(element)
					}


				});
				console.log("user movies state", this.state.userMovies);
			})
			.catch(moviesError => {
				console.log('moviesError', moviesError);
			});
	}
	
	render() {
		return (
			<div>
				<Nav />
				<div className="indigo darken-1"><br /></div>

				<div className="row">
					

					<div className="col s8 offset-s2">
						<h3 id="title"> Your List</h3>
						<table>
							<thead>
								<tr>
									<th>Movies</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>Alvin</td>
									<Td movies={this.state.userMovies}></Td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<Footer />
			</div>
		)
	}
}

export default Profile;
