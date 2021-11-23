import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSide from "./pages/Login";
import ServiceWidget from "./pages/serviceWidget";
import Homepage from "./pages/Homepage";
import HotelPage from "./componenets/hotelPage";
import LocationDetailsPage from "./pages/locationDetailsPage";
import HotelDetailsPage from "./pages/hotelDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import CheckOut from "./pages/checkout";
import "./font.css";
import "./fontSetter.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Package from "./pages/package";
import Packages from "./pages/packages";
import CheckOut2 from "./pages/checkout2";
import NewPackages from "./pages/newPackages";
import { GoogleMap } from "./pages/GoogleMap";
import ViewCarousel from "./pages/Carousel";

let theme = createTheme({
  typography: {
    fontFamily: "Nunito",
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <React.Fragment>
      <div>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <SignInSide
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/hotels"
                render={() => (
                  <HotelPage
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/home"
                render={() => (
                  <Homepage
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/sw"
                render={() => (
                  <ServiceWidget
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/location"
                render={() => (
                  <LocationDetailsPage
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />{" "}
              <Route
                exact
                path="/details"
                render={() => (
                  <HotelDetailsPage
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/packages"
                render={() => (
                  <Packages
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/package"
                render={() => (
                  <Package
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/profile"
                render={() => (
                  <ProfilePage
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/check1"
                render={() => (
                  <CheckOut
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/check2"
                render={() => (
                  <CheckOut2
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/new"
                render={() => (
                  <NewPackages
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/gmap"
                render={() => (
                  <GoogleMap
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/car"
                render={() => (
                  <ViewCarousel
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                )}
              />
            </Switch>
          </Router>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
