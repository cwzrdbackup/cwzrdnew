(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-book-book-module~pages-examination-examination-module"],{

/***/ "./src/app/components/preview-certificate/preview-certificate.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/preview-certificate/preview-certificate.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card class=\"p-0 newShadow\">\n  <div class=\"closeBtnModal\" (click)=\"closeModal()\">\n    <i class=\"control-icon nb-close\"></i>\n  </div>\n  <nb-card-body [nbSpinner]=\"loading\" nbSpinnerMessage=\"\" nbSpinnerStatus=\"success\" class=\"p-0\">\n    <pdf-viewer *ngIf=\"!loading\" [src]=\"pdfData\" [show-all]=\"true\"></pdf-viewer>\n    <svg\n      (click)=\"downloadPdf()\"\n      fill=\"#fff\" class=\"link downloadSvg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"\n      viewBox=\"0 0 24 24\">\n      <path\n        d=\"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z\" />\n      <path fill=\"none\" d=\"M0 0h24v24H0z\" /></svg>\n      <i (click)=\"deleteDocument()\" class=\"fas fa-trash-alt delete-icon link\"></i>\n  </nb-card-body>\n</nb-card>\n\n<div class=\"modal fade\" id=\"alertModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content alert-modal-content\">\n          <div class=\"modal-body text-center\">\n              <button  type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <div class=\"pt-5 pb-5\">\n                  <div>\n                      {{alertModalMessage}}\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/preview-certificate/preview-certificate.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/preview-certificate/preview-certificate.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nb-card {\n  box-shadow: none;\n  background: none; }\n  nb-card nb-card-body svg, nb-card nb-card-body i {\n    background: none; }\n  .newShadow {\n  min-width: 50vw;\n  max-width: 96vw;\n  height: 90vh;\n  position: relative; }\n  .closeBtnModal {\n  cursor: pointer;\n  position: absolute;\n  color: white;\n  text-align: right;\n  font-size: 25px;\n  top: -30px;\n  right: 0; }\n  .downloadSvg, .delete-icon {\n  height: 18px;\n  position: absolute;\n  top: 3%;\n  right: 0%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: black; }\n  @media (min-width: 768px) {\n    .downloadSvg, .delete-icon {\n      height: 24px; } }\n  .delete-icon {\n  right: 7%;\n  top: 3.4%; }\n  @media (min-width: 1600px) {\n    .delete-icon {\n      right: 9%; } }\n  @media (min-width: 1800px) {\n    .delete-icon {\n      right: 13%; } }\n  @media (min-width: 2000px) {\n    .delete-icon {\n      right: 16%; } }\n  @media (min-width: 2200px) {\n    .delete-icon {\n      right: 21%; } }\n  @media (min-width: 2400px) {\n    .delete-icon {\n      right: 25%; } }\n  @media (min-width: 2600px) {\n    .delete-icon {\n      right: 29%; } }\n  @media (min-width: 2800px) {\n    .delete-icon {\n      right: 33%; } }\n  @media (min-width: 3100px) {\n    .delete-icon {\n      right: 38%; } }\n  .downloadSvg {\n  right: 4%; }\n  @media (min-width: 1600px) {\n    .downloadSvg {\n      right: 6%; } }\n  @media (min-width: 1800px) {\n    .downloadSvg {\n      right: 10%; } }\n  @media (min-width: 2000px) {\n    .downloadSvg {\n      right: 14%; } }\n  @media (min-width: 2200px) {\n    .downloadSvg {\n      right: 18%; } }\n  @media (min-width: 2400px) {\n    .downloadSvg {\n      right: 22%; } }\n  @media (min-width: 2600px) {\n    .downloadSvg {\n      right: 26%; } }\n  @media (min-width: 2800px) {\n    .downloadSvg {\n      right: 30%; } }\n  @media (min-width: 3100px) {\n    .downloadSvg {\n      right: 35%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvc3JjL2FwcC9jb21wb25lbnRzL3ByZXZpZXctY2VydGlmaWNhdGUvcHJldmlldy1jZXJ0aWZpY2F0ZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9vc2Nhci9Eb3dubG9hZHMvRnJvbnRlbmRfVjMvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFPbkI7RUFURDtJQU1ZLGlCQUFnQixFQUNuQjtFQUlUO0VBQ0ksZ0JBQWU7RUFDZixnQkFBZTtFQUNmLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7RUFFRDtFQUNJLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixXQUFVO0VBQ1YsU0FBUSxFQUNYO0VBR0Q7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFFBQU87RUFDUCxVQUFTO0VBQ1QseUNBQWdDO1VBQWhDLGlDQUFnQztFQUNoQyx3QkFBdUIsRUFLMUI7RUNnQkc7SUQzQko7TUFTUSxhQUFZLEVBRW5CLEVBQUE7RUFFRDtFQUNJLFVBQVM7RUFDVCxVQUFTLEVBeUJaO0VBeEJHO0lBSEo7TUFJUSxVQUFTLEVBdUJoQixFQUFBO0VBckJHO0lBTko7TUFPUSxXQUFVLEVBb0JqQixFQUFBO0VBbEJHO0lBVEo7TUFVUSxXQUFVLEVBaUJqQixFQUFBO0VBZkc7SUFaSjtNQWFRLFdBQVUsRUFjakIsRUFBQTtFQVpHO0lBZko7TUFnQlEsV0FBVSxFQVdqQixFQUFBO0VBVEc7SUFsQko7TUFtQlEsV0FBVSxFQVFqQixFQUFBO0VBTkc7SUFyQko7TUFzQlEsV0FBVSxFQUtqQixFQUFBO0VBSEc7SUF4Qko7TUF5QlEsV0FBVSxFQUVqQixFQUFBO0VBRUQ7RUFDSSxVQUFTLEVBeUJaO0VBeEJHO0lBRko7TUFHUSxVQUFTLEVBdUJoQixFQUFBO0VBckJHO0lBTEo7TUFNUSxXQUFVLEVBb0JqQixFQUFBO0VBbEJHO0lBUko7TUFTUSxXQUFVLEVBaUJqQixFQUFBO0VBZkc7SUFYSjtNQVlRLFdBQVUsRUFjakIsRUFBQTtFQVpHO0lBZEo7TUFlUSxXQUFVLEVBV2pCLEVBQUE7RUFURztJQWpCSjtNQWtCUSxXQUFVLEVBUWpCLEVBQUE7RUFORztJQXBCSjtNQXFCUSxXQUFVLEVBS2pCLEVBQUE7RUFIRztJQXZCSjtNQXdCUSxXQUFVLEVBRWpCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByZXZpZXctY2VydGlmaWNhdGUvcHJldmlldy1jZXJ0aWZpY2F0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9fZnVuY3Rpb25zLnNjc3MnO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzJztcblxubmItY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuXG4gICAgbmItY2FyZC1ib2R5IHtcbiAgICAgICAgc3ZnLCBpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5uZXdTaGFkb3cge1xuICAgIG1pbi13aWR0aDogNTB2dztcbiAgICBtYXgtd2lkdGg6IDk2dnc7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNsb3NlQnRuTW9kYWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0b3A6IC0zMHB4O1xuICAgIHJpZ2h0OiAwO1xufVxuXG5cbi5kb3dubG9hZFN2ZywgLmRlbGV0ZS1pY29uIHtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMyU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgfVxufVxuXG4uZGVsZXRlLWljb24ge1xuICAgIHJpZ2h0OiA3JTtcbiAgICB0b3A6IDMuNCU7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgICAgICByaWdodDogOSU7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcbiAgICAgICAgcmlnaHQ6IDEzJTtcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgICAgICByaWdodDogMTYlO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMjIwMHB4KSB7XG4gICAgICAgIHJpZ2h0OiAyMSU7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAyNDAwcHgpIHtcbiAgICAgICAgcmlnaHQ6IDI1JTtcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDI2MDBweCkge1xuICAgICAgICByaWdodDogMjklO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMjgwMHB4KSB7XG4gICAgICAgIHJpZ2h0OiAzMyU7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMTAwcHgpIHtcbiAgICAgICAgcmlnaHQ6IDM4JTtcbiAgICB9XG59XG5cbi5kb3dubG9hZFN2ZyB7XG4gICAgcmlnaHQ6IDQlO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgICAgICAgcmlnaHQ6IDYlO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XG4gICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAgICAgcmlnaHQ6IDE0JTtcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDIyMDBweCkge1xuICAgICAgICByaWdodDogMTglO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMjQwMHB4KSB7XG4gICAgICAgIHJpZ2h0OiAyMiU7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAyNjAwcHgpIHtcbiAgICAgICAgcmlnaHQ6IDI2JTtcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDI4MDBweCkge1xuICAgICAgICByaWdodDogMzAlO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzEwMHB4KSB7XG4gICAgICAgIHJpZ2h0OiAzNSU7XG4gICAgfVxufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/preview-certificate/preview-certificate.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/preview-certificate/preview-certificate.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PreviewCertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewCertificateComponent", function() { return PreviewCertificateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../pages/dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _pages_dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");







var PreviewCertificateComponent = /** @class */ (function () {
    function PreviewCertificateComponent(_dataservice, ref, sanitizer, http, toastrService, _configuration) {
        this._dataservice = _dataservice;
        this.ref = ref;
        this.sanitizer = sanitizer;
        this.http = http;
        this.toastrService = toastrService;
        this._configuration = _configuration;
        this.pdfSrc = null;
        this.cast = {};
        this.isCertitficatePdf = false;
        this.alertModalMessage = '';
        this.loading = true;
    }
    PreviewCertificateComponent.prototype.ngOnInit = function () {
        if (this.isCertitficatePdf) {
            this.retrieveCertificatePdf(this.pdfSrc);
        }
        else {
            this.retrievePdf(this.pdfSrc);
        }
    };
    PreviewCertificateComponent.prototype.closeModal = function (isDeleted) {
        if (isDeleted === void 0) { isDeleted = false; }
        this.ref.close(isDeleted);
    };
    PreviewCertificateComponent.prototype.deleteDocument = function () {
        var _this = this;
        this._dataservice.postCall("chapter/deleteNote", { 'id': this.cast.progressId, 'noteId': this.cast.id })
            .subscribe(function (response) {
            if (response.status === _this._configuration.ResponseStatusError) {
                _this.alertModalMessage = response.message;
                $('#alertModal').modal('show');
                return;
            }
            _this.toastrService.show(_this._configuration.DocumentDeleted, '', { status: _this._configuration.ToasterStatusSuccess,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition });
            _this.closeModal(true);
        }, function (error) {
            _this.toastrService.show(_this._configuration.ErrorFetchingResult, '', { status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition });
        }, function () {
        });
    };
    PreviewCertificateComponent.prototype.retrievePdf = function (url) {
        var _this = this;
        this.http.get(url, { responseType: 'arraybuffer' })
            .subscribe(function (file) {
            _this.pdfArrayBuffer = file;
            _this.pdfData = new Uint8Array(file);
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.toastrService.show(_this._configuration.ErrorFetchingResult, '', { status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition });
        }, function () {
        });
    };
    PreviewCertificateComponent.prototype.retrieveCertificatePdf = function (url) {
        var _this = this;
        var varr = { responseType: 'arraybuffer' };
        this.http.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + localStorage.getItem(this._configuration.AccessTokenKey)
            }), responseType: 'arraybuffer'
        }).subscribe(function (file) {
            _this.pdfArrayBuffer = file;
            _this.pdfData = new Uint8Array(file);
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.toastrService.show(_this._configuration.ErrorFetchingResult, '', { status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition });
        }, function () {
        });
    };
    PreviewCertificateComponent.prototype.downloadPdf = function () {
        var blob = new Blob([(this.pdfArrayBuffer)], { type: 'application/pdf' });
        var pdfDownloadUrl = window.URL.createObjectURL(blob);
        if (!this.dynamicDownload) {
            this.dynamicDownload = document.createElement('a');
        }
        var element = this.dynamicDownload;
        element.setAttribute('href', pdfDownloadUrl);
        element.setAttribute('download', 'document');
        var event = new MouseEvent('click');
        element.dispatchEvent(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PreviewCertificateComponent.prototype, "pdfSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PreviewCertificateComponent.prototype, "cast", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PreviewCertificateComponent.prototype, "isCertitficatePdf", void 0);
    PreviewCertificateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-preview-certificate',
            template: __webpack_require__(/*! ./preview-certificate.component.html */ "./src/app/components/preview-certificate/preview-certificate.component.html"),
            styles: [__webpack_require__(/*! ./preview-certificate.component.scss */ "./src/app/components/preview-certificate/preview-certificate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pages_dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"],
            _pages_dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__["Configuration"]])
    ], PreviewCertificateComponent);
    return PreviewCertificateComponent;
}());



