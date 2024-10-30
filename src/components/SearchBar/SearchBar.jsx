import { useState } from 'react';
import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      toast.error('Enter a search term!');
      return;
    }
    onSubmit(value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          autoComplete="off"
          type="text"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button className={css.searchBtn} type="submit">
          <FaSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
