import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organizer } from '../../models/organizer';

@Component({
  selector: 'app-organizer-list',
  imports: [CommonModule],
  templateUrl: './organizer-list.html',
  styleUrl: './organizer-list.css',
})
export class OrganizerList {
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
}