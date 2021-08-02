import {
  RequestParams,
  ResponseResult,
  FieldDescriptor as UnsureTypeField,
  FilterDescriptor as UnsureTypeFilter,
  ViewFieldDescriptor as UnsureTypeViewField,
} from 'organik';

// Model fields

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

type RequestFunction = (params: RequestParams) => Promise<ResponseResult>;

interface DynamicRelationField extends UnknownField {
  dataType: RelationFieldType;
  dynamic: true;
  referenceValueGetter: RequestFunction;
  relatedListGetter: RequestFunction;
  relatedPrimaryKey: string;
  relatedLabelKey?: string;
}

type RelationField = StaticRelationField | DynamicRelationField;

type FieldDescriptor = UnknownField | NumberField | StringField | EnumField | RelationField;

// Filters

interface UnknownFilter extends UnsureTypeFilter {
  dynamic?: boolean;
}

type Filterize<T extends UnknownField = UnknownField> = Omit<T, 'readonly'>;

type NumberFilter = UnknownFilter & Filterize<NumberField>;

type StringFilter = UnknownFilter & Filterize<StringField>;

type EnumFilter = UnknownFilter & Filterize<EnumField>;

type StaticRelationFilter = UnknownFilter & Filterize<StaticRelationField>;

type DynamicRelationFilter = UnknownFilter & Filterize<DynamicRelationField>;

type RelationFilter = StaticRelationFilter | DynamicRelationFilter;

type FilterDescriptor = UnknownFilter | NumberFilter | StringFilter | EnumFilter | RelationFilter;

// View fields

interface UnknownViewField extends UnsureTypeViewField {
  dynamic?: boolean;
}

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

export {
  EnumFieldOption,
  EnumField,
  DynamicRelationField,
  FieldDescriptor,
  FilterDescriptor,
  ViewFieldDescriptor,
};
