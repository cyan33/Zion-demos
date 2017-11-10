/**
 * How to use:
 * const kb = new KeyBus();
 * 
 * kb.on(38, function() {
 *  do something
 * })
 */

class KeyBus {
  constructor() {
    this.enableMultiKey = false;
  }

  enableMultiKey() {
    this.enableMultiKey = true;
    this.keyhash = {};    
  }

  disableMultiKey() {
    this.enableMultiKey = false;
    this.keyhash = null;
  }

  getKeyhash() {
    return this.enableMultiKey ? this.keyhash : null;
  }

  on(keyCode, cb) {
    if (this.enableMultiKey) {
      throw Error('multikey handlers should not use the "on" method of KeyBus');
      return;
    }
    document.addEventListener('keydown', (e) => {
      e.preventDefault();

      if (e.keyCode === keyCode) {
        cb.call(cb);
      }
    })
  }
} export default KeyBus;
