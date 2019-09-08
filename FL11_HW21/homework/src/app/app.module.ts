import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { NewsComponent } from './news/news.component';
import {AddArticleComponent} from './add-article/add-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadMoreComponent } from './read-more/read-more.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    NewsComponent,
    RoutingComponent,
    AddArticleComponent,
    ReadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
