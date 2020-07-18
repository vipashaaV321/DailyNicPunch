import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-single1',
  templateUrl: './news-single1.page.html',
  styleUrls: ['./news-single1.page.scss'],
})
export class NewsSingle1Page implements OnInit {

  item:any;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.item=this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }
}
