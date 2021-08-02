import {
  RequestParams,
  ResponseResult,
  FieldDescriptor as UnsureTypeField,
  ViewFieldDescriptor as UnsureTypeViewField,
} from 'organik';

interface UnknownField extends UnsureTypeField {
  dynamic?: boolean;
}

interface NumberField extends UnknownField {
  dataType: 'int' | 'float';
  max?: number;
  min?: number;
}

interface StringField extends UnknownField {
  dataType: 'string' | 'text';
  max?: number;
  min?: number;
  pattern?: RegExp;
}

interface EnumFieldOption {
  name: string;
  label: string;
  value: number | string;
}

interface EnumField extends UnknownField {
  dataType: 'enum';
  options: EnumFieldOption[];
}

type RelationFieldType = 'o2o' | 'o2m' | 'm2m' | 'm2o';

interface StaticRelationField extends UnknownField {
  dataType: RelationFieldType;
  dynamic: false;
}

interface DynamicRelationField extends UnknownField {
  dataType: RelationFieldType;
  dynamic: true;
  referenceValueGetter: (params: RequestParams) => Promise<ResponseResult>;
  relatedListGetter: (params: RequestParams) => Promise<ResponseResult>;
  relatedPrimaryKey: string;
  relatedLabelKey?: string;
}

interface UnknownViewField extends UnsureTypeViewField {
  dynamic?: boolean;
}

type RelationField = StaticRelationField | DynamicRelationField;

type FieldDescriptor = UnknownField | NumberField | StringField | EnumField | RelationField;

type NumberViewField = UnknownViewField & NumberField;

type StringViewField = UnknownViewField & StringField;

type EnumViewField = UnknownViewField & EnumField;

type StaticRelationViewField = UnknownViewField & StaticRelationField;

type DynamicRelationViewFIeld = UnknownViewField & DynamicRelationField;

type RelationViewField = StaticRelationViewField | DynamicRelationViewFIeld;

type ViewFieldDescriptor =
  | UnknownViewField
  | NumberViewField
  | StringViewField
  | EnumViewField
  | RelationViewField;

export { EnumFieldOption, EnumField, DynamicRelationField, FieldDescriptor, ViewFieldDescriptor };
