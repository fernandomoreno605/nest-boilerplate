import { Query } from './Query';
import { Response } from './Response';

export interface QueryHandler<
  ExpectedQuery extends Query,
  DesiredResponse extends Maybe<Response>,
> {
  subscribeTo(): Query;
  handle(query: ExpectedQuery): Promise<DesiredResponse>;
}
