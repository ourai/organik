import { DirectionType, LooseSize } from '../../basic';

interface ITileComponent {
  direction: DirectionType; // 排列方向
  width: LooseSize; // 每个单元格的宽度
  height: LooseSize; // 每个单元格的高度
}

interface ITileCellComponent {
  width: number;
  height: number;
}

export { ITileComponent, ITileCellComponent };
