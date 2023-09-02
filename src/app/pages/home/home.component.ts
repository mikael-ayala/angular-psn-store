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
			gameCover: 'assets/bt-1.jpg',
			cardConsole: 'PS5',
			cardLabel: 'Exclusive',
			cardPrice: '299,90'
		},
		{
			gameCover: 'assets/bt-4.jpg',
			cardConsole: 'PS4',
			cardLabel: 'Digital',
			cardPrice: '199,90'
		},
		{
			gameCover: 'assets/bt-5.jpg',
			cardConsole: 'PS5',
			cardLabel: 'Exclusive',
			cardPrice: '350,00'
		},
	]

  constructor() { }

  ngOnInit(): void {
  }

}
