import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/models/game.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	game: IGame[] = [
		{
			gameCover: 'assets/lies-of-p.jpeg',
			cardConsole: 'Xbox Series X/S',
			cardLabel: 'Game Pass Ultimate',
			cardPrice: 'R$ 300,00'
		},
		{
			gameCover: 'assets/forza-motorsport.jpeg',
			cardConsole: 'Xbox Series X/S',
			cardLabel: 'Game Pass Ultimate',
			cardPrice: 'R$ 449,00'
		},
		{
			gameCover: 'assets/sea-of-stars.jpeg',
			cardConsole: 'Xbox Series X/S',
			cardLabel: 'Game Pass Ultimate',
			cardPrice: 'R$ 99,95'
		},
	]

  constructor() { }

  ngOnInit(): void {
  }

}
