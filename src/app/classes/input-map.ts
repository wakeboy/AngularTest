export class InputMap {

  map = new Map<number, number>();
  // private dictionary = {};
  
  add(key: number) {
    var currentCount = this.map.get(key);
    if(currentCount) {
      this.map.set(key, ++currentCount);
    }
    else {
      this.map.set(key, 1);
    }
  }

  // sort(): Map<number, number> {
  //   var entries = this.map.entries();
    
  //   var newMap = new Map([...this.map.entries()].sort());
  //   return newMap;
  // }
}

export interface Entry {
  key: number;
  count: number;
}
