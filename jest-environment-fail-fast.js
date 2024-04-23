const { TestEnvironment: NodeEnvironment } = require('jest-environment-node');

class JestEnvironmentFailFast extends NodeEnvironment {
  failedTest = false;

  async handleTestEvent(event, state) {
    if (event.name === 'hook_failure' || event.name === 'test_fn_failure') {
      this.failedTest = true;
    } else if (this.failedTest && event.name === 'test_start') {
      event.test.mode = 'skip';
    }

    await super.handleTestEvent?.(event, state);
  }
}

module.exports = JestEnvironmentFailFast;
