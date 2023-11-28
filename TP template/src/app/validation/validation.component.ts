import { Component } from '@angular/core';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent {
  table: Users[] = [
    {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      profile: '',
      valide: '',
    },
  ];
}
