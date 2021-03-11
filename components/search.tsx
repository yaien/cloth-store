const Search = (props: React.HTMLProps<HTMLInputElement>) => (
  <div className="search-section">
    <div className="search-field">
      <input {...props} placeholder="Buscar" />
      <i className="material-icons">search</i>
    </div>
    <style jsx>{`
      .search-section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        width: 200px;
        margin: 0 0.5rem;
      }

      .search-field {
        border: 1px solid #ddd;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.25rem;
        background: white;
        width: 100%;
      }

      i {
        color: #e1e1e1;
      }

      input {
        border: none;
        display: inline;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-size: 1rem;
        font-weight: 600;
        color: #b1b1b1;
        width: 100%;
        padding: 10px;
      }

      input:active,
      input:focus {
        outline: none;
      }
    `}</style>
  </div>
);

export default Search;
