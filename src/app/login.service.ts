import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:8080/api/logist/users';
  url2 = 'http://localhost:9004/api/logist';

  userId: string;
  role: string;
  constructor(private http: HttpClient) {
    this.userId = '';
    this.role = '';
  }
  clear(){
    this.userId='';
    this.role='';
  }

  loginByUsernamePassword(credentials: any) {
    return this.http.get(
      `${this.url}/get/` + credentials.username + '/' + credentials.password
    );
  }

  signUpByUsernamepassword(credentials: any) {
    return this.http.post(`${this.url}/add`, {
      username: credentials.username,
      password: credentials.password,
      role: credentials.role,
    });
  }

  logout() {
    this.userId = '';
  }
  getTripsByUsername() {
  // let urltrip='http://localhost:9002/api/logist';
    return this.http.get(`${this.url2}/getTrips/` + this.userId);
  }
  getFleetsByUsername() {
    return this.http.get(`${this.url2}/getFleets/` + this.userId);
  }

  bookTruck(truckBookData: any) {
    let urltrip: string = 'http://localhost:9002/api/logist/trips/add';

    return this.http.post(urltrip, truckBookData);
  }
  addFleet(addFleetData: any) {
    let urlFleet: string = 'http://localhost:9003/api/logist/fleet/add';
    return this.http.post(urlFleet, addFleetData);
  }
  addDataToUserDetailsTrips(tripDataForUserDetails: any) {
    console.log(tripDataForUserDetails);
    let urlUserDetails: string = 'http://localhost:9004/api/logist/addTrip';
    return this.http.post(urlUserDetails, tripDataForUserDetails);
  }

  addDataToUserDetailsFleets(fleetDataForUserDetails: any) {
    console.log(fleetDataForUserDetails);
    let urlUserDetails: string = 'http://localhost:9004/api/logist/addFleet';
    return this.http.post(urlUserDetails, fleetDataForUserDetails);
  }
  addNewUserDetails() {
    let urlUserDetails: string =
      'http://localhost:9004/api/logist/addNewUserDetails';
    return this.http.post(urlUserDetails, {
      userId: this.userId,
      fleetList: [],
      tripList: [],
    });
  }
  getAllFleets() {
    let urlFleet: string = 'http://localhost:9003/api/logist/getAllFleets';
    return this.http.get(urlFleet);
  }
  getTripsByFleet(fleetId: string) {
    let urlFleet: string =
      'http://localhost:9003/api/logist/getFleetAndTrips/' + fleetId;
    return this.http.get(urlFleet);
  }
  getAllTrips() {
    let urlFleet: string = 'http://localhost:9002/api/logist/trips/all';
    return this.http.get(urlFleet);
  }
  getAllUser() {
    let urlFleet: string = 'http://localhost:8080/api/logist/users/get/all';
    return this.http.get(urlFleet);
  }

  addFleetToTrip(tripId: string, fleetId: string) {
    let urlFleet: string = 'http://localhost:9002/api/logist/trips/addFleet';
    return this.http.put(urlFleet, {
      fleetId: fleetId,
      tripId: tripId,
    });
  }
}
