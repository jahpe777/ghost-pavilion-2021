import React, { useContext } from 'react';
import './ShowsPage.css';
import BandContext from '../Contexts/BandContext';

const ShowsPage = () => {
  const ShowsContext = useContext(BandContext);
  return (
    <div className="showspage">
      <section className="image-showspage">
        {ShowsContext.shows.map((show) => {
          const { id, city, venue, date } = show;
          const showDate = new Date(date);
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
                months[showDate.getMonth()]
              } ${showDate.getDate()}, ${showDate.getFullYear()}`}</h3>
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

export default ShowsPage;
