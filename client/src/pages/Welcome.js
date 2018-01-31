import React, { Component } from "react";

import Footer from "../components/Footer";
import API from "../utils/API";
import logo from ".././logo.png";


class Welcome extends Component {

    state = {
        name: "",
        lastname: "",
		email: "",
		password: "",
		checkPassword: "",
		username: "",
		loginPassword: "",
		genres: [],
		friends: [],
		redirect: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
		};

    handleCheckChange = event => {
        const { name, value } = event.target;
        var joined = this.state.genres.concat(value);
				this.setState({ genres: joined });
    };

    handleFormSubmit = event => {
		event.preventDefault();

		API.saveUser({
			name: this.state.name,
			lastname: this.state.lastname,
			email: this.state.email,
			password: this.state.password,
			checkPassword: this.state.checkPassword,
			genres: this.state.genres
		}).then((res) => {
			let data = res.data;
			if (data && data.token) {
				document.cookie = 'movieListUser=' + data.token + '; Path=/;'
				localStorage.setItem('movieListUserId', data.id + '');
				this.props.history.push('/movies');
			}
		})
	};

	handleSignIn = event => {
		event.preventDefault();
		API.login({
			email: this.state.username,
			password: this.state.loginPassword
		}).then((res) => {
			console.log('idk')
			let data = res.data;
			if (data && data.token) {
				document.cookie = 'movieListUser=' + data.token + '; Path=/;'
				localStorage.setItem('movieListUserId', data.id + '');
				this.props.history.push('/movies');
			}
		})
	};


    render() {
		
        return (
            <div>
            	<nav id="navbar" className="indigo darken-1">
    				<div className="nav-wrapper indigo darken-1">

      					<a href="/" className="brand-logo center"><img id="logoWelcome" src={logo} alt="logo" /></a>

      					<ul id="nav-mobile" className="right">
					        <li>
					        	
					        </li>
					    </ul>
    				</div>
 				</nav>


 				 <div className="row">
			        <div className="col s8 offset-s2">
			        	<div className="card indigo lighten-4" id="welcomeForm">
			            	<div className="card-content white-text">
			              		<span className="card-title">Sign Up</span>
			              		<div className="row">
									<form onSubmit={this.handleFormSubmit}>
										<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} />
										<input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange} />
										<input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
										<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
										<input type="password" name="checkPassword" placeholder="Password" value={this.state.checkPassword} onChange={this.handleInputChange} />

										<p>
											<input type="checkbox" id="action" name="genres" value="action" onChange={this.handleCheckChange} />
											<label htmlFor="action">Action</label>
										</p>
										<p>
											<input type="checkbox" id="comedy" name="genres" value="comedy" onChange={this.handleCheckChange} />
											<label htmlFor="comedy">Comedy</label>
										</p>
										<p>
											<input type="checkbox" id="adventure" name="genres" value="adventure" onChange={this.handleCheckChange} />
											<label htmlFor="adventure">Adventure</label>
										</p>
										<p>
											<input type="checkbox" id="horror" name="genres" value="horror" onChange={this.handleCheckChange} />
											<label htmlFor="horror">Horror</label>
										</p>
										<p>
											<input type="checkbox" id="anime" name="genres" value="anime" onChange={this.handleCheckChange} />
											<label htmlFor="anime">Anime</label>
										</p>
										<p>
											<input type="checkbox" id="fiction" name="genres" value="fiction" onChange={this.handleCheckChange} />
											<label htmlFor="fiction">Fiction</label>
										</p>
										<input type="submit" />
									</form>
								    
								</div>
			            	</div>
			            
			          </div>
			        </div>
			    </div>
				<Footer />
 			</div>	


        )
    }
}



export default Welcome;
