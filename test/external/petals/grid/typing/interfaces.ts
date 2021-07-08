import { GridCellAreaOption, GridBreakpointOption } from './aliases';

interface IGridRowComponent {
  readonly gutter: number;
}

interface IGridColComponent extends Readonly<Required<GridCellAreaOption>> {
  readonly xs: GridBreakpointOption;
  readonly sm: GridBreakpointOption;
  readonly md: GridBreakpointOption;
  readonly lg: GridBreakpointOption;
  readonly xl: GridBreakpointOption;
}

export { IGridRowComponent, IGridColComponent };
