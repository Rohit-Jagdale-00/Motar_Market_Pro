import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {
name: string='Hello Component';
}
