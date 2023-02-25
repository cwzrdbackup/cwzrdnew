(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-examination-examination-module"],{

/***/ "./src/app/pages/examination/exam/exam.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/examination/exam/exam.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout class=\"layout-container\">\r\n    <nb-layout-header class=\"flex flexCenter platformHeader\">\r\n        <app-header></app-header>\r\n    </nb-layout-header>\r\n\r\n    <nb-layout-column class=\"f-w flex flexCenter\">\r\n        <nb-card class=\"questionCard col-12\">\r\n            <div style=\"margin:10% auto;\" *ngIf=\"sending\">\r\n                <div class=\"spinner\"></div>\r\n            </div>\r\n\r\n\r\n            <nb-card-header *ngIf=\"!sending\" class=\"px-0\">\r\n                <div class=\"examTitle\">{{_examTitle}}</div>\r\n                <div class=\"flex mb-3\">\r\n                    <span class=\"col-7 col-md-8 questionHeader mt-3\">\r\n                        Question {{ _attemptedQuestions + '/' + _totalQuestions }}\r\n                    </span>\r\n                    <span class=\"col-5 col-md-4 questionHeader mt-3\">\r\n                        Your score\r\n                    </span>\r\n                </div>\r\n                <div class=\"flex\">\r\n                    <nb-progress-bar [value]=\"percent()\" class=\"col-7 col-md-8 pr-5\" status=\"success\"></nb-progress-bar>\r\n                    <div class=\"flex col-5 col-md-4\">\r\n                        <span class=\"col-6 p-0 flex flex-vertical small-text exam-result\" style=\"color: #00d977;\">\r\n                          <span class=\"nb-checkmark-circle icon questionHeader ss_icon_question\"></span>\r\n                          <span class=\"questionHeader\">{{ _correctAnswers }}</span>\r\n                        </span>\r\n                        <span class=\"col-6 p-0 flex flex-vertical small-text exam-result\" style=\"color: #ff386a;\">\r\n                          <span class=\"nb-close-circled icon questionHeader ss_icon_question\"></span>\r\n                          <span class=\"questionHeader\">{{ _wrongAnswers }}</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </nb-card-header>\r\n\r\n            <nb-card-body *ngIf=\"!sending\">\r\n                <!-- *ngIf=\"!showResult; else resultTemplate\" -->\r\n\r\n                <ng-container *ngIf=\"displayNext() && !showResult\">\r\n                    <h4 class=\"questionText\">{{ _currentQuestion.question }}</h4>\r\n                    <button *ngFor=\"let option of _currentQuestion.options\" nbButton outline fullWidth shape=\"round\" status=\"primary\" class=\"answerContainer\"\r\n                            (click)=\"answer(option.id)\">{{option.text}}</button>\r\n\r\n                </ng-container>\r\n                <div *ngIf=\"showResult && displayNext()\">\r\n                    <div style=\"min-height: 332px;justify-content: space-evenly;\" class=\"d-flex flex-column align-items-center\">\r\n                        <h3 [ngClass]=\"{'green': _correct.isCorrect, 'red': !_correct.isCorrect}\">{{ _correct.isCorrect ? \"Correct!\" : \"Incorrect!\" }}</h3>\r\n                        <p *ngIf=\"!_correct.isCorrect\">Correct Answer is</p>\r\n                        <p *ngIf=\"!_correct.isCorrect\"> {{ _correct.correctAnswer.text }}</p>\r\n                        <button status=\"primary\" nbButton (click)=\"nextQuestion()\">Next Question</button>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"!displayNext()\">\r\n                    <div style=\"min-height: 332px;justify-content: space-evenly;\" class=\"d-flex flex-column align-items-center\">\r\n                        <h3 *ngIf=\"doneQuestions == totalQuestions\" [ngClass]=\"{'green':true}\">Exam completed!</h3>\r\n                        <h3 *ngIf=\"allExamsCompleted\" [ngClass]=\"{'green':true}\">Congratulations You have completed all Exams</h3>\r\n                        <div class=\"flex-vertical\">\r\n                            <button *ngIf=\"doneQuestions == totalQuestions\" status=\"primary\" class=\"mr-4\" nbButton (click)=\"restartExam()\">\r\n                                Restart Exam\r\n                            </button>\r\n                            <button *ngIf=\"nextExamId > 0 && !allExamsCompleted && doneQuestions == totalQuestions\" [routerLink]=\"'/examination/'+nextExamId\" status=\"primary\" nbButton>\r\n                                Next Exam\r\n                            </button>\r\n                        </div>                        \r\n                        <h3 *ngIf=\"this._questionList.length <= 0 && doneQuestions !== totalQuestions\" [ngClass]=\"{'red':true}\">Questions are not available</h3>\r\n                    </div>\r\n                </div>\r\n\r\n            </nb-card-body>\r\n\r\n            <nb-card-footer class='footer'>\r\n                <button routerLink=\"/examination\" status=\"primary\" nbButton class=\"center-button\">\r\n                    Go Back\r\n                </button>\r\n            </nb-card-footer>\r\n\r\n        </nb-card>\r\n    </nb-layout-column>\r\n\r\n    <nb-layout-footer class=\"footer-main\">\r\n        &copy; 2021 Powered by <a target=\"_blank\" class=\"wzrdgroup-link\" href=\"http://wzrdgroup.com/\">WZRD Group</a>\r\n    </nb-layout-footer>\r\n</nb-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/examination/exam/exam.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/examination/exam/exam.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/pages/examination/exam/exam.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/examination/exam/exam.component.ts ***!
  \**********************************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var src_app_components_preview_certificate_preview_certificate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/preview-certificate/preview-certificate.component */ "./src/app/components/preview-certificate/preview-certificate.component.ts");








