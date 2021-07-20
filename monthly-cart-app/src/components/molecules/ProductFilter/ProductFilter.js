import React from "react";
import { FilterContainer, Filters } from "./ProductFilter.style";
import Select from "./../../atoms/Select/Select";

const ProductFilter = (props) => {
  const { filterProducts } = props;
  return (
    <FilterContainer>
      <Filters>
        <Select
          handleChange={filterProducts}
          options={[
            "Sort By:",
            "Sort By: Price:High to Low",
            "Sort By: Price:Low to High",
            "Sort By: Customer Rating",
          ]}
        >
          {/* <option></option>
          <option></option>
          <option></option>
          <option></option> */}
        </Select>
      </Filters>
    </FilterContainer>
  );
};

export default ProductFilter;
