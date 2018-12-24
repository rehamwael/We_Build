import {Component, OnInit} from '@angular/core';
import {butterService} from '../services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public page: any;
    public posts: any[];
    constructor() {
    }

    ngOnInit() {
        butterService.page.retrieve('*', 'home-page')
        .then((res) => {
          this.page = res.data.data.fields;
        }).catch((res) => {
          console.log(res);
      });

      butterService.post.list({
        page: 1,
        page_size: 10
    }).then((res) => {
        this.posts = res.data.data;
    });
    }
    menuToggle(){
        let header = document.querySelector(".header-wrapper");
        if(header.classList.contains("open")){
            header.classList.remove("open");
        }else{
            header.classList.add("open");
        }
    }

}


