import { ExceptionCategory } from '../../../../utils/constants/ExceptionCategory';
import { CustomExceptionAbstractFactory } from '../../../../utils/exception/CustomExceptionAbstractFactory';

export default class ApplicationError extends CustomExceptionAbstractFactory {
  protected category: ExceptionCategory = ExceptionCategory.APPLICATION;
  readonly name = 'ApplicationError';
}
