import { PaginationSize } from './aliases';

interface IPaginationComponent {
  readonly total: number;
  readonly page: number;
  readonly pageSize: number;
  readonly pageSizeOption: number[];
  readonly size: PaginationSize;
  readonly disabled: boolean;
}

export { IPaginationComponent };
