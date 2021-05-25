import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map((person) => (
    <Card key={person.id} person={person} />
  ));
  return <div>{filtered}</div>;
}

SearchList.propTypes = {
  filteredPersons: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchList;
