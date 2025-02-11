import { pgTable, boolean } from 'drizzle-orm/pg-core';


export const ExampleTable = pgTable(
  'example_table',
  {
    isCollectable: boolean('is_collectable').notNull().default(true),
  }
);
