import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'caleb-static-app';

  ngOnInit(): void {
    this.http.get('api/message').subscribe((result: any) => {
      this.title = result.text;
    });
  }
}
