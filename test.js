// Dependencies
const { ScheduledSequence } = require('./main');

// Constants
const SEQUENCE_TEST_DATA = [
  { details: 0, timeout: 0 },
  { details: 1, timeout: 5e3 },
  { details: 2, timeout: 5e2 }
];

const INJECTION_TEST_ARGS = [
  [4, 1e3],
  [3, 3e3, 3],
  [4, 4e2]
];

const REMOVE_TEST_ARGS = [4];

// Helpers
const now = () => +new Date;

// Main Process
(async () => {

  const sequence = ScheduledSequence(SEQUENCE_TEST_DATA);
  INJECTION_TEST_ARGS.forEach(args => sequence.inject(...args));
  REMOVE_TEST_ARGS.forEach(arg => sequence.remove(arg));
  const initialTimestamp = now();
  for await (const details of sequence.distribute()) {
    const elapsed = now() - initialTimestamp;
    console.log({ details, elapsed });
  }
  console.log("DONE");

})();