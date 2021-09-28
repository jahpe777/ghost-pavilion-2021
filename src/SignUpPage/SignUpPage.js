import React, { useRef, useContext } from 'react';
import './SignUpPage.css';
import BandContext from '../Contexts/BandContext';

const SignUpPage = () => {
  const SignUpContext = useContext(BandContext);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    SignUpContext.addNewSubscriber(email);
    formRef.reset();
    alert('Thanks for signing up!');
  };

  return (
    <div className="signuppage">
      <section className="image-signuppage">
        <header>
          <h3 className="mailing">Mailing List</h3>
        </header>
        <div className="signup-detail">
          <p>Hear about upcoming shows</p>
          <p>Free downloads</p>
          <p>and more!</p>
        </div>
        <form className="signup-form" ref={formRef} onSubmit={handleSubmit}>
          <p>
            <label htmlFor="email">Email: </label>
            <input
              placeholder="johnsmith@gmail.com"
              type="email"
              required
              name="email"
              id="email"
            />
          </p>

          <p>
            <button type="submit">Sign Up</button>
          </p>
        </form>
      </section>
    </div>
  );
};

export default SignUpPage;
