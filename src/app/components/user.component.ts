import {PostsService} from '../services/posts.service';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html', 
  

providers: [PostsService]
})


export class UserComponent  { 
  name : string;
  email: string;
  address: address;
  hobbies: any[];
  showHobbies:boolean;
  posts: Post[];
  constructor(private postsService: PostsService) {
        
  this.name = 'Manjeet';
  this.email= 'manjeet@gmail.com';
  this.address= {
       
    street: '12 Main st',
    city: 'Boston',
    state: 'MA'


   }
  this.hobbies=['Music', 'Movies', 'Sports']
  this.showHobbies=false;
  this.postsService.getPosts().subscribe(posts=>{
    this.posts = posts;
    
  }) 
}
   toggleHobbies(){ 
             if(this.showHobbies==true){
            this.showHobbies=false;

             }else{
              this.showHobbies=true;


             }
    


   }

}
    interface address{ 
      street: string;
      city: string;
      state: string;
      
    }
    interface Post{
      id: number;
      title: string;
      body: string;
    }