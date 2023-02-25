import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'firstletter'
})
export class UtilityServicePipe implements PipeTransform {
  transform(firstval: string,secondval:string): string {
    if (!firstval || !secondval) return 'N/A';
    return String(firstval.trim().charAt(0)).toUpperCase() +'.'+ String(secondval.trim().charAt(0)).toUpperCase();
  }
}


@Pipe({
    name: 'firstletters'
  })
  export class GetFirstLetterPipe implements PipeTransform {
    transform(firstval: string,secondval:string): string {
      if (!firstval || !secondval) return 'N/A';
      return String(firstval.trim().charAt(0)).toUpperCase() +'.'+ String(secondval.trim().charAt(0)).toUpperCase();
    }
  }
  

@Pipe({ name: 'trim' })
export class TrimPipe implements PipeTransform {
    transform(value: any) {
        if (!value) {
            return '';
        }

        return value.trim();
    }
}


@Pipe({ name: 'round' })
export class RoundFigurePipe implements PipeTransform {
    transform(value: any) {
        if (!value) {
            return '';
        }
        return  Math.round(value);
    }
}


@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

@Pipe({ name: 'hours' })
export class GetHoursPipe implements PipeTransform {
    transform(value: any) {
        if (!value) {
            return '';
        }
        var _date = new Date();
        var _postedDate = value;
        let diffInMS : number = Date.parse(_date.toString()) - Date.parse(_postedDate)
        var _diff = diffInMS / 1000 / 60 / 60;
        if(_diff>1){
            var _round = Math.round(_diff);
            return _round + ' hours ago';
        }
        else {
            var minutes = Math.floor(diffInMS / 60000);
            var _mints = Math.round(minutes);
            if(_mints > 1){return _mints + ' min ago';}
            else{return 'few sec ago'; }
            
        }

    }
}

