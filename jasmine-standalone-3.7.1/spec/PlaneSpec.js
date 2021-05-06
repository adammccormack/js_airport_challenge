'use strict';

describe('Plane', () => {
  let plane;
  let airport;
  beforeEach(() => {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['permissionToLand']);
  });
  it('can land at an airport', () => {
    plane.land(airport);
    expect(airport.permissionToLand).toHaveBeenCalledWith(plane);
  });
});
