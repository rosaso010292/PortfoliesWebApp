import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:8080/api/v1/';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(`${baseUrl}portfolies`);
  }
  get(id) {
    return this.http.get(`${baseUrl}portfolio/${id}`);
  }
  create(data) {
    return this.http.post(`${baseUrl}portfolio`, data);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}portfolio/${id}`, data);
  }
  findByTittle(tittle) {
    return this.http.get(`${baseUrl}portfolio?tittle=${tittle}`);
  }
  getTweets(userName) {
    return this.http.get(`${baseUrl}portfolio/tweets?userName=${userName}`);
  }
}
