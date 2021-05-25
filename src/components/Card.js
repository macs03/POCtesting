import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ person }) => {
  const sayHi = () => {
    console.log('Hi there', person.name);
  };

  useEffect(() => {
    sayHi();
  }, []);

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        className="br-100 h3 w3 dib"
        alt={person.name}
        src={process.env.PUBLIC_URL + person.imgPath}
      />
      <div>
        <h2>{person.name}</h2>
        <p>{person.email}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    imgPath: PropTypes.string
  }).isRequired
};

export default Card;
