import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

SearchPage.propTypes = {
  onsubmit: PropTypes.func
};

function SearchPage(props) {
  const {onsubmit} = props
  const [searchItem, setSearchItem] = useState('')
  const itemTimeOut = useRef(null)

  const handleSearchChage = (e) => {
    const value = e.target.value
    setSearchItem(value)

    if (!onsubmit) return
    if(itemTimeOut.current) {
      clearTimeout(itemTimeOut.current)
    }

    itemTimeOut.current = setTimeout(() => {
      const formValue = {
        searchItem: value
      }
      onsubmit(formValue)
    }, 500)
  }

  return (
    <form
    typeof='text'
    value={searchItem}
    onChange={handleSearchChage}
    >

    </form>
  );
}

export default SearchPage;
