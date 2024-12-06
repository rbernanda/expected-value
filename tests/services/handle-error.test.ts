import { assertEquals, assertThrows } from '@std/assert';
import { assertSpyCalls, spy } from '@std/testing/mock';
import { describe, it } from '@std/testing/bdd';

import { handleError } from '@/services/handle-error.ts';
import { InvalidArgumentError } from '@/errors.ts';

describe('handleError', () => {
  it('prints message when handling InvalidArgumentError', () => {
    const printError = spy();
    const error = new InvalidArgumentError('test error message');

    handleError(error, printError);

    assertSpyCalls(printError, 1);
    assertEquals(printError.calls[0].args, ['test error message']);
  });

  it('rethrows non-ExpectedValueError errors', () => {
    const printError = spy();
    const error = new Error('unknown error');

    assertThrows(() => handleError(error, printError), Error);
    assertSpyCalls(printError, 0);
  });
});
