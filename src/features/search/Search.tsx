import React, { useState } from "react";
import { Input } from "antd";

type Props = {
  loading: boolean;
  searchFilms: (value: string) => void;
};

export const Search = ({ loading, searchFilms }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Input.Search
      style={{ marginTop: "64px" }}
      placeholder="Enter a film title..."
      value={searchValue}
      enterButton
      loading={loading}
      size="large"
      onSearch={() => searchFilms(searchValue)}
      onChange={handleSearchInputChanges}
    />
  );
};
