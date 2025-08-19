import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VehicleService } from '../../services/vehicle';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './vehicle-management.html',
  styleUrls: ['./vehicle-management.css']
})
export class VehicleManagementComponent {
  vehicles: Vehicle[] = [];
  vehicleForm: FormGroup;
  isEditing = false;
  editingId: number | null = null;
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService
  ) {
    this.vehicleForm = this.fb.group({
      vehicle_type: ['', Validators.required],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      fuel_type: ['', Validators.required],
      ownership: ['', Validators.required],
      reg_data: ['', Validators.required],
      veh_number: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getAllVehicles().subscribe(
      (vehicles: Vehicle[]) => (this.vehicles = vehicles)
    );
  }

  onSubmit(): void {
    if (this.vehicleForm.invalid) return;
    const data = this.vehicleForm.value as Vehicle;
    if (this.isEditing && this.editingId != null) {
      this.vehicleService.updateVehicle(this.editingId, data).subscribe(() => {
        this.resetForm();
        this.showForm = false;
        this.loadVehicles();
      });
    } else {
      this.vehicleService.addVehicle(data).subscribe(() => {
        this.resetForm();
        this.showForm = false;
        this.loadVehicles();
      });
    }
  }

  editVehicle(vehicle: Vehicle): void {
    this.isEditing = true;
    this.editingId = vehicle.vehicle_id ?? null;
    this.vehicleForm.patchValue({
      vehicle_type: vehicle.vehicle_type,
      manufacturer: vehicle.manufacturer,
      model: vehicle.model,
      fuel_type: vehicle.fuel_type,
      ownership: vehicle.ownership,
      reg_data: vehicle.reg_data,
      veh_number: vehicle.veh_number,
      price: vehicle.price
    });
  }

  deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id).subscribe(() => this.loadVehicles());
  }

  resetForm(): void {
    this.isEditing = false;
    this.editingId = null;
    this.vehicleForm.reset();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  cancelForm(): void {
    this.resetForm();
    this.showForm = false;
  }
}