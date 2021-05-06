'use strict';

class Airport{
  constructor() {
    this._hangar = []
}

  planes() {
    return this._hangar;
  }


  clearedForLanding(plane) {
    this._hangar.push(plane)
  };
};
