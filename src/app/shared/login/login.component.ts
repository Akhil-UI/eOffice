import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
	imports: [NgbCarouselModule, NgIf, NgFor],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  images = [
    'assets/img/login.png',
    'assets/img/dm.png',
    // Add more image URLs as needed
  ];

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/admin/home']);
  }
}
