var assert = require('assert');
var Dino = require('../dino.js');
var Park = require('../park.js');

describe('Park', function(){

  beforeEach(function () {
    emptyPark = new Park();
    fullPark = new Park();
    dino1 = new Dino('Tyrannosaurus', 1);
    dino2 = new Dino('Velociraptor', 3);
    dino3 = new Dino('Triceratops', 2);
    fullPark.addDino(dino1);
    fullPark.addDino(dino2);
    fullPark.addDino(dino2);
    fullPark.addDino(dino2);
    fullPark.addDino(dino3);

  });



  it('enclosure should start empty', function(){
    assert.strictEqual(emptyPark.enclosure.length, 0);
  })

  it('should be able to add dino', function(){
    emptyPark.addDino(dino1);
    assert.strictEqual(emptyPark.enclosure.length, 1);
  })

  it('should be able to remove dino', function(){
    fullPark.removeDino(dino2);
    assert.deepStrictEqual(fullPark.enclosure, [dino1, dino2, dino2, dino3]);
  })

  it('should be able to remove dinos by type', function(){
    fullPark.removeDinosByType('Velociraptor');
    assert.deepStrictEqual(fullPark.enclosure, [dino1, dino3]);
  })

  it('should get all dinosaurs with offspring count more than 2', function(){
    fullPark.removeDinosByOffspring(2);
    assert.deepStrictEqual(fullPark.enclosure, [dino1, dino3]);
  })

  it('should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur', function(){
    emptyPark.addDino(dino3);
    emptyPark.calculatePop(1)
    assert.strictEqual(emptyPark.enclosure.length, 3);
  })


  it('should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur', function(){
    emptyPark.addDino(dino3);
    emptyPark.calculatePop(2)
    assert.strictEqual(emptyPark.enclosure.length, 9);
  })


  it('should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs', function(){
    emptyPark.addDino(dino3);
    emptyPark.addDino(dino3);
    emptyPark.calculatePop(2)
    assert.strictEqual(emptyPark.enclosure.length, 18);
  })


})
