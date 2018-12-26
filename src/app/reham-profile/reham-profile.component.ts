import {Component, OnInit} from '@angular/core';
import {butterService} from '../services';


@Component({
    templateUrl: './reham-profile.component.html',
    styleUrls: ['./reham-profile.component.scss']
})
export class RehamProfile implements OnInit {
    public page: any;
    public posts: any[];
    public autorName: string;
    public projects: any[];
    constructor() {
    }
    today: number = Date.now();
    ngOnInit() {
        butterService.page.retrieve('*', 'reham-profile')
        .then((res) => {
          this.page = res.data.data.fields;
        }).catch((res) => {
          console.log(res);
        });

        butterService.post.list({
            page: 1,
            page_size: 10,
            author_slug: "reham-habbas"
        }).then((res) => {
            this.posts = res.data.data;
            console.log(res);
        });
        butterService.content.retrieve(['reham_projects'])
        .then((res) => {
          this.projects = res.data.data.reham_projects;
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


