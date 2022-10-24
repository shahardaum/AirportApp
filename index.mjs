import log from "@ajar/marker";

import FlightsManager from "./modules/flight.manger.mjs";
import alldata from "./modules/flights-data.json" assert { type: "json" };
import { Flight } from "./modules/flight.mjs";
import { FLIGHT_ARRIVED, FLIGHT_DEPARTED } from "./modules/flight.mjs";
const flightsArr = alldata.flights;

const fm = new FlightsManager();
for (let flight_data of flightsArr) {
  const flight = fm.createFlight(flight_data);

  flight.on(FLIGHT_ARRIVED, printFlightInto);
  flight.depart();
}
log.cyan(`${fm.counter} flights`);
log.green(`${fm.uniqueDestinations} flights`);
function printFlightInto(instance) {
  log.blue(
    `Arrived: ${instance.number}`,
    `from: ${instance.origin}`,
    `to, ${instance.destination}`,
    `on, ${instance.arrived}`
  );
}
