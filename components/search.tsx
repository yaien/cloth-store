const Search = (props: React.HTMLProps<HTMLInputElement>) => (
  <div className="search-section">
    <div className="search-field">
      <input type="search" {...props} placeholder="Buscar" />
      <i className="material-icons">search</i>
    </div>
    <style jsx>{`
      .search-section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        width: 100%;
      }

      .search-field {
        border: 1px solid #e3e3e3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.25rem;
        background: white;
        width: 80%;
        box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.125),
          0px 1px 2px rgba(0, 0, 0, 0.225);
      }

      i {
        color: #e1e1e1;
      }

      input {
        border: none;
        display: inline;
        appearance: none;
        font-size: 1rem;
        font-weight: 600;
        color: #b1b1b1;
        width: 90%;
        padding: 10px;
      }
    `}</style>
  </div>
);

export default Search;
