import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {DataService} from '../data.service';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
              private data: DataService) {
  }

  onSubmit() {
    this.data.addNews(this.myForm.value);
  }

  initForm() {
    this.myForm = this.fb.group({
      title: [null],
      descr: [null],
      content: [null],
      date: [null],
      author: [null],
      source: [null]
    });
  }

  ngOnInit() {
    this.initForm();
  }

}
