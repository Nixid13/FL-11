import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  heading: string = 'Choose source';
  sourses = [];

  onChange(e: string) {
    this.heading = e.target.value;
    this.data.setSource(e.target.value)
  }
  constructor (private data: DataService) { }


  ngOnInit() {
    this.sourses = this.data.getAllSource();
  }

}
