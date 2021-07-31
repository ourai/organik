import { DataValue } from './value';
import { Result } from './feedback';

type RequestParams = DataValue;

type Pagination = {
  pageNum: number;
  pageSize: number;
};

type ResponseExtra = Pagination & {
  total: number;
  [key: string]: any;
};

interface ResponseResult<VT extends DataValue = DataValue> extends Required<Result> {
  code: string;
  data: VT;
  extra: ResponseExtra;
}

type ResponseSuccess<T = any> = (data: T, extra: ResponseExtra, result: ResponseResult<T>) => any;
type ResponseFail<T = any> = (message: string, result: ResponseResult<T>) => any;

export { RequestParams, Pagination, ResponseExtra, ResponseResult, ResponseSuccess, ResponseFail };
