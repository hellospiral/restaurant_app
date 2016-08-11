export class Restaurant {
  averageRating() {
    var sum = this.points.reduce(add, 0);
    function add(a,b ) { return a + b; }
    return sum / this.points.length;
  }
  constructor(public name: string, public specialty: string, public address: string, public price: string, public id: number, public points: number[]) {
  }
}
