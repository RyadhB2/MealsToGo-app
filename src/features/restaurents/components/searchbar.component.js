import React, { useContext, useState,useEffect } from "react";
import styled from "styled-components";

import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const locationContext = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(locationContext.keyword);

  useEffect(()=>{
    locationContext.search(searchKeyword);
  },[]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        value={searchKeyword}
        onSubmitEditing={() => {
          locationContext.search(searchKeyword.trim());
        }}
        onChangeText={(text) =>{setSearchKeyword(text)}}
      />
    </SearchContainer>
  );
};
