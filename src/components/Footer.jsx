import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<footer className="bg-dark text-light pt-4 pb-3 mt-5">
			<div className="container">
				<div className="row gy-3 align-items-center">
					<div className="col-md-4 text-center text-md-start">
						<h5 className="fw-bold mb-1">NewsNest</h5>
						<p className="mb-0 small">Daily headlines, curated for you.</p>
					</div>

					<div className="col-md-4 text-center">
						<h6 className="mb-2">Quick Categories</h6>
						<div className="d-flex justify-content-center gap-2 flex-wrap">
							<Link to="/" className="text-decoration-none text-light small">
								General
							</Link>
							<span className="text-muted">|</span>
							<Link
								to="/business"
								className="text-decoration-none text-light small"
							>
								Business
							</Link>
							<span className="text-muted">|</span>
							<Link
								to="/technology"
								className="text-decoration-none text-light small"
							>
								Tech
							</Link>
							<span className="text-muted">|</span>
							<Link
								to="/sports"
								className="text-decoration-none text-light small"
							>
								Sports
							</Link>
						</div>
					</div>

					<div className="col-md-4 text-center text-md-end">
						<button
							type="button"
							className="btn btn-outline-light btn-sm me-2"
							onClick={scrollToTop}
						>
							Back to top
						</button>
						<div className="mt-2 d-none d-md-inline small text-muted">
							Built with React & Bootstrap
						</div>
					</div>
				</div>

				<hr className="border-light my-3" />

				<div className="text-center small">
					&copy; {new Date().getFullYear()} NewsNest. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
