describe('Airport', function() {

  var airport_1;

  describe('can store planes', function() {

    it('it uses an empty array', function() {
      airport_1 = new Airport();
      expect(airport_1).toEqual([]);
    });
  });
});
