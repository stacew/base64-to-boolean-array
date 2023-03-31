# base64-to-boolean-array

#### Function that exchanges a base64 formatted string for a boolean array.

[![NPM](https://img.shields.io/npm/v/name____.svg)](https://www.npmjs.com/package/name____) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save base64-to-boolean-array
```

## Usage

```ts
import {
  base64ToBooleanArray,
  booleanArrayToBase64,
} from "base64-to-boolean-array";

const originBooleanArray = [true, false, true, false];
const base64Format = booleanArrayToBase64(originBooleanArray);
const newBooleanArray = base64ToBooleanArray(
  base64Format,
  originBooleanArray.length
);

expect(originBooleanArray !== newBooleanArray).toEqual(true);

expect(originBooleanArray.every((v, i) => v === newBooleanArray[i])).toEqual(
  true
);
```

## License

MIT © [stacew](https://github.com/stacew)
