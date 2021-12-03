import "./App.css";
import SingleHeader from "./components/SingleHeader";
import { Route } from "react-router";
import { Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { useState } from "react";
function App() {
  const [userInfo, setUserInfo] = useState({});
  const [errorMessage, setErrorMessage] = useState(" ");
  const [parsedUserInfo, setParsedUserInfo] = useState({});
  const dataPasser = (userData) => {
    setUserInfo(userData);
  };

  const localStorageParser = (userData) => {
    setParsedUserInfo(userData);
    localStorage.setItem("theResults", JSON.stringify(userData));

    let results = localStorage.getItem("theResults");

    const parsedResults = JSON.parse(results);
    console.log(parsedResults);
  };

  const handleEmpty = () => {
    console.log(errorMessage);
    setErrorMessage("Empty age or name");
  };

  return (
    <div>
      <SingleHeader />
      <main>
        <Routes>
          <Route
            path="/home-page"
            element={<HomePage data={userInfo} theParse={parsedUserInfo} />}
          />
          <Route
            path="/my-profile"
            element={
              <ProfilePage
                errorProp={handleEmpty}
                getAgeAndNameHandler={dataPasser}
                parseHandler={localStorageParser}
              />
            }
          />
        </Routes>
        <div>{errorMessage}</div>
      </main>
    </div>
  );
}

export default App;
