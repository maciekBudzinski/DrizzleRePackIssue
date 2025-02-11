// It crashes the app:
import { pgTable, boolean } from 'drizzle-orm/pg-core';
// It would work:
// import { pgTable, boolean as dBoolean } from 'drizzle-orm/pg-core';


export const ExampleTable = pgTable(
  'example_table',
  {
    // It crashes the app:
    isCollectable: boolean('is_collectable').notNull().default(true),
    // It would work
    //isCollectable: dBoolean('is_collectable').notNull().default(true),
  }
);
