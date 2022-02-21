import React from "react";
// import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import Header from "./components/Header/Header";
import { auth, createUserProfileDocument } from "./firebase/utils";
// import Authentication from "./pages/Authentication/Authentication";
// import HomePage from "./pages/homepage/HomePage";
// import ShopPage from "./pages/shop/ShopPage";
import { setCurrentUser } from "./redux/user/userAction";
import { selectCurrentUser } from "./redux/user/userSelector";
// import CheckoutPage from "./pages/checkout/CheckoutPage";
import AppRoutes from "./routes";

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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
        <AppRoutes />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) =>
    dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
