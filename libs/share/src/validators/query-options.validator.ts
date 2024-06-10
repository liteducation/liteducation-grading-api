export class QueryOptions {
  filter?: any = {};
  sort?: any = null;
  select?: any = null;

  limit?: number = null;
  offset?: number = null;

  cursor?: boolean = false;

  cache_time?: number = null;
  cache_key?: string = null;

  // for pagination
  // limit? :number = 24
  page?: number = 1;
}
