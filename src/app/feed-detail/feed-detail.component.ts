import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FeedService } from '../services/feed.service';


@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {
  feed :any;
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private feedService: FeedService) { }

  ngOnInit() {
    var slug=this.activatedRoute.snapshot.url[1].path?this.activatedRoute.snapshot.url[1].path:'';
     this.feedService.getFeedBySlug(slug).subscribe( responsedatas =>
          {
                   this.feed=responsedatas.data;  
             }
      );

  }

}