import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data:any;
  constructor(private newsService:NewsService,private router:Router) {}
  ngOnInit(){
    this.newsService.getdata('everything?q=apple&from=2020-07-16&to=2020-07-16&sortBy=popularity').subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }
onGoTo(item){
this.newsService.currentArticle=item;
this.router.navigate(['/news-single1']);
}

}
