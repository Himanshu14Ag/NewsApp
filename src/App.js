// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
  const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  // state = {
  //   progress: 0,
  // };

  const [progress, setProgress] = useState(0)

  // const setProgress = (progress) => {
  //   setState({ progress: progress });
  // };

  // render() {
    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey = {apiKey}
                key="general"
                pageSize={10}
                country="in"
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
                apiKey = {apiKey}
                key="business"
                pageSize={10}
                country="in"
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
                apiKey = {apiKey}
                key="entertainment"
                pageSize={10}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey = {apiKey}
                key="health"
                pageSize={10}
                country="in"
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
                apiKey = {apiKey}
                key="science"
                pageSize={10}
                country="in"
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
                apiKey = {apiKey}
                key="sport"
                pageSize={10}
                country="in"
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
                apiKey = {apiKey}
                key="technology"
                pageSize={10}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey = {apiKey}
                key="general"
                pageSize={10}
                country="in"
                category="general"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  // }
}

export default App;