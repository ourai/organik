type VerticalPlacement = 'top' | 'bottom';
type VerticalCornerPlacement = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
type ComplexVerticalPlacement = VerticalPlacement | VerticalCornerPlacement;

type HorizontalPlacement = 'right' | 'left';
type HorizontalCornerPlacement = 'right-top' | 'right-bottom' | 'left-bottom' | 'left-top';
type ComplexHorizontalPlacement = HorizontalPlacement | HorizontalCornerPlacement;

type PlacementType = VerticalPlacement | HorizontalPlacement;
type CornerPlacement = VerticalCornerPlacement | HorizontalCornerPlacement;
type ComplexPlacement = PlacementType | CornerPlacement;

export {
  VerticalCornerPlacement,
  ComplexVerticalPlacement,
  HorizontalCornerPlacement,
  ComplexHorizontalPlacement,
  PlacementType,
  ComplexPlacement,
};
