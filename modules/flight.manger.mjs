import { Flight } from "./flight.mjs";
class FlightsManager {
  counter = 0;
  uniqueDestinations = [];
  get counter() {
    return this.counter;
  }
  set counter(v) {
    throw new Error("#counter is read only...");
  }
  get uniqueDestinations() {
    return this.uniqueDestinations;
  }
  set uniqueDestinations(v) {
    throw new Error("#uniqueDestinations is read only...");
  }
  createFlight(data) {
    const flight = new Flight(data);
    this.counter++;
    if (!this.uniqueDestinations.includes(flight.destination)) {
      this.uniqueDestinations.push(flight.destination);
    }

    return flight;
  }
}
export default FlightsManager;
