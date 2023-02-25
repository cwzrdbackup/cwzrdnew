export interface StreamState {
    playing: boolean;
    readableCurrentTime: string;
    readableDuration: string;
    duration: number | undefined;
    currentTime: number | undefined;
    canplay: boolean;
    error: boolean;
    currentFile: any | undefined;
    AllFiles:any;
    footerPlaying:boolean;
    volume:any;
    waves:any,
  }