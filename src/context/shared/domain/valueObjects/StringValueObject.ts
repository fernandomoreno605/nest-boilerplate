import ValueObjectError from '../error/ValueObjectError';
import ValueObject from './ValueObject';

export default abstract class StringValueObject
  extends String
  implements ValueObject<string>
{
  constructor(value: string) {
    super(value);
    this.ensureValidValue(value);
  }

  ensureValidValue(value: string): void {
    if (!value || typeof value !== 'string' || value.trim() === '') {
      throw new ValueObjectError({
        code: '3f8c9b8e-4d2a-4b6b-9e2f-1a3d5c8e7f9a',
        message: 'Invalid string value',
      });
    }
  }
}
