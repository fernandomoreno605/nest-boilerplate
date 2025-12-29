import Exception from '../../../utils/exception/Exception';

export default {
  UNDEFINED_VALUE_OBJECT: {
    code: '6b134142-109d-4278-b9f4-d6751cfac7c2',
    message: 'Undefined Value Object',
  },
  INVALID_VALUE: {
    code: '4a78d485-780a-457a-949a-845538f356ee',
    message: 'Value must be valid',
  },
  EMPTY_VALUE: {
    code: '63e5b8b7-90e6-4128-adbc-82c215c15db1',
    message: 'Not allowed to be empty',
  },
  INVALID_UUID: {
    code: '1b4ee317-c0a3-44b2-a6c4-a174bd4857a3',
    message: 'Invalid UUID',
  },
  COMMAND_NOT_REGISTERED: {
    code: '5f0c1623-7653-44aa-bdc6-98d41b4a9ed0',
    message: 'Command not registered',
  },
  QUERY_NOT_REGISTERED: {
    code: 'a240f3cc-e7cc-4b52-8cf8-93f6db5774a2',
    message: 'Query not registered',
  },
} satisfies Record<string, Exception>;
