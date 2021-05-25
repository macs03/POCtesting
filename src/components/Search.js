import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {
  const [searchField, setSearchField] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter(({ name, email }) => {
    const nameInclude = name.toLowerCase().includes(searchField.toLowerCase());
    const emailInclude = email
      .toLowerCase()
      .includes(searchField.toLowerCase());

    return nameInclude || emailInclude;
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    setSearchShow(true);
    if (searchField === '') {
      setSearchShow(false);
    }
  };

  function searchList() {
    return (
      searchShow && (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      )
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search People"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

Search.propTypes = {
  details: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Search;
