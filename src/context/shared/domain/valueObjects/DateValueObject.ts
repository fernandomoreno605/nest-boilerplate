import ValueObjectError from '../error/ValueObjectError';
import ValueObject from './ValueObject';

export default abstract class DateValueObject
  extends Date
  implements ValueObject<Date>
{
  constructor(value: Date) {
    super(value);
    this.ensureValidValue(value);
  }

  ensureValidValue(value: Date): void {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new ValueObjectError({
        code: '69623dcb-e933-4541-94f0-3b67de70fc4f',
        message: 'Invalid Date value',
      });
    }
  }
}
