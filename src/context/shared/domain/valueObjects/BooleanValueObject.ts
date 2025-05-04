import ValueObjectError from '../error/ValueObjectError';
import ValueObject from './ValueObject';

export default abstract class BooleanValueObject
  extends Boolean
  implements ValueObject<boolean>
{
  constructor(value: boolean) {
    super(value);
  }

  ensureValidValue(value: boolean): void {
    if (typeof value !== 'boolean') {
      throw new ValueObjectError({
        code: 'cd3d8697-f6db-4335-a7f4-9b573bfb2702',
        message: 'Invalid number value',
      });
    }
  }
}
