import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import axios from 'axios';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import WatchPage from './WatchPage/WatchPage';
import ListenPage from './ListenPage/ListenPage';
import ShowsPage from './ShowsPage/ShowsPage';
import AdminLogin from './AdminLogin/AdminLogin';
import AdminShows from './AdminShows/AdminShows';
import SignUpPage from './SignUpPage/SignUpPage';

import BandContext from './Contexts/BandContext';
import config from './config';

const App = () => {
  const [shows, setShows] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  const addNewShow = async (show) => {
    try {
      const res = await axios.post(`${config.API_ENDPOINT}/api/shows`, {
        body: { show },
      });
      setShows([...shows, res]);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewSubscriber = async (email) => {
    try {
      const res = await axios.post(`${config.API_ENDPOINT}/api/emails`, {
        body: { email },
      });
      setShows([...subscribers, res]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const res = await axios.get(`${config.API_ENDPOINT}/api/shows`);
        setShows(res.data);
      } catch (error) {
        setShows(error);
      }
    };
    fetchShows();
  }, []);

  return (
    <BandContext.Provider
      value={
        (shows,
        setShows,
        subscribers,
        setSubscribers,
        addNewShow,
        addNewSubscriber)
      }
    >
      <div className="App">
        <header className="App-Header">
          <Route path="/" component={NavBar} />
        </header>
        <main className="Header">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/watch" component={WatchPage} />
          <Route exact path="/listen" component={ListenPage} />
          <Route exact path="/shows" component={ShowsPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/admin" component={AdminLogin} />
          <Route exact path="/admin_shows" component={AdminShows} />
        </main>
        <footer>
          <Route path="/" component={Footer} />
        </footer>
      </div>
    </BandContext.Provider>
  );
};

export default App;
