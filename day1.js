class StringBuilder {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }
  getValue() {
    return this.initialValue;
  }
  padEnd(str) {
    console.log("str", str);
    return (this.initialValue += str);
  }
  padStart(str) {
    console.log("str2", str);
    return (this.initialValue = str + this.initialValue);
  }
  padBoth(str) {
    console.log("str3", str);
    return (this.initialValue = str + this.initialValue + str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
