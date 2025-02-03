# Signals

```ts
import { computed, signal } from '@angular/core';

// state/writable signal
const counter = signal(0);

// computed signal
const isEven = computed(() => (counter() & 1) == 0);

counter() // 0
isEven() // true

counter.set(1)

counter() // 1
isEven() // false
```
