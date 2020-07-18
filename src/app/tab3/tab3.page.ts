import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data:any;
  constructor(private newsService:NewsService,private router:Router) {}
  ngOnInit(){
    this.newsService.getdata('everything?domains=wsj.com').subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }
onGoTo(item){
this.newsService.currentArticle=item;
this.router.navigate(['/news-single2']);
}

}
