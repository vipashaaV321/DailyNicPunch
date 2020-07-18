import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
const API_URL=environment.apiurl;
const API_KEY=environment.apikey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {
currentArticle:any;
  constructor(private http:HttpClient) { }
  getdata(url){
return this.http.get(`${API_URL}/${url}&apikey=${API_KEY}`);
  }
}
