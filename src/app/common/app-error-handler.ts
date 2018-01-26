import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    alert('An unexpected error occurred.');
    // log error message on the server
    console.log(error);
  }
}
