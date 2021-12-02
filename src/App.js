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
  // const [localStorage, setLocalStorage] = useState({});

  // const storagePasser = (storageData) => {
  //   setLocalStorage(storageData);
  // };
  const dataPasser = (userData) => {
    setUserInfo(userData);
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
            element={<HomePage saver={localStorage} data={userInfo} />}
          />
          <Route
            path="/my-profile"
            element={
              <ProfilePage
                errorProp={handleEmpty}
                getAgeAndNameHandler={dataPasser}
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
