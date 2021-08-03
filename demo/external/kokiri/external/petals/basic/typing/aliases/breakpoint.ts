import { NumberOrString } from './basic';

type GridBreakpointProp = {
  span?: number;
  offset?: number;
  pull?: number;
  push?: number;
};

type GridBreakpointListProp = {
  xs?: GridBreakpointProp;
  sm?: GridBreakpointProp;
  md?: GridBreakpointProp;
  lg?: GridBreakpointProp;
  xl?: GridBreakpointProp;
  xxl?: GridBreakpointProp;
};

type FlexBreakpointListProp = {
  xs?: NumberOrString;
  sm?: NumberOrString;
  md?: NumberOrString;
  lg?: NumberOrString;
  xl?: NumberOrString;
  xxl?: NumberOrString;
};

export { GridBreakpointProp, GridBreakpointListProp, FlexBreakpointListProp };
