type GridCellAreaOption = {
  span?: number;
  offset?: number;
  // TODO:
  // pull?: number;
  // push?: number;
};

type GridBreakpointOption = number | GridCellAreaOption;

export { GridCellAreaOption, GridBreakpointOption };
