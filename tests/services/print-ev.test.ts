import { assertEquals } from '@std/assert';
import { describe, it } from '@std/testing/bdd';

import { printExpectedValue } from '@/services/print-ev.ts';
import { ExpectedValueOutput } from '@/types/ev-output.ts';

describe('printExpectedValue', () => {
  it('should format positive expected value correctly', () => {
    let printedMessage = '';
    const mockPrinter = (message: string) => {
      printedMessage = message;
    };

    const result: ExpectedValueOutput = {
      stake: 100,
      expectedValue: 25,
    };

    printExpectedValue(result, mockPrinter);
    assertEquals(
      printedMessage,
      'For every bet of $100, you can expect to make $25 on average',
    );
  });

  it('should format negative expected value correctly', () => {
    let printedMessage = '';
    const mockPrinter = (message: string) => {
      printedMessage = message;
    };

    const result: ExpectedValueOutput = {
      stake: 50,
      expectedValue: -15,
    };

    printExpectedValue(result, mockPrinter);
    assertEquals(
      printedMessage,
      'For every bet of $50, you can expect to lose -$15 on average',
    );
  });
});
