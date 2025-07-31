export const SearchBar = ({ searchWord, filterPets }) => {
  return (
    <input
      type="text"
      placeholder="search pet name"
      value={searchWord}
      onChange={filterPets}
    />
  );
};
