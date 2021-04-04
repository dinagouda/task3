import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import {HttpClientModule} from '@angular/common/http';
import { FavoritesComponent } from './favorites/favorites.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    IndexComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAukgFl_TR-4ClaVckfENvVp7qSEWUNIWI",
      authDomain: "tmdbtask.firebaseapp.com",
      projectId: "tmdbtask",
      storageBucket: "tmdbtask.appspot.com",
      messagingSenderId: "714380929510",
      appId: "1:714380929510:web:e7c03d6945b7eca4420e27"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
