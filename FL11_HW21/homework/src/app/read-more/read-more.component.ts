import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {

  news = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.news = this.data.getChosenNew();

  }

}
