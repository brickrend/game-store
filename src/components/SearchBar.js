import { SearchBarComp } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarComp
      placeholder="Search Games"
      onChange={(e) => props.setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
