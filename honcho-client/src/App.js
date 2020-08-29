import React from "react";
import { 
    BrowserRouter as Router,
    Route 
} from "react-router-dom";
import Project from './pages/Projects';
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
            <Router>
                <Route>
                    <Project /> 
                </Route>
            </Router>
		</div>
	);
}

export default App;
