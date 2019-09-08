import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsArr = [];
  source: string = '';


  constructor(private data: DataService) {
  }

  readMore(item) {
    this.data.readMore(item);
  }

  ngOnInit(): void {
    this.newsArr = this.data.getAllNews();

  }

}
