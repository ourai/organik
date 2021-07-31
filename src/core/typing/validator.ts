import { Result } from './feedback';

interface ValidationResult extends Result {}

type ValueChecker = (value: any) => ValidationResult;

interface Validator {
  addChecker: (checker: ValueChecker) => void;
  validate: ValueChecker;
}

export { ValidationResult, ValueChecker, Validator };
