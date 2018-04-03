var Park = function () {
  this.enclosure = [];
}



Park.prototype.addDino = function (dino) {
  this.enclosure.push(dino)
}

Park.prototype.removeDino = function (dino) {
  var index = this.enclosure.indexOf(dino);
  if (index !== -1) {
      this.enclosure.splice(index, 1);
  }
}

Park.prototype.removeDinosByType = function (dinoType) {
  for (var i = this.enclosure.length - 1; i >= 0; --i) {
      if (this.enclosure[i].type === dinoType) {
          this.enclosure.splice(i,1);
      }
  }
}

Park.prototype.removeDinosByOffspring = function (n) {
  for (var i = this.enclosure.length - 1; i >= 0; --i) {
      if (this.enclosure[i].offspring > n) {
          this.enclosure.splice(i,1);
      }
  }
}


Park.prototype.calculatePop = function (years) {

  const growthRate = (this.enclosure[0]).offspring;
  const pO = this.enclosure.length;
  let pN = 0;

  const dinoToAdd = this.enclosure[0];

  for (let i = 0; i <= years; i++) {
    if (i === 0) {
      pN += pO * growthRate;
    }else{
      pN += pN * growthRate;
    }
  }

  for (let i = 1; i < (pN/2); i++) {
    this.addDino(dinoToAdd); //  Whit ye daein JavaScript?
  }
}






module.exports = Park;
