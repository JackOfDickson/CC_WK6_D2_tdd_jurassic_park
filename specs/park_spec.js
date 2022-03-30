const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 3.50);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('liopleurdon', 'carnivore', 100)
    dinosaur3 = new Dinosaur('t-rex', 'carnivore', 30)
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');  
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 3.50)
  });
  

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.mostPopularDino();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.returnSpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3]);
  });

  it('should be able to calculate the total number of visitors per day', function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.totalVisitorsDaily();
    assert.strictEqual(actual, 150);
  });

  it('should be able to calculate the total number of visitors per year', function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.totalVisitorsAnnually();
    assert.strictEqual(actual, 54750);
  });
    

  it('should be able to calculate total revenue for one year', function () {
  park.addDinosaur(dinosaur1);
  park.addDinosaur(dinosaur2);
  const actual = park.annualRevenue();
  assert.strictEqual(actual, 191625)
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
  park.addDinosaur(dinosaur1);
  park.addDinosaur(dinosaur2);
  park.addDinosaur(dinosaur3);
  park.removeSpecies('t-rex');
  const actual = park.dinosaurs
  assert.deepStrictEqual(actual, [dinosaur2])
  })
});
