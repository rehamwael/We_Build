import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FaqComponent} from './faq/faq.component';
import {HomeComponent} from './home/home.component';
import {HelloYouComponent} from './hello-you/hello-you.component';
import {BlogPostListingComponent} from './blog-post-listing/blog-post-listing.component';
import {CustomerListingComponent} from './customer-listing/customer-listing.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {BlogPostDetailsComponent} from './blog-post-details/blog-post-details.component';
import { RehamProfile } from './reham-profile/reham-profile.component';
import { IsmaelProfile } from './ismael-profile/ismael-profile.component';

const appRoutes: Routes = [
    {path: 'customer', component: CustomerListingComponent},
    {path: 'customer/:slug', component: CustomerDetailsComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'blog', component: BlogPostListingComponent},
    {path: 'blog/:slug', component: BlogPostDetailsComponent},
    {path: 'hello-you', component: HelloYouComponent},
    {path: 'reham', component: RehamProfile},
    {path: 'ismael', component: IsmaelProfile},
    {path: 'home', component: HomeComponent},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
