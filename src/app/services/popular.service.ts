import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { popularmovie } from '../interfaces/popularMovie';
import {toprated} from '../interfaces/toprated';
import {nowplaying} from '../interfaces/nowplaying'
 
@Injectable({
  providedIn: 'root'
})
export class popularService {
 
   
  constructor(private http: HttpClient) { }
 

  popularmovie: popularmovie[] = [];
  toprated:toprated[]=[];
  nowplaying:nowplaying[]=[];
 


  getAllpopularmovie (){  
    var url = `https://api.themoviedb.org/3/movie/popular?api_key=03cbcee8a61fe8251f8b22a0c139db69`;
  
    return this.http.get(url);
    
    }


    getAlltoprated (){
      var url = `https://api.themoviedb.org/3/movie/top_rated?api_key=03cbcee8a61fe8251f8b22a0c139db69`;
        return this.http.get(url);
    
      
      }
 
      getAllNowplaying (){
        var url = `https://api.themoviedb.org/3/movie/now_playing?api_key=03cbcee8a61fe8251f8b22a0c139db69`;
        return this.http.get(url);
    
        }




}
