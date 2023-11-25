import { Component } from '@angular/core';
import { Table } from '../interfaces/table';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  table: Table[] = [
    {
      id: '1',
      name: 'DJOMPE DA SILVA SA IASINKE EDER',
      party: 2,
      time: '12:00',
      photo: 'assets/images/eder.png',
    },
    {
      id: '2',
      name: 'MAHAMAT ISSAKHA SOUNNY',
      party: 2,
      time: '16:00',
      photo: 'assets/images/mahamet.png',
    },
    {
      id: '3',
      name: 'BENNA Walid',
      party: 4,
      time: '06:00',
      photo: 'assets/images/walid.jpg',
    },
    {
      id: '4',
      name: 'BEMBA PARFAIT DESTIN',
      party: 4,
      time: '06:00',
      photo: 'assets/images/parfait.jpg',
    },
    {
      id: '5',
      name: 'CHENDJOU KAMGANG AUBERT MORIN',
      party: 4,
      time: '16:00',
      photo: 'assets/images/morin.png',
    },
    {
      id: '6',
      name: 'KALAI Najwa',
      party: 2,
      time: '06:00',
      photo: 'assets/images/najwa.jpg',
    },
    {
      id: '7',
      name: 'MBUYAMBA TSHIABUTA NATHAN',
      party: 2,
      time: '06:00',
      photo: 'assets/images/nathan.png',
    },
    {
      id: '8',
      name: 'OSSALE SIMON PIERRE',
      party: 2,
      time: '06:00',
      photo: 'assets/images/piere.png',
    },
    {
      id: '9',
      name: 'MATSONDA-BOKOKO BERTRAND ROMEL',
      party: 4,
      time: '10:00',
      photo: 'assets/images/romel.jpg',
    },
    {
      id: '10',
      name: 'MBUYI ABRAHAM IVAN',
      party: 4,
      time: '10:00',
      photo: 'assets/images/ivan.jpg',
    },
    {
      id: '11',
      name: 'YAHYAOUI AYA',
      party: 2,
      time: '10:00',
      photo: 'assets/images/aya.png',
    },
    {
      id: '12',
      name: 'BEN MOUSSA YOUSSEF',
      party: 4,
      time: '16:00',
      photo: 'assets/images/youssef.png',
    },
  ];
}
