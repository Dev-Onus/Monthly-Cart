import React from "react";
import { FilterContainer, Filters } from "./ProductFilter.style";

import Text from "../../atoms/Text/Text";
import CheckBox from "../../atoms/CheckBox/CheckBox";

const ProductSidebar = () => {
  return (
    <FilterContainer>
      <Filters>
        <div>
          <Text text="Discount Range" />
          <div>
            <CheckBox />
            10% and above
          </div>
          <div>
            <CheckBox />
            20% and above
          </div>
          <div>
            <CheckBox />
            30% and above
          </div>
        </div>
        <div>
          <Text text="Price" />
          <div>
            <CheckBox />
            High to Low
          </div>
          <div>
            <CheckBox />
            Low to High
          </div>
        </div>
        <div>
          <Text text=" Customer Rating" />
          <div>
            <CheckBox />3 Star
          </div>
          <div>
            <CheckBox />4 Star
          </div>
          <div>
            <CheckBox />5 Star
          </div>
        </div>
      </Filters>
    </FilterContainer>
  );
};

export default ProductSidebar;
