import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders: any;

  constructor(
    private adminService: AdminService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getPlacedOrders();
  }

  getPlacedOrders() {
    this.adminService.getPlacedOrders().subscribe(res => {
      this.orders = res;
    })
  }

  changeOrderStatus(orderId: number, status: string) {
    this.adminService.changeOrderStatus(orderId, status).subscribe(res => {
      if (res.id) {
        this.snackbar.open('Order Status changed successfully' , 'Close', { duration: 5000 });
        this.getPlacedOrders();
      } else {
        this.snackbar.open('Something went wrong' , 'Close', { duration: 5000 });
      }
    })
  }
}
