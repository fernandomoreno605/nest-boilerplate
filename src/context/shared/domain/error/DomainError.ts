import { ExceptionCategory } from '../../../../utils/constants/ExceptionCategory';
import { CustomExceptionAbstractFactory } from '../../../../utils/exception/CustomExceptionAbstractFactory';

export default class DomainError extends CustomExceptionAbstractFactory {
  protected category: ExceptionCategory = ExceptionCategory.DOMAIN;
  readonly name = 'DomainException';
}
