import React from 'react';

const ExpandingSearchBar = () => {
  const handleSubmit = e => {
    e.preventDefault();

    window.alert('Search submitted!');
  };

  return (
    <div class='content'>
      <h3>Expanding Search Bar</h3>
      <div class='search'>
        <input
          type='text'
          class='search__input'
          aria-label='search'
          placeholder='enter your search'
        />
        <button
          class='search__submit'
          aria-label='submit search'
          onClick={handleSubmit}
        >
          <i class='fas fa-search'></i>
        </button>
      </div>
    </div>
  );
};

export default ExpandingSearchBar;
