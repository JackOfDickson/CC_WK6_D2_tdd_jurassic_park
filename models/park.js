const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
};

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaurToBeRemoved) {
    for (var i = 0; i < this.dinosaurs.length; i++ ) {
        if (this.dinosaurs[i] == dinosaurToBeRemoved) {
            this.dinosaurs.splice(i, 1);
            break
        }}
}

Park.prototype.mostPopularDino = function () {
    let mostPopular;
    for (var i = 0; i < this.dinosaurs.length; i++ ) {
        if (mostPopular == undefined || this.dinosaurs[i].guestsAttractedPerDay > mostPopular.guestsAttractedPerDay)  {
        mostPopular = this.dinosaurs[i]}
    }
    return mostPopular
}

Park.prototype.returnSpecies = function (species) {
    let returnedSpecies = []
    for (var i = 0; i < this.dinosaurs.length; i++ ) {
        if (this.dinosaurs[i].species == species) {
            returnedSpecies.push(this.dinosaurs[i])
        }
    }
    return returnedSpecies
}

Park.prototype.totalVisitorsDaily = function () {
    let totalVistors = 0;
    for (var i = 0; i < this.dinosaurs.length; i++ ) {
        totalVistors += this.dinosaurs[i].guestsAttractedPerDay;
    }
    return totalVistors
}

Park.prototype.totalVisitorsAnnually = function () {
    return (this.totalVisitorsDaily() * 365)
}

Park.prototype.annualRevenue = function() {
    return (this.totalVisitorsAnnually() * this.ticketPrice)
}
// extension

Park.prototype.removeSpecies = function(species) {
    speciesToRemove = this.returnSpecies(species);
    
    for (var i = 0; i < speciesToRemove.length; i++ ) {
        for (var x = 0; x < this.dinosaurs.length; x++ ) {
            if (speciesToRemove[i].species == this.dinosaurs[x].species)
            this.dinosaurs.splice[x, 1]
        }
    }
}

module.exports = Park;