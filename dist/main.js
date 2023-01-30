(() => {
  "use strict";
  new (class {
    constructor(t) {
      this.type = t;
    }
    printType() {
      console.log(this.type);
    }
  })().printType(),
    console.log(15);
})();
