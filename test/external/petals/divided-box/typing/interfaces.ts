import { LooseSize, AdjustmentType, DirectionType, ResizeType } from '@petals/basic';

interface IFlexBoxComponent {
  center: ResizeType;
}

interface IDividedBoxComponent extends IFlexBoxComponent {
  adjust: AdjustmentType;
  direction: DirectionType;
}

interface IBoxContentComponent extends IFlexBoxComponent {
  width: LooseSize;
  height: LooseSize;
}

export { IFlexBoxComponent, IDividedBoxComponent, IBoxContentComponent };
