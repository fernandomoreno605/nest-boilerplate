import { ExceptionCategory } from '../../../../utils/constants/ExceptionCategory';
import { CustomExceptionAbstractFactory } from '../../../../utils/exception/CustomExceptionAbstractFactory';

export default class InfrastructureError extends CustomExceptionAbstractFactory {
  protected category: ExceptionCategory = ExceptionCategory.INFRASTRUCTURE;
  readonly name = 'InfrastructureError';
}
