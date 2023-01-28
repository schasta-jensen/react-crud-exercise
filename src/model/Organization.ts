// export default class Organization {
//   id: string;
//   name: string;
//   email: string;
//   telephone: string;
//   constructor(name: string, email: string, telephone: string, id: string) {
//     this.name = name;
//     this.email = email;
//     this.telephone = telephone;
//     this.id = id;
//   }
// }

class telecom {
  system: 'phone' | 'mobile' | 'email' | 'url';
  value: string;
  use: string;
  constructor(system: 'phone' | 'mobile' | 'email' | 'url', value: string, use: string) {
    this.system = system;
    this.value = value;
    this.use = use;
  }
}

class hoursOfOperation {
  closingTime: string;
  openingTime: string;
  allDay: boolean;
  daysOfWeek: Array<any>;
  constructor(openingTime: string, closingTime: string, allDay: boolean, daysOfWeek: Array<[]>) {
    this.closingTime = closingTime;
    this.openingTime = openingTime;
    this.allDay = allDay;
    this.daysOfWeek = daysOfWeek;
  }
}

class position {
  longitude: number;
  latitude: number;
  altitude: number;
  constructor(longitude: number, latitude: number, altitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
    this.altitude = altitude;
  }
}

export default class Organization {
  organization_Id: string;
  name: string;
  alias: string;
  active: boolean;
  //telecom: { phone: string, email: string, mobile: string};
  telecom: telecom[];
  position: position;
  hoursOfOperation: hoursOfOperation;
  constructor(name: string, alias: string, active: boolean, telecom: telecom[], id: string, position: position, hoursOfOperation: hoursOfOperation) {
    this.name = name;
    this.alias = alias;
    this.active = active;
    this.telecom = telecom;
    this.organization_Id = id;
    this.position = position;
    this.hoursOfOperation = hoursOfOperation;
  }
}

