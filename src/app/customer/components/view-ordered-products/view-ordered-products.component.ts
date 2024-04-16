import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-ordered-products',
  templateUrl: './view-ordered-products.component.html',
  styleUrl: './view-ordered-products.component.scss'
})
export class ViewOrderedProductsComponent {
  orderId: any = this.activatedRoute.snapshot.params['orderId'];
  orderedProductDetailsList= [];
  totalAmount: any;

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOrderedProductsDetailsByOrderId();
  }

    getOrderedProductsDetailsByOrderId() {
      this.customerService.getOrderedProducts(this.orderId).subscribe(res => {
        res.productDtoList.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
          this.orderedProductDetailsList.push(element);
        });
        this.totalAmount = res.orderAmount;
    })
  }
}