var ExamComponent = /** @class */ (function () {
    function ExamComponent(toast, _dataservice, _router, router, route, _passingDataservice, dialogService, _configuration) {
        this.toast = toast;
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this._passingDataservice = _passingDataservice;
        this.dialogService = dialogService;
        this._configuration = _configuration;
        this.questions = [
            { number: 1, answer: 'A' },
            { number: 2, answer: 'B' },
            { number: 3, answer: 'C' },
            { number: 4, answer: 'D' },
            { number: 5, answer: 'A' },
            { number: 6, answer: 'A' },
            { number: 7, answer: 'C' },
            { number: 8, answer: 'D' },
            { number: 9, answer: 'C' },
            { number: 10, answer: 'B' },
        ];
        this.index = 0;
        this.showResult = false;
        this.result = {
            correct: false,
            answer: 'JEdi govna'
        };
        this.answers = {
            corect: 0,
            wrong: 0
        };
        this.nextExamId = 0;
        this.allExamsCompleted = false;
    }
    ExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.nextExamId = 0;
            _this.allExamsCompleted = false;
            _this.index = 0;
            _this.showResult = false;
            _this.initData();
        });
        this.initData();
    };
    ExamComponent.prototype.initData = function () {
        var _this = this;
        this.baseURL = this._configuration.Server;
        this.sending = true;
        this.bookPages = '<img class="col-6" [src]="images[0]" (load)="doSomething(\'left\')" /><img class="col-6" [src]="images[1]" (load)="doSomething(\'right\')" />';
        this.exam = this.route.snapshot.paramMap.get('exam');
        var _usermodel = JSON.stringify({ examId: this.exam });
        this._dataservice
            .postCall(this._configuration.GetQuestionsByExamIdApi, _usermodel)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.sending = false;
                _this.toast.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            setTimeout(function () {
                _this._questionList = resp.questions;
                _this._attemptedQuestions = resp.doneQuestions;
                _this._correctAnswers = resp.correctAnswers;
                _this._wrongAnswers = _this._attemptedQuestions - _this._correctAnswers;
                _this._totalQuestions = resp.totalQuestions;
                _this._doneQuestionList = resp.doneQuestionIds;
                _this._examName = resp.examName;
                _this._examTitle = resp.title;
                // this._currentQuestion=this._questionList[0];
                _this._filteredQuestions = _this._questionList.filter(function (e) {
                    return this.indexOf(e) < 0;
                }, _this._doneQuestionList);
                _this._currentQuestion = _this._filteredQuestions[_this.index];
                if (!_this.displayNext()) {
                    _this.getNextExam();
                }
                else {
                    _this.sending = false;
                }
            }, 1000);
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingContent, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.sending = false;
        }, function () {
        });
    };
    ExamComponent.prototype.previewDownloadPdf = function (event, pdfSrc) {
        this.dialogService.open(src_app_components_preview_certificate_preview_certificate_component__WEBPACK_IMPORTED_MODULE_7__["PreviewCertificateComponent"], {
            context: { pdfSrc: pdfSrc, isCertitficatePdf: true }
        });
    };
    ExamComponent.prototype.restartExam = function () {
        var _this = this;
        // console.log('Restart Exam Clicked!!!');
        this.sending = true;
        this.exam = this.route.snapshot.paramMap.get('exam');
        var _examModel = JSON.stringify({ examId: this.exam });
        this._dataservice
            .postCall(this._configuration.RestartExamByIdApi, _examModel)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.sending = false;
                _this.toast.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            setTimeout(function () {
                _this._router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
                _this._router.onSameUrlNavigation = 'reload';
                _this._router.navigate(['/examination/' + _this.exam]).then();
                _this.sending = false;
            }, 1000);
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.sending = false;
        }, function () {
        });
    };
    /*reloadComponent() {
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate(['/same-route']);
    }*/
    ExamComponent.prototype.nextQuestion = function () {
        if (this.index < this._totalQuestions) {
            this.showResult = false;
        }
    };
    ExamComponent.prototype.answer = function (answer) {
        var _this = this;
        this.sending = true;
        var _usermodel = JSON.stringify({ examId: this.exam, questionId: this._currentQuestion.id, optionSelected: answer });
        this.sending = true;
        this._dataservice
            .postCall(this._configuration.AnswerQuestionApi, _usermodel)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.sending = false;
                _this.toast.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            console.log(resp);
            _this._correct = resp;
            if (resp.achievement) {
                for (var i = 0; i < resp.achievement; i++) {
                    _this.toast.info(resp.achievement[i].achievement, 'Achievement');
                }
            }
            if (resp.isCorrect) {
                _this._correctAnswers = _this._correctAnswers + 1;
                _this._attemptedQuestions = _this._attemptedQuestions + 1;
                _this.index++;
                _this.showResult = true;
            }
            else {
                _this._attemptedQuestions = _this._attemptedQuestions + 1;
                _this._wrongAnswers = _this._wrongAnswers + 1;
                _this.index++;
                _this.showResult = true;
            }
            if (resp.certificateAvailable) {
                _this.previewDownloadPdf(null, _this.baseURL + 'getUserCertificate');
            }
            //   this._exams=resp.examinations;
            // this._percent=resp.average;
            _this._currentQuestion = _this._filteredQuestions[_this.index];
            if (!_this.displayNext()) {
                _this.getNextExam();
            }
            else {
                _this.sending = false;
            }
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.sending = false;
        }, function () {
        });
    };
    ExamComponent.prototype.percent = function () {
        if (this._attemptedQuestions) {
            return (this._attemptedQuestions / this._questionList.length) * 100;
        }
        else {
            return 0;
        }
    };
    ExamComponent.prototype.getNextExam = function () {
        var _this = this;
        this._dataservice
            .getAll(this._configuration.GetNextExamApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.sending = false;
                _this.toast.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            if (resp.nextExam) {
                _this.nextExamId = resp.examId;
            }
            if (resp.completed) {
                _this.allExamsCompleted = true;
            }
            _this.sending = false;
        }, function (error) {
            console.log(error);
            _this.toast.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.sending = false;
        }, function () {
        });
    };
    ExamComponent.prototype.displayNext = function () {
        return (this._attemptedQuestions - this._totalQuestions) !== 0;
    };
    ExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-exam',
            template: __webpack_require__(/*! ./exam.component.html */ "./src/app/pages/examination/exam/exam.component.html"),
            styles: [__webpack_require__(/*! ./exam.component.scss */ "./src/app/pages/examination/exam/exam.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"], _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogService"], _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_1__["Configuration"]])
    ], ExamComponent);
    return ExamComponent;
}());



