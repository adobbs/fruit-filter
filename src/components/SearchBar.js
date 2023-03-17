function SearchBar() {
    // TODO: Monitor search string and apply state to filter product table

    // TODO: Monitor filter control and apply state to filter product table

    return (
        <form>
          <input type="text" placeholder="Search..." />
          <label>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </label>
        </form>
    );
}

export default SearchBar;
