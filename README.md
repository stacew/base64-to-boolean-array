# base64-to-boolean-array

[![NPM](https://img.shields.io/npm/v/name____.svg)](https://www.npmjs.com/package/name____) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save base64-to-boolean-array
```

## Usage

```ts
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
