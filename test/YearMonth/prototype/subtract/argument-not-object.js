// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.yearmonth.prototype.subtract
features: [Symbol]
---*/

const instance = Temporal.YearMonth.from({ year: 2000, month: 5 });
assert.throws(RangeError, () => instance.subtract(undefined), "undefined");
assert.throws(RangeError, () => instance.subtract(null), "null");
assert.throws(RangeError, () => instance.subtract(true), "boolean");
assert.throws(RangeError, () => instance.subtract(""), "empty string");
assert.throws(TypeError, () => instance.subtract(Symbol()), "Symbol");
assert.throws(RangeError, () => instance.subtract(7), "number");
assert.throws(RangeError, () => instance.subtract(7n), "bigint");
