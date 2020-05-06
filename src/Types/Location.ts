import { LOCATION_TYPE } from 'Enums/Location';

export class Location {
  title: string;

  location_type: LOCATION_TYPE;

  woeid: number;

  coordinates: number[];

  constructor(json?: any) {
    this.title = json.title || '';
    this.location_type = json.location_type || LOCATION_TYPE.CITY;
    this.woeid = json.woeid || -1;
    this.coordinates = json.latt_long ? json.latt_long.split(',') : [];
  }
}
