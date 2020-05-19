function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

class ArrayBufferConverter {
  constructor() {
    this.result = '';
  }

  load(buffer) {
    const unit16Arr = new Uint16Array(buffer);
    const regularArray = Array.from(unit16Arr);
    const resultArray = regularArray.map((item) => String.fromCharCode(item.toString()));

    this.result = resultArray.join('');
    return JSON.parse(this.result);
  }
}

export { getBuffer, ArrayBufferConverter };
