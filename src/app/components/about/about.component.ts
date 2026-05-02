import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  sections = [
    {
      title: 'Explore a massive interconnected world!',
      description: 'With twelve unique regions and over 200 rooms to explore, the world of Glumion holds hundreds of secrets.',
      imageUrl: 'assets/about-explore-world.png',
      imagePosition: 'left' as const
    },
    {
      title: 'Swap between two distinct characters!',
      description: 'You\'ll play as the twins Axis and Myst, and mastering their unique movement and combat prowess is mandatory for making it out alive.',
      imageUrl: 'assets/about-swap-chars.png',
      imagePosition: 'right' as const
    },
    {
      title: 'Take down challenging foes!',
      description: 'More than 100 enemies are scattered throughout the world, plus 25 completely unique bosses!',
      imageUrl: 'assets/about-challenging-foes.png',
      imagePosition: 'left' as const
    },
    {
      title: 'Randomize the entire game!',
      description: 'The Celestial Fairies have shuffled the items, rooms, enemies, and more! Can you navigate their maze and win… again and again?',
      imageUrl: 'assets/about-randomize-game.png',
      imagePosition: 'right' as const
    }
  ];
}
