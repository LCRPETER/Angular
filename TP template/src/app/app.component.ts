import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Redirection automatiquement vers la page "home" lors du chargement de l'application
    this.router.navigate(['/home']);
  }
  title = 'OssaleSimonPierre';
}
