# ⏳ Scheduled Sequence

[![GitHub forks](https://img.shields.io/github/forks/EthanThatOneKid/scheduled-sequence.svg?style=social&label=Fork)](https://github.com/EthanThatOneKid/scheduled-sequence/fork)
[![GitHub stars](https://img.shields.io/github/forks/EthanThatOneKid/scheduled-sequence.svg?style=social&label=Star)][github]
[![bundle size](https://img.shields.io/bundlephobia/min/scheduled-sequence.svg)][npmpkg]
[![npm downloads](https://img.shields.io/npm/dt/scheduled-sequence.svg)][npmpkg]

> Mini package for creating scheduled sequences

## ⬇ Installation
`npm i scheduled-sequence`

## 🛠 Usage
> CommonJS:

`const { ScheduledSequence } = require('scheduled-sequence');`

> ES6:

`import { ScheduledSequence } from 'scheduled-sequence';`

> 💡 Pro-tip: Utilize the [test file](test.js) as an example

## 📃 Documentation

### `ScheduledSequence(sequence?: Array<{ details: any, timeout: number }>)`
This function returns a ScheduledSequence object. This function takes a single argument `sequence` which represents an array of objects of objects with properties `details` (any type) and `timeout` which is the time in milliseconds that will be spent before distributing the details. `sequence` defaults to an empty array.

### `ScheduledSequence.inject(details?: any, timeout?: number, index?: number)`
The `inject` member function takes arguments `details` (defaults to an empty object), `timeout` (defaults to `0`), and `index` which represents the index that the details will be injected into the sequence (defaults to the end of the sequence).

### `ScheduledSequence.remove(index?: number)`
The `remove` member function removes a detail from the sequence at a given `index` (defaults to the last detail in the sequence).

### `ScheduledSequence.distribute()`
This function returns an asynchronous iterator that when interpolated, returns the details of the sequence object at the determined timeouts.
Example:
```js
for await (const details of sequence.distribute()) {
  console.log({ details });
}
```

---

Engineered with 💖 by [@EthanThatOneKid](https://github.com/EthanThatOneKid)

[npmpkg]: https://www.npmjs.com/package/scheduled-sequence
[github]: https://github.com/EthanThatOneKid/scheduled-sequence