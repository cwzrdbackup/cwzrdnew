(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-password-reset-password-module"],{

/***/ "./src/app/pages/reset-password/reset-password.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout class=\"layout-container\">\n  <nb-layout-column class=\"flex flexCenter p-0\">\n\n    <nb-card class=\"wholeScreen\">\n      <nb-card-body class=\"flex-vertical p-0\">\n        <div class=\"login-left\">\n          <div class=\"login-left-inner\">\n            <img class=\"login-logo\" src=\"https://cdn.shopify.com/s/files/1/0049/3102/7015/files/CryptoWzrd_black.png?5771\"/>\n            <div class=\"login-header\">MEMBERS PLATFORM</div>\n            <div class=\"enterUsername\">\n              <h3 *ngIf=\"isShow\" class=\"text-center text-info\" style=\"color: #6610f2!important;\">This link has expired, please try submitting a new request.</h3>\n              <form *ngIf=\"!isShow\" (ngSubmit)=\"logIn()\" [formGroup]=\"loginForm\" class=\"loginForm\">\n                <div class=\"mb-0\">\n                  <div class=\"login-subheader\">Please enter a new password below.</div>\n                  <input type=\"password\" name=\"password\" placeholder=\"New Password\" nbInput required formControlName=\"password\" class=\"formWidth loginInput\">\n                  <p class=\"error\">&nbsp;\n                    <span *ngIf=\"loginForm.controls.password.touched && loginForm.controls.password.invalid\" class=\"errorMessage\">{{showError(loginForm.controls.password)}}</span>\n                  </p>\n                </div>\n                <div class=\"my-0\">\n                  <input type=\"password\" name=\"confirmpassword\" placeholder=\"Confirm Password\" nbInput required\n                         formControlName=\"confirmpassword\" class=\"formWidth loginInput\">\n                  <p class=\"error\">&nbsp;\n                    <span *ngIf=\"loginForm.controls.confirmpassword.touched && loginForm.controls.confirmpassword.invalid\" class=\"errorMessage\">{{showError(loginForm.controls.confirmpassword)}}</span>\n                  </p>\n                  <p class=\"text-danger\">{{errMsg}}</p>\n                  <p class=\"text-success\">{{successMsg}}</p>\n                </div>\n                <button nbButton fullWidth type=\"submit\" size=\"small\" status=\"success\"\n                        [disabled]=\"loginForm.disabled\" class=\"signin-btn\">Submit</button>\n              </form>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"login-right\">\n          <div class=\"login-right-inner\">\n            <img class=\"laptop-phone\" src=\"https://cdn.shopify.com/s/files/1/0049/3102/7015/files/laptop_iphone_2_2167351e-c454-4048-8c66-0952edf9dee4.png?8921\"/>\n            <img class=\"login-map\" src=\"https://cdn.shopify.com/s/files/1/0049/3102/7015/files/wolrd-map-t.png?5941\"/>\n          </div>\n        </div>\n\n      </nb-card-body>\n    </nb-card>\n  </nb-layout-column>\n</nb-layout>\n"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginCard {\n  width: 330px; }\n\n.error {\n  color: #ff386a;\n  font-size: .5em;\n  margin-top: 4px;\n  margin-bottom: 4px; }\n\n.unauthorized {\n  height: 40px; }\n\n.wholeScreen {\n  width: 100%;\n  height: 100%; }\n\n.login-header {\n  font-size: 1em;\n  margin-bottom: 60px;\n  font-weight: 500; }\n\n.login-logo {\n  width: 20%;\n  max-width: 1000px; }\n\n.login-left {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center; }\n\n@media (min-width: 768px) {\n    .login-left {\n      width: 50%; } }\n\n.one-half-login {\n  width: 100%;\n  margin: 0 auto; }\n\n@media (max-width: 768px) {\n    .one-half-login {\n      width: 50%;\n      display: -webkit-box;\n      display: flex; } }\n\n.login-right {\n  width: 50%;\n  height: 100%;\n  background-image: -webkit-gradient(linear, left top, right top, from(#a361ff), to(#6f77ff));\n  background-image: linear-gradient(to right, #a361ff, #6f77ff);\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n  position: relative; }\n\n@media (min-width: 768px) {\n    .login-right {\n      width: 100%;\n      display: -webkit-box;\n      display: flex; } }\n\n.laptop-phone {\n  position: absolute;\n  width: 60%;\n  /* centering */\n  position: absolute;\n  text-align: center;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%); }\n\n.login-map {\n  width: 100%; }\n\n.wholeScreen {\n  background-color: #fff;\n  background: #fff;\n  margin-bottom: 0;\n  border-radius: 0; }\n\n.loginForm {\n  width: 50%;\n  margin: 0 auto; }\n\n.login-header {\n  margin-top: 10px;\n  color: #3d4246; }\n\n.formWidth {\n  width: 100%;\n  background-color: #fff;\n  color: #000; }\n\n.formWidth:focus {\n  background-color: #fff; }\n\n.formWidth::-webkit-input-placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #949494; }\n\n.formWidth::-moz-placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #949494; }\n\n.formWidth::-ms-input-placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #949494; }\n\n.formWidth::placeholder {\n  /* Firefox, Chrome, Opera */\n  color: #949494; }\n\n.formWidth:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #949494; }\n\n.formWidth::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #949494; }\n\n.signin-btn {\n  background-image: -webkit-gradient(linear, left top, right top, from(#a361ff), to(#6f77ff));\n  background-image: linear-gradient(to right, #a361ff, #6f77ff); }\n\n.signin-btn:hover {\n  opacity: .7; }\n\n.login-subheader {\n  font-size: .7em;\n  color: #69727b;\n  margin-bottom: 1rem; }\n\n.forgotPasswordWrapper {\n  display: none;\n  color: #69727b; }\n\n.submit-top {\n  margin-top: 16px; }\n\n.cancelLink {\n  color: #69727b;\n  margin-top: 0;\n  cursor: pointer;\n  font-size: .9rem;\n  font-weight: 500; }\n\n.purple-font {\n  cursor: pointer; }\n\n.purple-font:hover {\n  text-decoration: none;\n  color: #00f9a6; }\n\n.login-left-inner, .enterUsername, .login-subheader, .error, .signin-btn, .unauthorized, .login-labels {\n  font-weight: 500; }\n\n.loginInput {\n  border: 1px solid #949494; }\n\n.loginInput::-webkit-input-placeholder {\n  font-weight: 500; }\n\n.loginInput::-moz-placeholder {\n  font-weight: 500; }\n\n.loginInput::-ms-input-placeholder {\n  font-weight: 500; }\n\n.loginInput::placeholder {\n  font-weight: 500; }\n\n.purple-font {\n  font-size: inherit;\n  font-weight: 500; }\n\n.errorMessage {\n  font-size: 1.25em; }\n\n.signin-btn {\n  margin-bottom: 19.5px;\n  border-radius: 15px !important;\n  border: 0px solid transparent;\n  padding: 10px 18px !important;\n  line-height: 1.8 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFDRDtFQUNFLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsV0FBVTtFQUNWLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1oscUJBQWE7RUFBYixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QjtFQUN2Qiw2QkFBc0I7RUFBdEIsOEJBQXNCO1VBQXRCLHVCQUFzQjtFQUN0QixtQkFBa0IsRUFJbkI7O0FDbUJHO0lEN0JKO01BUUksV0FBVSxFQUViLEVBQUE7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsZUFBYyxFQUtmOztBQUpDO0lBSEY7TUFJSSxXQUFVO01BQ1YscUJBQWE7TUFBYixjQUFhLEVBRWhCLEVBQUE7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsYUFBWTtFQUNaLDRGQUE4RDtFQUE5RCw4REFBOEQ7RUFDOUQsY0FBYTtFQUNiLHlCQUF1QjtVQUF2Qix3QkFBdUI7RUFDdkIsNkJBQXNCO0VBQXRCLDhCQUFzQjtVQUF0Qix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUtuQjs7QUNIRztJRFZKO01BVUksWUFBVztNQUNYLHFCQUFhO01BQWIsY0FBYSxFQUVoQixFQUFBOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixlQUFlO0VBQUMsbUJBQWtCO0VBQUUsbUJBQWtCO0VBQUUsVUFBUztFQUFFLFNBQVE7RUFBRSxpQ0FBZ0M7RUFBRSx5Q0FBd0M7RUFBRSxzQ0FBcUM7RUFBRSxxQ0FBb0M7RUFBRSxvQ0FBbUMsRUFDMVE7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSx1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsZUFBYyxFQUNmOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZjs7QUFDRDtFQUNFLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsWUFBVyxFQUNaOztBQUNEO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUNEO0VBQTBCLDRCQUE0QjtFQUNwRCxlQUFjLEVBQ2Y7O0FBRkQ7RUFBMEIsNEJBQTRCO0VBQ3BELGVBQWMsRUFDZjs7QUFGRDtFQUEwQiw0QkFBNEI7RUFDcEQsZUFBYyxFQUNmOztBQUZEO0VBQTBCLDRCQUE0QjtFQUNwRCxlQUFjLEVBQ2Y7O0FBRUQ7RUFBbUMsNkJBQTZCO0VBQzlELGVBQWMsRUFDZjs7QUFFRDtFQUFvQyxvQkFBb0I7RUFDdEQsZUFBYyxFQUNmOztBQUNEO0VBQ0UsNEZBQTZEO0VBQTdELDhEQUE2RCxFQUM5RDs7QUFDRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLGNBQWE7RUFDYixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFGRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFGRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFGRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxzQkFBcUI7RUFDckIsK0JBQThCO0VBQzlCLDhCQUE2QjtFQUM3Qiw4QkFBNkI7RUFDN0IsNEJBQTJCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvX2Z1bmN0aW9ucy5zY3NzJztcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2Nzcyc7XG5cbi5sb2dpbkNhcmQge1xuICB3aWR0aDogMzMwcHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjZmYzODZhO1xuICBmb250LXNpemU6IC41ZW07XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4udW5hdXRob3JpemVkIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLndob2xlU2NyZWVuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5sb2dpbi1oZWFkZXIge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5sb2dpbi1sb2dvIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG59XG4ubG9naW4tbGVmdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG4ub25lLWhhbGYtbG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4ubG9naW4tcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2EzNjFmZiAsICM2Zjc3ZmYpO1xuICBkaXNwbGF5OiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobWQpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4ubGFwdG9wLXBob25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjAlO1xuICAvKiBjZW50ZXJpbmcgKi8gcG9zaXRpb246IGFic29sdXRlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGxlZnQ6IDUwJTsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmxvZ2luLW1hcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndob2xlU2NyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5sb2dpbkZvcm0ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5sb2dpbi1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogIzNkNDI0Njtcbn1cbi5mb3JtV2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG59XG4uZm9ybVdpZHRoOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5mb3JtV2lkdGg6OnBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCwgQ2hyb21lLCBPcGVyYSAqL1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cblxuLmZvcm1XaWR0aDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cblxuLmZvcm1XaWR0aDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgY29sb3I6ICM5NDk0OTQ7XG59XG4uc2lnbmluLWJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2EzNjFmZiwgIzZmNzdmZik7XG59XG4uc2lnbmluLWJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IC43O1xufVxuLmxvZ2luLXN1YmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogLjdlbTtcbiAgY29sb3I6ICM2OTcyN2I7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZm9yZ290UGFzc3dvcmRXcmFwcGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICM2OTcyN2I7XG59XG4uc3VibWl0LXRvcCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uY2FuY2VsTGluayB7XG4gIGNvbG9yOiAjNjk3MjdiO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHVycGxlLWZvbnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHVycGxlLWZvbnQ6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDBmOWE2O1xufVxuLmxvZ2luLWxlZnQtaW5uZXIsIC5lbnRlclVzZXJuYW1lLCAubG9naW4tc3ViaGVhZGVyLCAuZXJyb3IsIC5zaWduaW4tYnRuLCAudW5hdXRob3JpemVkLCAubG9naW4tbGFiZWxzIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5sb2dpbklucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk0OTQ5NDtcbn1cbi5sb2dpbklucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHVycGxlLWZvbnQge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZXJyb3JNZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG4uc2lnbmluLWJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDE5LjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweCAxOHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjggIWltcG9ydGFudDtcbn1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");






var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(_dataservice, _router, router, route, _configuration) {
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this._configuration = _configuration;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'confirmpassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.resetToken = this.route.snapshot.paramMap.get('reset_token');
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.checkResetToken(this.resetToken);
    };
    ResetPasswordComponent.prototype.checkResetToken = function (resetToken) {
        var _this = this;
        this.isShow = true;
        this._dataservice
            .checkResetToken(this._configuration.CheckResetTokenApi, resetToken)
            .subscribe(function (resp) {
            if (resp.status === 'SUCCESS' && resp.is_valid === true) {
                _this.isShow = false;
                return;
            }
        }, function (error) {
        }, function () {
        });
    };
    ResetPasswordComponent.prototype.logIn = function () {
        var _this = this;
        if (this.loginForm.valid) {
            var password = this.loginForm.controls['password'].value;
            var confirmpassword = this.loginForm.controls['confirmpassword'].value;
            if (password === confirmpassword) {
                var data = {
                    reset_token: this.resetToken,
                    new_password: password,
                    new_password_confirmation: confirmpassword
                };
                this._dataservice
                    .resetPassword(this._configuration.ResetPasswordApi, data)
                    .subscribe(function (resp) {
                    if (resp.status === _this._configuration.ResponseStatusError) {
                        _this.errMsg = resp.message;
                        return;
                    }
                    _this.successMsg = resp.message;
                }, function (error) {
                    _this.errMsg = "Something went wrng, Please try again later!";
                }, function () {
                });
            }
            else {
                this.errMsg = "Confirm password does not match!";
            }
        }
        else {
            this.loginForm.controls.confirmpassword.markAsTouched();
            this.loginForm.controls.password.markAsTouched();
        }
    };
    ResetPasswordComponent.prototype.showError = function (input) {
        if (input.errors.required) {
            return this._configuration.FieldRequired;
        }
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/pages/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/pages/reset-password/reset-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_5__["Configuration"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var routes = [
    { path: ':reset_token', component: _reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"] }
];
var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"], _reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSpinnerModule"]
            ]
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reset-password-reset-password-module.js.map