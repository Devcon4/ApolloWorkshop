import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'demo';

  books = [];

  constructor(private apollo: Apollo) {
    this.apollo.watchQuery({
      query: gql`
        {
          books {
            title
            author
          }
        }
      `
    }).valueChanges.subscribe(r => this.books = r.data['books']);
  }
}
