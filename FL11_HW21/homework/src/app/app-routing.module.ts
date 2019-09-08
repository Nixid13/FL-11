import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component'
import {NewsComponent} from './news/news.component';
import {HeadingComponent} from './heading/heading.component';
import {ReadMoreComponent} from './read-more/read-more.component';


const routes: Routes = [
  {path: 'add', component: AddArticleComponent},
  {path: '', component: HeadingComponent},
  {path: 'read', component: ReadMoreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [AddArticleComponent, NewsComponent, HeadingComponent, ReadMoreComponent]
