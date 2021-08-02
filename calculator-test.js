
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 350000,
    years: 30,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual(1571.66);
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 0,
    years: 30,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual(0.00);
});

it("should calculate ridiculously high prices", function() {
  const values = {
    amount: 1000000000,
    years: 30,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual(4490446.88);
});