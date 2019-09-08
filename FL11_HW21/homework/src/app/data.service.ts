import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fullNews =[];
  currentSource = 'AAA';
  newsArr = [{
    id: 1,
    title: 'First title',
    description: 'Description for first title',
    img: 'https://via.placeholder.com/120',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' At delectus deserunt doloremque eveniet expedita, inventore,Lorem ' +
      'ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'At delectus deserunt doloremque eveniet expedita, inventore,',
    date: '21.02.2019',
    author: 'John Doe',
    source: 'AAA'


  },
    {
      id: 2,
      title: 'Second title',
      description: 'Description for second title',
      img: 'https://via.placeholder.com/120',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' At delectus deserunt doloremque eveniet expedita, inventore,Lorem ' +
        'ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'At delectus deserunt doloremque eveniet expedita, inventore,',
      date: '23.02.2019',
      author: 'John Doe',
      source: 'BBB'


    },
    {
      id: 3,
      title: 'Third title',
      description: 'Description for third title',
      img: 'https://via.placeholder.com/120',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' At delectus deserunt doloremque eveniet expedita, inventore,Lorem ' +
        'ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'At delectus deserunt doloremque eveniet expedita, inventore,',
      date: '21.04.2019',
      author: 'John Doe',
      source: 'AAA'


    },
    {
      id: 4,
      title: 'Fourth title',
      description: 'Description for fourth title',
      img: 'https://via.placeholder.com/120',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' At delectus deserunt doloremque eveniet expedita, inventore,Lorem ' +
        'ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'At delectus deserunt doloremque eveniet expedita, inventore,',
      date: '21.03.2019',
      author: 'John Doe',
      source: 'CCC'


    },
    ];

  getAllNews(): any[] {
    return this.newsArr;
  }

  getAllSource(): any[] {
    return [
      {title: 'AAA'},
      {title: 'BBB'},
      {title: 'CCC'},
    ];
  }

  readMore(item) {
    this.fullNews = item;
  }
  getChosenNew() {
    return this.fullNews;
  }

  addNews(item) {
    this.newsArr.push(item);
  }
  setSource(source) {
    this.currentSource = source;

  }
  getSource() {
    return this.currentSource;
  }

  constructor() {
  }
}
