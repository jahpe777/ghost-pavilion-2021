import React, { useContext, useEffect } from 'react';
import BandContext from '../Contexts/BandContext';
import './AdminShows.css';

const AdminShows = () => {
  const AdminShowsContext = useContext(BandContext);

  useEffect(() => {
    if (!window.localStorage.getItem('loggedIn')) {
      this.props.history.push('/');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newShow = {
      date: e.target.date.value,
      venue: e.target.venue.value,
      city: e.target.city.value,
    };
    AdminShowsContext.addNewShow(newShow);
    e.target.reset();
  };

  return (
    <div className="showsPage">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="showsAdmin"
          type="date"
          name="date"
          placeholder="date"
          aria-label="date"
        />
        <input
          className="showsAdmin"
          type="text"
          name="venue"
          placeholder="Venue Name (ex. Staples Center)"
          aria-label="venue name"
        />
        <input
          className="showsAdmin"
          type="text"
          name="city"
          placeholder="Venue City, State (ex. Los Angeles, CA)"
          aria-label="venue city"
        />
        <input className="showsAdminSubmit" type="submit" />
      </form>
      <section className="image-showspage">
        {AdminShowsContext.shows.map((show) => {
          const { id, city, venue } = show;
          const adminShowsDate = new Date(show.date);
          const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ];
          return (
            <div key={id}>
              <h3>{`${
                months[adminShowsDate.getMonth()]
              } ${adminShowsDate.getDate()}, ${adminShowsDate.getFullYear()}`}</h3>
              <h6>{city}</h6>
              <h6>{venue}</h6>
              <br />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AdminShows;
