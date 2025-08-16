import React from "react";

const About = () => {
	return (
		<div
			className="container"
			style={{ paddingTop: "90px", paddingBottom: "40px" }}
		>
			<div className="row">
				<div className="col-12">
					<h1 className="mb-3">About NewsNest</h1>
					<p className="lead">
						NewsNest delivers curated headlines from around the world. Built
						with React and Bootstrap for fast, responsive news browsing.
					</p>
					<hr />
					<p>
						This app fetches top headlines by category. Use the navigation to
						explore sections or the search to find specific stories.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