/***/ }),

/***/ "./src/app/pages/examination/examination.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/examination/examination.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout class=\"layout-container\">\r\n    <nb-layout-header class=\"flex flexCenter platformHeader\">\r\n        <app-header></app-header>\r\n    </nb-layout-header>\r\n    <nb-layout-column class=\"p-0\">\r\n\r\n        <div class=\"chapterInformation\">\r\n            <div class=\"gradientBG\"></div>\r\n            <div class=\"chapterInfoLeft p-3 p-md-4 p-lg-5\">\r\n                <div class=\"title2 mb-2 mb-md-3 mb-lg-4\">Examinations</div>\r\n                <div class=\"title3 mb-2 mb-md-3 mb-lg-4\">{{ examTotal }} exams</div>\r\n                <div class=\"title4 mb-3 mb-md-4 mb-lg-5\">Squeeze in some extra-curricular activities with 450+ exam questions on everything related to crypto. The questions cover\r\n                    a large variety of topics that you’ll find within the book and video segments of the course, allowing a fun combination of examinations between your\r\n                    periods of learning.\r\n                </div>\r\n                <div *ngIf=\"_lastExamId\" class=\"watchContainer\" [routerLink]=\"'/examination/' + _lastExamId\">Complete now</div>\r\n                <div *ngIf=\"!_lastExamId\" class=\"watchContainer\">Complete now</div>\r\n            </div>\r\n            <div class=\"chapterInfoRight\">\r\n                <div class=\"progressAbsolute\">\r\n                    <nb-progress-bar [value]=\"_percent\" class=\"progressBar\">\r\n                        <div class=\"percentageNumber\" [ngClass]=\"{'percentUnderTen' : _percent < 10}\">\r\n                            {{_percent | number:'1.0-0'}}%\r\n                        </div>\r\n                    </nb-progress-bar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"px-3 px-md-5\">\r\n            <div class=\"flex\" style=\"margin: 0 -16px 20px -16px\">\r\n                <div *ngFor=\"let exam of _exams\" class=\"col-12 col-md-4 col-lg-3 px-3 pt-3\">\r\n                    <nb-card style=\"position:relative; overflow: hidden\" class=\"cardShadow mb-2 mb-md-3\">\r\n                        <i *ngIf=\"exam?.isPadLock\" class=\"fa fa-lock overlayLock\"></i>\r\n                        <div class=\"Completed\" *ngIf=\"exam.status==='Completed';\">Complete</div>\r\n                        <div class=\"Partial\" *ngIf=\"exam.status!='Completed';\">Incomplete</div>\r\n                        <img *ngIf=\"!exam?.isPadLock\" src=\"https://d308fakbqebk7c.cloudfront.net/examinations/Exam{{exam.id}}.png\" alt=\"image\" class=\"card-img\" [routerLink]=\"'/examination/' + exam.id\">\r\n                        <img *ngIf=\"exam?.isPadLock\" src=\"https://d308fakbqebk7c.cloudfront.net/examinations/Exam{{exam.id}}.png\" alt=\"image\" class=\"card-img\">\r\n                        <div class=\"bottomContainer\">\r\n                            <div class=\"lessonTitle\">{{exam.name}}</div>\r\n                        </div>\r\n                    </nb-card>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nb-layout-column>\r\n\r\n    <nb-layout-footer class=\"footer-main\">\r\n        &copy; 2021 Powered by <a target=\"_blank\" class=\"wzrdgroup-link\" href=\"http://wzrdgroup.com/\">WZRD Group</a>\r\n    </nb-layout-footer>\r\n\r\n</nb-layout>\r\n"

