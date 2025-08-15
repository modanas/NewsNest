import { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
 const pageSize = 5;
	// apiKey = import.meta.env.VITE_NEWS_API;
	const apiKey = "341d2d6ac808444b866aae05f7c8d049";
	const [progress, setProgress] = useState(0);

	return (
		<Router>
			<NavBar />
			<LoadingBar height={3} color="#f11946" progress={progress} />
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
		</Router>
	);
};


export default App;