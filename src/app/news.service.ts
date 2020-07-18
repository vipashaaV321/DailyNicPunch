import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
currentArticle:any;
// API_URL:'http://newsapi.org/v2';
// API_KEY:'26c308ecce174eb4ab330254f00c7bea';
  constructor(private http:HttpClient) { }
  getdata(url){
    try {
return this.http.get(`http://newsapi.org/v2/${url}&apikey=26c308ecce174eb4ab330254f00c7bea`);
  }
  catch (error) {
    console.error(error.status);
    console.error(error.error); // Error message as string
    console.error(error.headers);
  }
}
}
