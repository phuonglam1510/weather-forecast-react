import { LOCATION_TYPE } from 'Enums/Location';
import moment from 'moment';

export class Location {
  title: string;

  location_type: LOCATION_TYPE;

  woeid: number;

  coordinates: number[];

  timezone: string;

  time: Date;

  sun_rise: Date;

  sun_set: Date;

  timezone_name: string;

  parent?: Location;

  constructor(json?: any) {
    this.title = json.title || '';
    this.location_type = json.location_type || LOCATION_TYPE.CITY;
    this.woeid = json.woeid || -1;
    this.coordinates = json.latt_long ? json.latt_long.split(',') : [];
    this.timezone = json.timezone || '';
    this.time = new Date(json.time || '');
    this.sun_rise = new Date(json.sun_rise || '');
    this.sun_set = new Date(json.sun_set || '');
    this.timezone_name = json.timezone_name || '';
    if (json.parent) {
      this.parent = new Location(json.parent);
    }
  }

  get today() {
    return moment(this.time).format('DD-MM-YYYY');
  }

  get sunriseTime() {
    return moment(this.sun_rise).format('hh:mm a');
  }

  get sunsetTime() {
    return moment(this.sun_set).format('hh:mm a');
  }
}
