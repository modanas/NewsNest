import { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";

const App = () => {
	const pageSize = 5;
	const apiKey = "341d2d6ac808444b866aae05f7c8d049";
	const [progress, setProgress] = useState(0);

	return (
		<Router>
			<div className="d-flex flex-column min-vh-100">
				<NavBar />
				<LoadingBar height={3} color="#f11946" progress={progress} />
				{/* main grows to push footer to bottom */}
				<main className="flex-grow-1" style={{ paddingTop: "70px" }}>
					<Routes>
						<Route
							exact
							path="/"
							element={
								<News
									setProgress={setProgress}
									key="general"
									apiKey={apiKey}
									pageSize={pageSize}
									country="us"
									category="general"
								/>
							}
						/>
						<Route path="/about" element={<About />} />
						<Route
							exact
							path="/business"
							element={
								<News
									setProgress={setProgress}
									key="business"
									apiKey={apiKey}
									pageSize={pageSize}
									country="us"
									category="business"
								/>
							}
						/>
						<Route
							exact
							path="/entertainment"
							element={
								<News
									setProgress={setProgress}
									key="entertainment"
									apiKey={apiKey}
									pageSize={pageSize}
									country="us"
									category="entertainment"
								/>
							}
						/>
						<Route
							exact
							path="/general"
							element={
								<News
									setProgress={setProgress}
									key="general"
									apiKey={apiKey}
									pageSize={pageSize}
									country="us"
									category="general"
								/>
							}
						/>
						<Route
							exact
							path="/health"
							element={
								<News
									setProgress={setProgress}
									key="health"
									apiKey={apiKey}
									pageSize={pageSize}
									country="us"
									category="health"
								/>
							}
						/>
						<Route
							exact
							path="/science"
							element={
								<News
									setProgress={setProgress}
									key="science"
									apiKey={apiKey}
									pageSize={pageSize}
									country="us"
									category="science"
								/>
							}
						/>
						<Route
							exact
							path="/sports"
							element={
								<News
									setProgress={setProgress}
									key="sports"
									apiKey={apiKey}
									pageSize={pageSize}
									country="us"
									category="sports"
								/>
							}
						/>
						<Route
							exact
							path="/technology"
							element={
								<News
									setProgress={setProgress}
									key="technology"
									apiKey={apiKey}
									pageSize={pageSize}
									country="us"
									category="technology"
								/>
							}
						/>
					</Routes>
				</main>

				<Footer />
			</div>
		</Router>
	);
};

export default App;
