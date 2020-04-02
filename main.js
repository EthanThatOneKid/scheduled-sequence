const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const ScheduledSequence = (sequence = []) => ({
  sequence,
  inject (
    details = {},
    timeout = 0,
    index = this.sequence.length - 1
  ) {
    this.sequence.splice(index, { details, timeout });
  },
  async *distribute() {
    for (const { details, timeout } of this.sequence) {
      await sleep(timeout);
      yield details;
    }
  }
});

module.exports = { ScheduledSequence };