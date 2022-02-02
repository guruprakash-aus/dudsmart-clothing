import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Header from "./components/Header/Header";
import { auth, createUserProfileDocument } from "./firebase/utils";
import Authentication from "./pages/Authentication/Authentication";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import { setCurrentUser } from "./redux/user/userAction";
// import { setCurrentUser } from "./redux/user/userAction";

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //   this.setState({ currentUser: user });

      //   console.log(user);
      // });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/authentication' element={<Authentication />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) =>
    dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
