import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoldVehicle } from '../models/sold-vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class SoldVehicleService {
  // Match Spring controller: @RequestMapping("api/vehicle")
  private apiUrl = 'http://localhost:8080/api/vehicle';

  constructor(private http: HttpClient) {}

  getAllSoldVehicles(): Observable<SoldVehicle[]> {
    // Spring mapping: @GetMapping("/allsoldvehicle")
    return this.http.get<SoldVehicle[]>(`${this.apiUrl}/allsoldvehicle`);
  }

  addSoldVehicle(soldVehicle: SoldVehicle): Observable<SoldVehicle> {
    // Spring mapping: @PostMapping("/addSoldvehicle")
    return this.http.post<SoldVehicle>(`${this.apiUrl}/addSoldvehicle`, soldVehicle);
  }
}
