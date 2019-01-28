import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsapi : NewsApiService ) { }

  ngOnInit() {
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
  }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}