import { Query } from './Query';

export interface QueryBus {
  ask<DesiredResponse extends Response>(query: Query): Promise<DesiredResponse>;
}