/***/ }),

/***/ "./src/app/components/preview-certificate/preview-certificate.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/preview-certificate/preview-certificate.module.ts ***!
  \******************************************************************************/
/*! exports provided: PreviewCertificateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewCertificateModule", function() { return PreviewCertificateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nebular_theme_components_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme/components/dialog */ "./node_modules/@nebular/theme/components/dialog/index.js");
/* harmony import */ var _nebular_theme_components_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme/components/window */ "./node_modules/@nebular/theme/components/window/index.js");
/* harmony import */ var _nebular_theme_components_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme/components/card/card.module */ "./node_modules/@nebular/theme/components/card/card.module.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _preview_certificate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview-certificate.component */ "./src/app/components/preview-certificate/preview-certificate.component.ts");










var PreviewCertificateModule = /** @class */ (function () {
    function PreviewCertificateModule() {
    }
    PreviewCertificateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_preview_certificate_component__WEBPACK_IMPORTED_MODULE_9__["PreviewCertificateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _nebular_theme_components_dialog__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"].forChild(),
                _nebular_theme_components_window__WEBPACK_IMPORTED_MODULE_5__["NbWindowModule"].forChild(),
                _nebular_theme_components_card_card_module__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__["PdfViewerModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSpinnerModule"]
            ],
            exports: [_preview_certificate_component__WEBPACK_IMPORTED_MODULE_9__["PreviewCertificateComponent"]],
            entryComponents: [_preview_certificate_component__WEBPACK_IMPORTED_MODULE_9__["PreviewCertificateComponent"]],
        })
    ], PreviewCertificateModule);
    return PreviewCertificateModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-book-book-module~pages-examination-examination-module.js.map