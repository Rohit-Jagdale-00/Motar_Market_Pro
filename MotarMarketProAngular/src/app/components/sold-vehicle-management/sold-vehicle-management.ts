import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SoldVehicleService } from '../../services/sold-vehicle';
import { SoldVehicle } from '../../models/sold-vehicle.model';

@Component({
  selector: 'app-sold-vehicle-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sold-vehicle-management.html',
  styleUrls: ['./sold-vehicle-management.css']
})
export class SoldVehicleManagementComponent implements OnInit {

  soldVehicles: SoldVehicle[] = [];
  soldVehicleForm: FormGroup;
  showForm = false;

  constructor(
    private fb: FormBuilder,
    private soldVehicleService: SoldVehicleService
  ) {
    this.soldVehicleForm = this.fb.group({
      vehicle_id: ['', [Validators.required, Validators.min(1)]],
      vehicle_type: ['', Validators.required],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      fuel_type: ['', Validators.required],
      ownership: ['', Validators.required],
      reg_data: ['', Validators.required],
      veh_number: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      sold_date: ['', Validators.required],
      buyer_name: ['', Validators.required],
      buyer_contact: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadSoldVehicles();
  }

  loadSoldVehicles(): void {
    this.soldVehicleService.getAllSoldVehicles().subscribe(
      (soldVehicles: SoldVehicle[]) => this.soldVehicles = soldVehicles,
      (error: unknown) => console.error('Error loading sold vehicles:', error)
    );
  }

  onSubmit(): void {
    if (this.soldVehicleForm.invalid) return;

    const soldVehicleData = this.soldVehicleForm.value;

    this.soldVehicleService.addSoldVehicle(soldVehicleData as SoldVehicle).subscribe(
      () => {
        this.loadSoldVehicles();
        this.soldVehicleForm.reset();
        this.showForm = false;
      },
      (error: unknown) => console.error('Error adding sold vehicle:', error)
    );
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  cancelForm(): void {
    this.soldVehicleForm.reset();
    this.showForm = false;
  }
}