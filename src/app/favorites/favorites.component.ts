import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
   storedNames = JSON.parse(localStorage.getItem("favlist") || '{}');
  constructor() { }

  ngOnInit(): void {
   
   // console.log(storedNames);

  }

}
