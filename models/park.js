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


module.exports = Park;