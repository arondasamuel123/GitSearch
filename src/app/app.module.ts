import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { RepoComponent } from './repo/repo.component';
import { FontSwitcherDirective } from './font-switcher.directive';
import { GithubRoutingModule } from './github-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent,
    RepoComponent,
    FontSwitcherDirective,
    NavbarComponent,
    UserDetailsComponent,
    SearchRepoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GithubRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
