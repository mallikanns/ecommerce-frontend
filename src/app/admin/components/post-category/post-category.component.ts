import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { log } from 'console';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrl: './post-category.component.scss'
})
export class PostCategoryComponent {
  categoryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  addCategory(): void {
    if (this.categoryForm.valid) {
      console.log('test0');
      this.adminService.addCategory(this.categoryForm.value).subscribe((res) => {
        console.log('test1');
        if (res.id != null) {
          console.log('test2');
          this.snackBar.open('Category Posted Successfully!', 'Close', {
            duration: 5000
          });
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          console.log('test3');
          this.snackBar.open(res.message, 'Close', {
            duration: 5000,
            panelClass: 'error-snackbar'
          });
        }
      })
    } else {
      console.log('test4');
      this.categoryForm.markAllAsTouched();
    }
  }
}
