import React from 'react';

const ExpandingSearchBar = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // document.getElementById('search-input').blur();
    document.getElementById('search-button').blur();

    console.log('Search submitted!');
  };

  return (
    <div className='content'>
      <h3>Expanding Search Bar</h3>
      <div className='search'>
        <input
          id='search-input'
          type='text'
          className='search__input'
          aria-label='search'
          placeholder='enter your search'
        />
        <button
          id='search-button'
          className='search__submit'
          aria-label='submit search'
          onClick={handleSubmit}
        >
          <i className='fas fa-search'></i>
        </button>
      </div>
    </div>
  );
};

export default ExpandingSearchBar;
