class hashMap {
  constructor() {
    this.buckets = [];
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }
  hashModulo(hashCode) {
    while (hashCode > 16) {
      hashCode = hashCode % 16;
    }
    return hashCode;
  }

  set(key, value) {
    let hashCode = this.hash(key);
    let hashModulo = this.hashModulo(hashCode);
    this.buckets[hashModulo] = { key, value };
    console.log(hashModulo);
  }
  get(key) {
    let hashCode = this.hash(key);
    let hashModulo = this.hashModulo(hashCode);
    if (this.buckets[hashModulo].key == key) {
      console.log(`Key : ${key} , value : ${this.buckets[hashModulo].value}`);
    } else {
      console.log("Key and value doesn't exist");
    }
  }
  has(key) {
    let hashCode = this.hash(key);
    let hashModulo = this.hashModulo(hashCode);
    if (this.buckets[hashModulo] == undefined) {
      return false;
    } else {
      return true;
    }
  }
  remove(key) {
    let hasKey = this.has(key);
    let hashCode = this.hash(key);
    let hashModulo = this.hashModulo(hashCode);
    if (hasKey) {
      this.buckets[hashModulo] = undefined;
      return true;
    } else {
      return false;
    }
  }
  length() {
    let length = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] == undefined) {
        continue;
      } else {
        length++;
      }
    }
    return length;
  }
  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = undefined;
    }
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        keys.push(this.buckets[i].key);
      }
    }
    return keys;
  }
  values() {
    let values = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        values.push(this.buckets[i].value);
      }
    }
    return values;
  }
  entries() {
    let entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        entries.push([this.buckets[i].key, this.buckets[i].value]);
      }
    }
    return entries;
  }
}

const test = new hashMap();
test.set("Anikesh", "96");
test.set("Ayush", "84");
test.set("Harsh", "34");
test.set("Lakshya", "73");
test.get("Anikesh");
console.log(test.has("Lakshya"));
console.log(test.remove("Lakshya"));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.buckets);
