import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';
import { Organizer } from '../models/organizer';
import { OrganizerList } from '../components/organizer-list/organizer-list';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, OrganizerList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  title: string;
  listConferences: Conference[];
  searchTitle: string = '';

  organizers: Organizer[] = [
    {
      id: 1,
      name: 'Camille Laurent',
      email: 'camille.laurent@exemple.fr',
      picture: '/images/organizers/o1.svg',
      university: 'Université Paris-Saclay',
    },
    {
      id: 2,
      name: 'Lucas Moreau',
      email: 'lucas.moreau@exemple.fr',
      picture: '/images/organizers/o2.svg',
      university: 'Sorbonne Université',
    },
    {
      id: 3,
      name: 'Élodie Bernard',
      email: 'elodie.bernard@exemple.fr',
      picture: '/images/organizers/o3.svg',
      university: 'Université de Lyon',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.title = 'Home 4DAS 9';
    this.listConferences = [
      {
        id: 1,
        title: 'Angular Conference',
        description: 'Angular Conference Developer',
        address: 'ESPRIT-Tunisia',
        nbr_Max: 50,
        nbr_Participation: 48,
        date: '10-12-2026',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8Q9Y17iP9yV07pJQIuBtfKqoy5nKcP_GiIamFG9udg&s=10',
        organizers: [this.organizers[0], this.organizers[1]],
      },
      {
        id: 2,
        title: 'Angular React',
        description: 'Angular Conference Developer',
        address: 'ESPRIT-Tunisia',
        nbr_Max: 50,
        nbr_Participation: 50,
        date: '10-11-2026',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10',
        organizers: [],
      },
    ];
  }

  participate(conference: Conference): void {
    conference.nbr_Participation++;
  }
}