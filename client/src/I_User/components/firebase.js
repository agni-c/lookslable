import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './NavBar';
import HeroMain from './HeroMain1';
import { Container } from 'react-bootstrap';
import MyEvents from './MyEvents';
import Support from '../../components/Support';
import FAQ from '../../components/FAQ';
import { Card } from '@material-ui/core';
import { iuserevent, customiuserevent } from '../../api';

// Configure Firebase.
const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
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
      current: [],
    };
  }

  state = {
    isSignedIn: false,
  };

  uiConfig = {
    signInFlow: 'popup',

    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  validateDate = (date) => {
    var currentdate = new Date().toISOString().substring(0, 16);

    if (Date.parse(date) - Date.parse(currentdate) <= 0) {
      return false;
    } else if (currentdate.substring(8, 10) === date.substring(8, 10)) {
      return false;
    } else {
      return true;
    }
  };

  handleCurrentEvents = () => {
    this.setState({ current: false });
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

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
    {
      (async () => {
        var uid = firebase.auth().currentUser.uid;
        const event = await iuserevent(uid);
        const customEvent = await customiuserevent(uid);
        if (event) {
          event.map((e) => {
            if (this.validateDate(e.bookingdate)) {
              this.setState({
                current: [e.bookingdate],
              });
            }
          });
        }

        if (customEvent) {
          customEvent.map((c) => {
            if (this.validateDate(c.date)) {
              this.setState({
                current: [c.date],
              });
            }
          });
        }
      })();
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
                    {/* <CurrentEvents
                      handleCurrentEvents={this.handleCurrentEvents()}
                    /> */}
                    {(() => {
                      console.log(this.state.current.length);
                    })()}
                    {this.state.current.length > 0 ? (
                      <div
                        style={{
                          backgroundColor: '#fff',
                          // width: '100%',
                          height: '50px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: '50px 10px 10px 0',
                        }}
                      >
                        <Link
                          to='/myevents'
                          style={{ textDecoration: 'none', color: '#ed3181' }}
                        >
                          Current Events
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </div>

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
