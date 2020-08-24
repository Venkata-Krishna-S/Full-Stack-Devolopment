import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeButton = true;
  name = "Venkata Krishna S";
  favFlop = {
   movieTitle:"Batman and Robins",
   year:"2020",
   rating:"****",
   imdbLink:"https://www.imdb.com/", 
   soundtrack: {
     spotifyLink:
     "https://www.spotify.com/",
   }
 }
}
