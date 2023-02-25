import { Configuration } from './../../dataservice/app.constant.component';
import { Component, OnInit } from '@angular/core';



import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../dataservice/apiservice.component';
import {DataService} from '../../dataservice/utility.dataservice.component';
import {NbToastrService,NbDialogService} from '@nebular/theme';
import { PreviewCertificateComponent } from 'src/app/components/preview-certificate/preview-certificate.component';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

    exam: string;
    sending: boolean;
    public _currentQuestion: any;
    public _correct: any;
    public _examName: string;
    public _examTitle: string;
    public _questionList: any[];
    public _doneQuestionList: any[];
    public _correctAnswers: number;
    public _wrongAnswers: number;
    public _attemptedQuestions: number;
    public _totalQuestions: number;
    public _filteredQuestions: any[];
  public baseURL:any;
  public bookPages:any;
    questions = [
        {number: 1, answer: 'A'},
        {number: 2, answer: 'B'},
        {number: 3, answer: 'C'},
        {number: 4, answer: 'D'},
        {number: 5, answer: 'A'},
        {number: 6, answer: 'A'},
        {number: 7, answer: 'C'},
        {number: 8, answer: 'D'},
        {number: 9, answer: 'C'},
        {number: 10, answer: 'B'},
    ];

    index: number = 0;

    showResult: boolean = false;

    result = {
        correct: false,
        answer: 'JEdi govna'
    };


    answers = {
        corect: 0,
        wrong: 0
    };

    nextExamId = 0;
    allExamsCompleted: boolean = false;

    constructor(private toast: NbToastrService, private _dataservice: ApiService, private _router: Router, private router: Router,
                private route: ActivatedRoute,
                private _passingDataservice: DataService,
                private dialogService:NbDialogService,private _configuration: Configuration
                ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.nextExamId = 0;
            this.allExamsCompleted = false;
            this.index = 0;
            this.showResult = false;
            this.initData();
        });
        this.initData();
    }

    initData() {
        this.baseURL=this._configuration.Server;	
        this.sending = true;
        this.bookPages='<img class="col-6" [src]="images[0]" (load)="doSomething(\'left\')" /><img class="col-6" [src]="images[1]" (load)="doSomething(\'right\')" />';	
        this.exam = this.route.snapshot.paramMap.get('exam');
        let _usermodel = JSON.stringify({examId: this.exam});

        this._dataservice
            .postCall<any>(this._configuration.GetQuestionsByExamIdApi, _usermodel)
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {

                        this.sending = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });
                        return;
                    }
                    setTimeout(() => {

                        this._questionList = resp.questions;
                        this._attemptedQuestions = resp.doneQuestions;
                        this._correctAnswers = resp.correctAnswers;
                        this._wrongAnswers = this._attemptedQuestions - this._correctAnswers;
                        this._totalQuestions = resp.totalQuestions;
                        this._doneQuestionList = resp.doneQuestionIds;
                        this._examName = resp.examName;
                        this._examTitle = resp.title;
                        // this._currentQuestion=this._questionList[0];

                        this._filteredQuestions = this._questionList.filter(
                            function (e) {
                                return this.indexOf(e) < 0;
                            },
                            this._doneQuestionList
                        );
                        this._currentQuestion = this._filteredQuestions[this.index];

                        if (!this.displayNext()) {
                            this.getNextExam();
                        } else {
                            this.sending = false;
                        }
                    }, 1000);


                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingContent, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });

                    this.sending = false;
                },
                () => {

                });

    }
    previewDownloadPdf(event, pdfSrc: string) {
	    this.dialogService.open(PreviewCertificateComponent, {
	      context: { pdfSrc, isCertitficatePdf: true }
	    });
	  }
    restartExam() {
        // console.log('Restart Exam Clicked!!!');
        this.sending = true;
        this.exam = this.route.snapshot.paramMap.get('exam');
        const _examModel = JSON.stringify({examId: this.exam});

        this._dataservice
            .postCall<any>(this._configuration.RestartExamByIdApi, _examModel)
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                        this.sending = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }
                    setTimeout(() => { // console.log(resp);
                        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
                        this._router.onSameUrlNavigation = 'reload';
                        this._router.navigate(['/examination/' + this.exam]).then();

                        this.sending = false;
                    }, 1000);
                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });

                    this.sending = false;
                },
                () => {
                });
    }

    /*reloadComponent() {
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate(['/same-route']);
    }*/

    nextQuestion() {
        if (this.index < this._totalQuestions) {
            this.showResult = false;
        }
    }

    answer(answer: string) {

        this.sending = true;
        let _usermodel = JSON.stringify({examId: this.exam, questionId: this._currentQuestion.id, optionSelected: answer});

        this.sending = true;
        this._dataservice
            .postCall<any>(this._configuration.AnswerQuestionApi, _usermodel)
            .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {

                        this.sending = false;
                        this.toast.show(this._configuration.ErrorFetchingContent, '',
                        {
                            status: this._configuration.ToasterStatusError,
                            duration: this._configuration.ToasterDuration,
                            position: this._configuration.ToasterPosition
                        });

                        return;
                    }
                    console.log(resp);
                    this._correct = resp;
                    if (resp.achievement) {
                        for (var i = 0; i < resp.achievement; i++) {
                            this.toast.info(resp.achievement[i].achievement, 'Achievement');
                        }
                    }
                    if (resp.isCorrect) {

                        this._correctAnswers = this._correctAnswers + 1;
                        this._attemptedQuestions = this._attemptedQuestions + 1;
                        this.index++;
                        this.showResult = true;
                    } else {
                        this._attemptedQuestions = this._attemptedQuestions + 1;
                        this._wrongAnswers = this._wrongAnswers + 1;
                        this.index++;
                        this.showResult = true;
                    }

                    if (resp.certificateAvailable) {
                        this.previewDownloadPdf(null,  this.baseURL + 'getUserCertificate');
                    }
                    //   this._exams=resp.examinations;
                    // this._percent=resp.average;
                    this._currentQuestion = this._filteredQuestions[this.index];

                    if (!this.displayNext()) {
                        this.getNextExam();
                    } else {
                        this.sending = false;
                    }

                },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });

                    this.sending = false;
                },
                () => {

                });
    }


  percent(): number {
    if (this._attemptedQuestions) {
        return (this._attemptedQuestions / this._questionList.length) * 100;
    } else {
        return 0;
    }
  }


    getNextExam() {
        this._dataservice
            .getAll<any>(this._configuration.GetNextExamApi)
            .subscribe(resp => {
                if (resp.status === this._configuration.ResponseStatusError) {
                    this.sending = false;
                    this.toast.show(this._configuration.ErrorFetchingContent, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });

                    return;
                }
                if (resp.nextExam) {
                    this.nextExamId = resp.examId;
                }
                if (resp.completed) {
                    this.allExamsCompleted = true;
                }
                this.sending = false;
            },
                error => {
                    console.log(error);
                    this.toast.show(this._configuration.ErrorFetchingResult, '',
                    {
                        status: this._configuration.ToasterStatusError,
                        duration: this._configuration.ToasterDuration,
                        position: this._configuration.ToasterPosition
                    });
                    this.sending = false;
                },
                () => {
                });
        }



    displayNext(): boolean {
        return (this._attemptedQuestions - this._totalQuestions) !== 0;
    }
}
