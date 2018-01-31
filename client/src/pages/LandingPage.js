import React, { Component } from "react";
import API from "../utils/API";
import { Carousel } from "react-responsive-carousel";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import logo from ".././logo.png";




// const imgurl = `https://image.tmdb.org/t/p/w500`


class SearchMoviesContainer extends Component {

		state = {
			posterPath: [],
			urlImage: [],
			urlBeginning: "https://image.tmdb.org/t/p/w370_and_h556_bestv2",
			email: "",
			password: ""
		};
	
	handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
		};

	componentDidMount() {
		this.topMovies();
		// this.setState({posterPath:posterPath});
	
	};

	topMovies = () => {
		API.topMovies()
			.then(res => this.setState({ posterPath: res.data.results}))
			.catch(err => console.log(err));
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

	signUp = ()=> {
		this.props.history.push('/welcome');
	}
 

	render() {
			this.state.posterPath.map((currentMovie) => {
	        this.state.urlImage.push(this.state.urlBeginning + currentMovie.poster_path);
					// this.setState({ movieList: urlImage })
			})

		return (
			<div>
				<nav className="indigo darken-1">
					<div class="nav-wrapper">
						<a href="#" class="brand-logo"><img id="logoWelcome" src={logo} alt="logo" /></a>
						<ul id="nav-mobile" class="right">
							<li>
								<form className="" onSubmit={this.handleSignIn}>
									<div className="row">
										<div className="input-field col s4">
											<input className="validate" type="email" name="username" value={this.state.username} onChange={this.handleInputChange}/>
											<label htmlFor="email">Email</label>
										</div>
										<div className="input-field col s4">
											<input className="validate" type="password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleInputChange}/>
											<label htmlFor="password">password</label>
										</div>
										<input className="waves-effect waves-light indigo lighten-3 indigo-text btn"  id="signiInButton" type="submit" value="Sign In" />
									</div>
								</form>
							</li>
							<li><a href="/welcome" className="waves-effect waves-light indigo lighten-3 indigo-text btn">sign Up</a></li>
						</ul>
					</div>
				</nav>
				<div id="carousel" >					
					<Carousel showArrows={true} showStatus={false} showIndicators={false} showThumbs={false} centerMode={true} centerSlidePercentage={18} infiniteLoop={true} autoPlay={true}>
							{this.state.urlImage.map((currentImg, index) => {
													console.log(currentImg);
													return <div key={index}><img src={ currentImg } /></div>
												})
												}
					</Carousel>
				</div>
				{/* <div className="row">
					<div className="col s6">
					<p>Hello</p>
					</div>
			        <div className="col s6">
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
			    </div> */}
				
				<Footer />
			</div>
		);
	}
}


export default SearchMoviesContainer;
