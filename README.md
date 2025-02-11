This is a reproduction of an issue with drizzle-orm library with default re.pack configuration.

The issue is ` ReferenceError: Property 'boolean' doesn't exist` because the following code:

```typescript
import { pgTable, boolean } from 'drizzle-orm/pg-core';

export const ExampleTable = pgTable(
  'example_table',
  {
    isCollectable: boolean('is_collectable').notNull().default(true),
  }
);
```

bundles to:
```javascript
var ExampleTable = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)('example_table', {
    // It crashes the app:
    isCollectable: boolean('is_collectable').notNull()["default"](true)
});
```

As you can see the `boolean` function is not imported correctly in bundled code.
