import Zombie from 'zombie'
import Simulado from 'simulado'

class World {
  constructor(done) {
    this.browser = new Zombie();
    this.simulado = Simulado;
    this.baseUrl = "http://localhost:8080";
  }
}

module.exports = function() {
  this.World = World;
};
