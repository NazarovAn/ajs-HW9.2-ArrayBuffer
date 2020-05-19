import { getBuffer, ArrayBufferConverter } from '../ArrayBuffer';

test('Converter test', () => {
  const test = new ArrayBufferConverter();
  expect(test.load(getBuffer())).toEqual({ data: { user: { id: 1, name: 'Hitman', level: 10 } } });
});
