import {Component, OnInit} from '@angular/core';
import {butterService} from '../services';

@Component({
    templateUrl: './ismael-profile.component.html',
    styleUrls: ['./ismael-profile.component.scss']
})
export class IsmaelProfile implements OnInit {
    public page: any;
    public posts: any[];
    public autorName: string;
    public projects: any[];
    today: number = Date.now();
    constructor() {
    }

    ngOnInit() {
        butterService.page.retrieve('*', 'ismael-profile')
        .then((res) => {
          this.page = res.data.data.fields;
        }).catch((res) => {
          console.log(res);
        });

        butterService.post.list({
            page: 1,
            page_size: 10,
            author_slug: "ismael-al-akhras"
        }).then((res) => {
            this.posts = res.data.data;
            console.log(res);
        });
        butterService.content.retrieve(['projects'])
        .then((res) => {
          this.projects = res.data.data.projects;
          console.log(res);
        }).catch((res) => {
          console.log(res);
        });

    }
    scrollTo() {
        let x = document.querySelector("#projects");
        if (x){
            x.scrollIntoView();
        }
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


