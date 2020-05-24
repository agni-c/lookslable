import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import NavBar from "./P_User/components/NavBar";
import HeroMain from "./P_User/components/HeroMain";
import "./main-content.css";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyA2NqT0Shr_8yb-YQWWCh3b-1DnFUi4ZhI",
  authDomain: "spring-internship.firebaseapp.com",
  databaseURL: "https://spring-internship.firebaseio.com",
  projectId: "spring-internship",
  storageBucket: "spring-internship.appspot.com",
  messagingSenderId: "871532525324",
  appId: "1:871532525324:web:a6a8cd49b945e5788c3b29",
  measurementId: "G-S2BPC07SW6",
  // ...
};
firebase.initializeApp(config);

class SignInScreen extends React.Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) =>
        this.setState({ isSignedIn: !!user })
      );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }
    return (
      <div>
        <div className="main-content-bc">
          <NavBar />
          <HeroMain />
        </div>
      </div>
    );
  }
}

export default SignInScreen;
