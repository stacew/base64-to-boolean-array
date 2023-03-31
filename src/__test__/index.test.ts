import { base64ToBooleanArray, booleanArrayToBase64 } from "../index";

describe("base64-to-boolean-array", () => {
  it("test", () => {
    const originBooleanArray = [true, false, true, false];
    const base64Format = booleanArrayToBase64(originBooleanArray);
    const newBooleanArray = base64ToBooleanArray(
      base64Format,
      originBooleanArray.length
    );

    expect(originBooleanArray !== newBooleanArray).toEqual(true);

    expect(
      originBooleanArray.every((v, i) => v === newBooleanArray[i])
    ).toEqual(true);
  });

  function _tester(count: number) {
    const originBooleanArray = Array.from({ length: count }).map(
      (_, i) => i % 2 === 0
    );

    const base64Format = booleanArrayToBase64(originBooleanArray);
    const newBooleanArray = base64ToBooleanArray(
      base64Format,
      originBooleanArray.length
    );
    expect(newBooleanArray).toEqual(originBooleanArray);
  }

  function _testerFalse(count: number) {
    const originTrueArray = Array.from({ length: count }).map((_) => true);

    const base64Format = booleanArrayToBase64(originTrueArray);
    const newBooleanArray = base64ToBooleanArray(
      base64Format,
      originTrueArray.length
    );
    expect(newBooleanArray).toEqual(originTrueArray);
  }

  function _testerTrue(count: number) {
    const originFalseArray = Array.from({ length: count }).map((_) => false);

    const base64Format = booleanArrayToBase64(originFalseArray);
    const newBooleanArray = base64ToBooleanArray(
      base64Format,
      originFalseArray.length
    );
    expect(newBooleanArray).toEqual(originFalseArray);
  }

  it("test count 0", () => {
    _tester(0);
    _testerFalse(0);
    _testerTrue(0);
  });
  it("test count 1", () => {
    _tester(1);
    _testerFalse(1);
    _testerTrue(1);
  });
  it("test count 2", () => {
    _tester(2);
    _testerFalse(2);
    _testerTrue(2);
  });
  it("test count 3", () => {
    _tester(3);
    _testerFalse(3);
    _testerTrue(3);
  });
  it("test count 7", () => {
    _tester(7);
    _testerFalse(7);
    _testerTrue(7);
  });
  it("test count 8", () => {
    _tester(8);
    _testerFalse(8);
    _testerTrue(8);
  });
  it("test count 9", () => {
    _tester(9);
    _testerFalse(9);
    _testerTrue(9);
  });
  it("test count 79", () => {
    _tester(9);
    _testerFalse(9);
    _testerTrue(9);
  });
  it("test count 80", () => {
    _tester(9);
    _testerFalse(9);
    _testerTrue(9);
  });
  it("test count 81", () => {
    _tester(9);
    _testerFalse(9);
    _testerTrue(9);
  });
});
