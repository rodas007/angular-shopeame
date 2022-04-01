import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-products',
  templateUrl: './gallery-products.component.html',
  styleUrls: ['./gallery-products.component.scss']
})
export class GalleryProductsComponent implements OnInit {
  @Input() products!: any;
  constructor() { }
  public filteredProducts: any;
  public searchValue: any = '';
  ngOnInit(): void {
  }
  ngOnChanges(changes: any) {
    if (changes.products) {
      this.filteredProducts = this.products;
      console.log(this.products)
    }
    }

  search() {
    this.products = this.searchValue == "" ? this.filteredProducts = this.products :this.products.filter((product: any)=>
    product.name.toLowerCase().includes(this.searchValue.toLowerCase()))
    

  }
}

