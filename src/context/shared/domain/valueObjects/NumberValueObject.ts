import ValueObjectError from '../error/ValueObjectError';
import ValueObject from './ValueObject';

export default abstract class NumberValueObject
  extends Number
  implements ValueObject<number>
{
  constructor(value: number) {
    super(value);
    this.ensureValidValue(value);
  }

  ensureValidValue(value: number): void {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new ValueObjectError({
        code: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
        message: 'Invalid number value',
      });
    }
  }
}
