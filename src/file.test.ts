import {getNano} from './file'

test('nanoid', () => {
  expect(getNano()).toBeTruthy()
})
