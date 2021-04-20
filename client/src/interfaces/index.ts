export interface Vehicle {
  id?: string;
  model_make_id: string;
  model_name: string;
}
export interface Location {
  id?: string;
  postcode: string;
  suburb: string;
  state: string;
  dc: string;
  type: string;
  lat: string;
  lon: string;
}
export interface Quote {
  id?: string;
  carMake: string;
  carModel: string;
  pickUp: string;
  dropOff: string;
  name: string;
  email: string;
  phone: string;
}
