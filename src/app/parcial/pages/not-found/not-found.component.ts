import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  notFoundUrl!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.notFoundUrl = this.route.snapshot.url.join('');
  }
}
