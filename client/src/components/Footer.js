import React from "react";

const Footer = () =>
<footer className="page-footer indigo darken-1 footer">
    <div className="container">
        <div className="row">
        	<div className="col l6 s12">
                <h5 className="white-text">MYMDB</h5>
                <p className="grey-text text-lighten-4">MYMDB uses The Movie Database (TMDb) to get data on movies and shows.</p>
          	</div>
          	<div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://www.themoviedb.org/?language=en">The Movie DB</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-copyright">
        <div className="container">
        	© 2017 Return of the Kings
        	<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
    </div>
</footer>

export default Footer;