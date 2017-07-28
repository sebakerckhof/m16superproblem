import es from 'event-stream';
import fs from 'fs';

import Foo from './Foo';

class Bar extends Foo {
  constructor() {
    super();
  }

  async run() {
    await super.run();
  }
}

export default Bar;