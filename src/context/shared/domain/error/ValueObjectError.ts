import { ExceptionCategory } from '../../../../utils/constants/ExceptionCategory';
import { CustomExceptionAbstractFactory } from '../../../../utils/exception/CustomExceptionAbstractFactory';

export default class ValueObjectError extends CustomExceptionAbstractFactory {
  protected category: ExceptionCategory = ExceptionCategory.INFRASTRUCTURE;
  readonly name = 'ValueObjectError';
}
