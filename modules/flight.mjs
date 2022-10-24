import "@ajar/marker";
import log from "@ajar/marker";
import EventEmitter from "events";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";
import weekOfYear from "dayjs/plugin/weekOfYear.js";
dayjs.extend(advancedFormat);
dayjs.extend(weekOfYear);
export const FLIGHT_ARRIVED = "flight_arrived";
export const FLIGHT_DEPARTED = "flight_departed";
export class Flight extends EventEmitter {
  #number = null;
  #origin = null;
  #destination = null;
  #departed = -1;
  #arrived = -1;
  constructor({ number, origin, destination }) {
    super();
    this.#number = number;
    this.#origin = origin;
    this.#destination = destination;
  }
  get number() {
    return this.#number;
  }
  get origin() {
    return this.#origin;
  }
  get destination() {
    return this.#destination;
  }
  get departed() {
    return this.#departed;
  }
  get arrived() {
    return this.#arrived;
  }
  set number(v) {
    throw new Error("read only");
  }
  set origin(v) {
    throw new Error("read only");
  }
  set destination(v) {
    throw new Error("read only");
  }
  set departed(v) {
    throw new Error("read only");
  }
  set arrived(v) {
    throw new Error("read only");
  }

  depart() {
    this.#departed = dayjs().format("MMM.wo.YYYY, H:mm:ss");
    log.magenta(`departed: ${this.#departed}`);
    this.emit(FLIGHT_DEPARTED, this);
    const randomDelay = 6 + Math.random() * 4 * 1000;
    setTimeout(this.#arrive, randomDelay);
  }
  #arrive = () => {
    this.#arrived = dayjs().format("MMM.wo.YYYY, H:mm:ss");
    this.emit(FLIGHT_ARRIVED, this);
  };
}

let maxFlight = { number: 508, origin: "BER", destination: "BCN" };
const newFlight = new Flight(maxFlight);