/***/ }),

/***/ "./src/app/pages/examination/examination.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/examination/examination.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/app/pages/examination/examination.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/examination/examination.component.ts ***!
  \************************************************************/
/*! exports provided: ExaminationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationComponent", function() { return ExaminationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dataservice/app.constant.component */ "./src/app/pages/dataservice/app.constant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataservice/apiservice.component */ "./src/app/pages/dataservice/apiservice.component.ts");
/* harmony import */ var _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dataservice/utility.dataservice.component */ "./src/app/pages/dataservice/utility.dataservice.component.ts");







var ExaminationComponent = /** @class */ (function () {
    function ExaminationComponent(_dataservice, _router, router, route, _passingDataservice, toastrService, _configuration) {
        this._dataservice = _dataservice;
        this._router = _router;
        this.router = router;
        this.route = route;
        this._passingDataservice = _passingDataservice;
        this.toastrService = toastrService;
        this._configuration = _configuration;
        this.sending = false;
    }
    ExaminationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._passingDataservice._currentUser);
        // const _usermodel = JSON.stringify({userId: this._passingDataservice._currentUser.userId});
        this.sending = true;
        this._dataservice
            .getAll(this._configuration.GetExaminationsListApi)
            .subscribe(function (resp) {
            if (resp.status === _this._configuration.ResponseStatusError) {
                _this.sending = false;
                _this.toastrService.show(_this._configuration.ErrorFetchingContent, '', {
                    status: _this._configuration.ToasterStatusError,
                    duration: _this._configuration.ToasterDuration,
                    position: _this._configuration.ToasterPosition
                });
                return;
            }
            setTimeout(function () {
                _this._exams = resp.examinations;
                _this.examTotal = _this._exams.length;
                _this._percent = resp.average || 0;
                _this._lastExamId = resp.lastExamId;
                _this.sending = false;
            }, 1000);
        }, function (error) {
            console.log(error);
            _this.toastrService.show(_this._configuration.ErrorFetchingResult, '', {
                status: _this._configuration.ToasterStatusError,
                duration: _this._configuration.ToasterDuration,
                position: _this._configuration.ToasterPosition
            });
            _this.sending = false;
        }, function () {
        });
    };
    ExaminationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-examination',
            template: __webpack_require__(/*! ./examination.component.html */ "./src/app/pages/examination/examination.component.html"),
            styles: [__webpack_require__(/*! ./examination.component.scss */ "./src/app/pages/examination/examination.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_apiservice_component__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _dataservice_utility_dataservice_component__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"],
            _dataservice_app_constant_component__WEBPACK_IMPORTED_MODULE_2__["Configuration"]])
    ], ExaminationComponent);
    return ExaminationComponent;
}());



