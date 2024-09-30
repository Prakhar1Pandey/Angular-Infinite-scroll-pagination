import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-ngx-infinite-scroll-animation',
  templateUrl: './ngx-infinite-scroll-animation.component.html',
  styleUrl: './ngx-infinite-scroll-animation.component.scss'
})
export class NgxInfiniteScrollAnimationComponent implements OnInit {
  items:string[]=[];
  isLoading=false;
  currentPage=1;
  itemsPerPage=10;

  toggleLoading=()=>this.isLoading=!this.isLoading;
  loadData=()=>{
      this.toggleLoading();
      this.paginationService.getItems(this.currentPage,this.itemsPerPage).subscribe({
        next:response=>this.items=response,
        error:err=>console.log(err),
        complete:()=>this.toggleLoading() 
      })
    }
  

  ngOnInit(): void {
    this.loadData();
  }

  appendData=()=>{
    this.toggleLoading();
    this.paginationService.getItems(this.currentPage,this.itemsPerPage).subscribe({
      next:response=>this.items=[...this.items,...response],
      error:err=>console.log(err),
      complete:()=>this.toggleLoading()                                                      
    })
  }

  onScroll=()=>{
    this.currentPage++;
    this.appendData();
  }



  constructor(private paginationService:PaginationService) {
    
  }

}
