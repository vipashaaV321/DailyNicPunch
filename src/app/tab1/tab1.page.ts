import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
data:any;
  constructor(private newsService:NewsService,private router:Router) {}
  ngOnInit(){
    this.newsService.getdata('top-headlines?sources=techcrunch').subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }
onGoTo(item){
this.newsService.currentArticle=item;
this.router.navigate(['/news-single']);
}
}
