import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-single2',
  templateUrl: './news-single2.page.html',
  styleUrls: ['./news-single2.page.scss'],
})
export class NewsSingle2Page implements OnInit {

  item:any;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.item=this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }
}
