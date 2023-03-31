import { Buffer } from "buffer";

export function booleanArrayToBase64(booleanArray: boolean[]): string {
  const byteLength = Math.ceil(booleanArray.length / 8);
  const buffer = Buffer.alloc(byteLength);

  for (let i = 0; i < booleanArray.length; i++) {
    if (booleanArray[i]) {
      buffer[Math.floor(i / 8)] |= 1 << i % 8;
    }
  }

  return buffer.toString("base64");
}

export function base64ToBooleanArray(
  base64Format: string,
  count: number
): boolean[] {
  const buffer = Buffer.from(base64Format, "base64");
  const booleanArray: boolean[] = [];

  for (let i = 0; i < buffer.length * 8; i++) {
    booleanArray.push((buffer[Math.floor(i / 8)] & (1 << i % 8)) !== 0);
  }

  return booleanArray.slice(0, count);
}
