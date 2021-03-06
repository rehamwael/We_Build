import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {butterService} from '../services';
import {map, take} from 'rxjs/operators';

@Component({
    selector: 'app-blog-post-details',
    templateUrl: './blog-post-details.component.html',
    styleUrls: ['./blog-post-details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlogPostDetailsComponent implements OnInit {
    

    constructor(protected route: ActivatedRoute) {
    }
    public MOBILE_MAX_WIDTH = 425;  //Adjust as needed
    protected slug$: Observable<string>;
    public post = {
        meta: null,
        data: null
    };

    ngOnInit() {
        this.loadScripts();
        this.slug$ = this.route.paramMap
            .pipe(
                map(params => (params.get('slug')))
            );

        this.slug$.pipe(
            take(1))
            .subscribe(slug => {
                butterService.post.retrieve(slug)
                    .then((res) => {
                        this.post = res.data;
                        console.log(res);
                    }).catch((res) => {
                    console.log(res);
                });
            });
    }
    ngOnDestroy(): void {
        var c=document.getElementsByTagName('script');
        var shareIcons = document.getElementById("at4-share");
        document.getElementsByTagName('head')[0].removeChild(c[0]);
        if(shareIcons != null){
            shareIcons.style.display = "none";
        }
        if( window.innerWidth < 425){
            var shareIconsMobile = document.getElementById("at-share-dock");
            shareIconsMobile.style.display = "none";

        }
    }


    loadScripts() {
        const dynamicScripts = [
         '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c20b014c1d59cd6'
        ];
        for (let i = 0; i < dynamicScripts.length; i++) {
          const node = document.createElement('script');
          node.src = dynamicScripts[i];
          node.type = 'text/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.getElementsByTagName('head')[0].appendChild(node);
        }
        var shareIcons = document.getElementById("at4-share");
        if(shareIcons != null){
         shareIcons.style.display = "block";
        }
        var shareIconsMobile = document.getElementById("at-share-dock");
        if( window.innerWidth < 425 && shareIconsMobile != null){
            shareIconsMobile.style.display = "block";

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