/***/ }),

/***/ "./src/app/pages/examination/examination.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/examination/examination.module.ts ***!
  \*********************************************************/
/*! exports provided: ExaminationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationModule", function() { return ExaminationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_preview_pdf_preview_pdf_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/preview-pdf/preview-pdf.module */ "./src/app/components/preview-pdf/preview-pdf.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _examination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examination.component */ "./src/app/pages/examination/examination.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/pages/examination/exam/exam.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.module */ "./src/app/pages/header/header.module.ts");
/* harmony import */ var src_app_components_preview_certificate_preview_certificate_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/preview-certificate/preview-certificate.module */ "./src/app/components/preview-certificate/preview-certificate.module.ts");










var routes = [
    { path: '', component: _examination_component__WEBPACK_IMPORTED_MODULE_4__["ExaminationComponent"] },
    { path: ':exam', component: _exam_exam_component__WEBPACK_IMPORTED_MODULE_7__["ExamComponent"] }
];
var ExaminationModule = /** @class */ (function () {
    function ExaminationModule() {
    }
    ExaminationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_examination_component__WEBPACK_IMPORTED_MODULE_4__["ExaminationComponent"], _exam_exam_component__WEBPACK_IMPORTED_MODULE_7__["ExamComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbProgressBarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrModule"].forRoot({ destroyByClick: true, duration: 3000, position: _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbGlobalLogicalPosition"].BOTTOM_END }),
                _header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"],
                _components_preview_pdf_preview_pdf_module__WEBPACK_IMPORTED_MODULE_1__["PreviewPdfModule"],
                src_app_components_preview_certificate_preview_certificate_module__WEBPACK_IMPORTED_MODULE_9__["PreviewCertificateModule"]
            ]
        })
    ], ExaminationModule);
    return ExaminationModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-examination-examination-module.js.map