// @ts-nocheck

import React, { useRef, useState } from "react";
import { Button } from "@strapi/design-system/Button";
import { Box } from "@strapi/design-system/Box";
import { Filter } from "@strapi/icons";
import {
  FilterListURLQuery,
  FilterPopoverURLQuery,
} from "@strapi/helper-plugin";
import { getMessage } from "../../utils";

const TableFilters = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef();

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <Box paddingTop={1} paddingBottom={1}>
        <Button
          variant="tertiary"
          ref={buttonRef}
          startIcon={<Filter />}
          onClick={handleToggle}
          size="S"
        >
          {getMessage("page.discover.table.filters")}
        </Button>
        {isVisible && (
          <FilterPopoverURLQuery
            displayedFilters={displayedFilters}
            isVisible={isVisible}
            onToggle={handleToggle}
            source={buttonRef}
          />
        )}
      </Box>
      <FilterListURLQuery filtersSchema={displayedFilters} />
    </>
  );
};

export default TableFilters;
