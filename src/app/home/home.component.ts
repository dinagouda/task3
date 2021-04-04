import { Component, OnInit, Output  ,EventEmitter} from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {popularService} from '../services/popular.service';
import {favlist} from '../interfaces/favlist';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  favvar=true;
  resultToprated:object | any;
  resultpopularmovie:object | any;
  resultNowplaying:object | any;
  @Output() isLogout = new EventEmitter<void>()
   favcurrentlist: { title: string, overview: string  , imgpath :string , count :string}[] = [  ];
  constructor(public firebaseService : FirebaseService , public popularService:popularService ,private router: Router ) { 
    
  }

  ngOnInit(): void {
    this.popularService.getAllpopularmovie().subscribe((res)=>
    {
      //console.log(res);
      this.resultpopularmovie=res;
    });
    this.popularService.getAlltoprated().subscribe((res)=>
    {
      //console.log(res);
      this.resultToprated=res;
    });
    this.popularService.getAllNowplaying().subscribe((res)=>
    {
      //console.log(res);
      this.resultNowplaying=res;
    });

 
  }
  logout(){
      this.firebaseService.logout()
      this.isLogout.emit()
      this.router.navigate(['/login']);
  }

  fav(event :any){
   
    const currentItem:favlist = {
      title: event.target.attributes['data-title'].value,
     overview: event.target.attributes['data-overview'].value,
     imgpath: event.target.attributes['data-imgpath'].value,
     count: event.target.attributes['data-count'].value
    }
this.favcurrentlist.push(currentItem);
console.log(this.favcurrentlist);

  }

  allFavMovies(){
    localStorage.setItem("favlist",JSON.stringify(this.favcurrentlist) );
    this.favvar=false;
  }
}
