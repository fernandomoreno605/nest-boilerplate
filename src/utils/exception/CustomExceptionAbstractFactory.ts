import { HttpException, HttpStatus } from '@nestjs/common';
import CustomException from './CustomException';
import Exception from './Exception';
import { ResponseException } from './ResponseException';
import { ExceptionCategory } from '../constants/ExceptionCategory';
import { NODE_ENV } from '../../context/shared/infrastructure/configuration/EnvironmentAccesor';

export abstract class CustomExceptionAbstractFactory
  extends HttpException
  implements CustomException
{
  readonly exceptions: Exception[] = [];
  protected abstract readonly category: ExceptionCategory;
  abstract readonly name: string;

  constructor(
    exceptions: Exception | Exception[],
    httpStatus: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
  ) {
    super('', httpStatus);
    this.exceptions = Array.isArray(exceptions) ? exceptions : [exceptions];
  }
  private formatStackTrace(): string {
    const stackLines = this.stack?.split('\n');
    if (stackLines && stackLines.length > 0) {
      return stackLines
        .filter((line: string) => !line.includes('node_modules'))
        .join('\n');
    }
    return this.stack ?? '';
  }

  format(): ResponseException {
    const Exceptions = this.exceptions.map((exception) => ({
      code: exception.code,
      type: this.name,
      category: this.category,
      description: exception.message,
    }));

    return {
      Exceptions,
      stack: NODE_ENV === 'development' ? this.formatStackTrace() : undefined,
    };
  }

  toString(): string {
    return `${this.name}: ${this.message}\n${this.formatStackTrace()}`;
  }

  getResponse(): ResponseException {
    return this.format();
  }
}
