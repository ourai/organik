import { DataValue } from './value';

type RequestParams = DataValue;

type Pagination = {
  pageNum: number;
  pageSize: number;
};

type ResponseExtra = Pagination & {
  total: number;
  [key: string]: any;
};

type ResponseResult<VT extends DataValue = DataValue> = {
  success: boolean;
  message: string;
  code: string;
  data: VT;
  extra: ResponseExtra;
};

type ResponseSuccess<T = any> = (data: T, extra: ResponseExtra, result: ResponseResult<T>) => any;
type ResponseFail<T = any> = (message: string, result: ResponseResult<T>) => any;

export { RequestParams, Pagination, ResponseExtra, ResponseResult, ResponseSuccess, ResponseFail };
