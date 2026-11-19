import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

export interface Conference {
  picture: string;
  title: string;
  date: Date;
  adress: string;
  available_Places: number;
}

@Component({
  selector: 'app-home',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  conferences: Conference[] = [
    {
      picture: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      title: 'Angular 21 Conference',
      date: new Date('2027-11-15'),
      adress: 'Tunis, Centre Urbain Nord',
      available_Places: 25,
    },
    {
      picture: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800',
      title: 'Signals Workshop',
      date: new Date('2027-11-30'),
      adress: 'Ariana, Technopole El Ghazala',
      available_Places: 6,
    },
    {
      picture: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
      title: 'Web Architecture Summit',
      date: new Date('2027-11-20'),
      adress: 'Sousse, Technopôle',
      available_Places: 0,
    },
  ];
}