import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import HeroMain from './HeroMain1';
import { Container } from 'react-bootstrap';
import MyEvents from './MyEvents';
import Support from '../../components/Support';
import FAQ from '../../components/FAQ';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyA2NqT0Shr_8yb-YQWWCh3b-1DnFUi4ZhI',
  authDomain: 'spring-internship.firebaseapp.com',
  databaseURL: 'https://spring-internship.firebaseio.com',
  projectId: 'spring-internship',
  storageBucket: 'spring-internship.appspot.com',
  messagingSenderId: '871532525324',
  appId: '1:871532525324:web:a6a8cd49b945e5788c3b29',
  measurementId: 'G-S2BPC07SW6',
  // ...
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
    };
  }
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
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
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    let P = true;
    let I = false;
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1
            style={{ color: '#ed3181', textAlign: 'center', marginTop: '20px' }}
          >
            Pozular
          </h1>
          <p style={{ color: '#ed3181', textAlign: 'center' }}>
            Please sign-in:
          </p>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }

    return (
      <Router>
        <Switch>
          <div>
            <NavBar isLoggedIn={true} showLogOut={true} />
            <Route exact path='/myevents'>
              <MyEvents />
            </Route>
            <Route exact path='/support'>
              <Support />
            </Route>
            <Route exact path='/faq'>
              <FAQ />
            </Route>
            <Route exact path='/'>
              <Container md='auto' className='center'>
                <div
                  className='welcome-user'
                  style={{ height: '40vh', marginBottom: '0px' }}
                >
                  <div style={{ marginLeft: '10px' }}>
                    <h1 style={{ color: '#fff' }}>Welcome,</h1>{' '}
                    <h1 style={{ color: '#fff' }}>
                      {firebase.auth().currentUser.displayName}
                    </h1>
                  </div>
                </div>
                {/* <HeroMain /> */}
                <HeroMain />
              </Container>
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default SignInScreen;
