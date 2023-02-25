import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { Injectable } from '@angular/core';
import { NbGlobalPhysicalPosition } from '@nebular/theme';

@Injectable()

export class Configuration {
    // public Server = 'http://124.109.50.82:3041/';
    // public Server = 'http://localhost:3001/';
    // public Server = 'http://localhost:3232/';
    // public Server = 'http://localhost:3131/';
    //public Server = 'https://apidev.cryptowzrd.com/';
    public connectNotificationsSocket ='https://api.cryptowzrd.com/notifications';
    public Server = 'https://api.cryptowzrd.com/';
    // public Server = 'http://192.168.0.106:3232';
    // public Server = 'http://ec2-18-221-223-136.us-east-2.compute.amazonaws.com:3232/';
    // public Server = 'http://185.230.208.211/offey/';
    // public Server = 'http://192.168.100.62:8089/'; // ----- LOCAL IIS IP... Local deployment for debugging ....
    public ApiUrl = '';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public VimeoAccessToken = 'c0cb29963936509abf1a0ccfbed56510';

    // Toaster Configuration
    public ToasterDuration = 5000;
    public ToasterStatusError = NbToastStatus.DANGER;
    public ToasterStatusInfo = NbToastStatus.INFO;
    public ToasterStatusSuccess = NbToastStatus.SUCCESS;
    public ToasterStatusWarning = NbToastStatus.WARNING;
    public ToasterPosition = NbGlobalPhysicalPosition.BOTTOM_RIGHT;

    // Toaster Messages
    public ErrorFetchingContent = 'There was a problem fetching the content.';
    public ErrorFetchingResult = 'An error occurred while fetching the result.';
    public ErrorFetchingVimeoResult = 'An error occurred while fetching the Vimeo results.';
    public ErrorLoadingData = 'There was a problem loading the data.';
    public ErrorLoggingIn = 'An error occurred while logging in.';
    public ErrorSavingResult = 'An error occured while saving the result.';
    public ErrorExist = 'This record already exists in the database.';
    public ErrorSignup = 'An error occured while signing up.';
    public ErrorLoadingLessons = 'An error occured while loading the lessons.';
    public ErrorMakingNotes = 'There was a problem creating the note.';
    public ErrorWorkingOnRequest = 'An error occured while working on the request.';
    public ErrorAddingToDatabase = 'There was a problem adding data to the database.';
    public ErrorDeletingLog = 'There was a problem deleting the journal log.';
    public JournalDeletedSuccessfully = 'Journal entry deleted successfully.';
    public DocumentDeleted = 'The document has been deleted';
    public portfolioDeleted = 'Your portfolio entry has been deleted';
    public SomePhone = 'some phone.';
    public NotificationReadSuccessfully = 'All notifications have been marked as successfully read!';
    public SomethingWrong = 'Something went wrong.';
    public OrderedChange = 'Ordered change.';

    // Response Status
    public ResponseStatusError = 'ERROR';

    // Validation Messages
    public FieldRequired = 'This field is required.';

    // Local Storage Keys
    public NameKey =  'name';
    public AccessTokenKey =  'access_token';
    public UserKey =  'user';
    public RefreshTokenKey =  'refresh_token';
    public ShowWelcomeKey = 'showWelcome';
    public ProfileImageKey = 'profile-image';
    public ProfileImgKey = 'profileImg';
    public HeaderImageKey = 'header-image';
    public ProfileTheme = 'themeId';
    public showBadgeTKey2 = 'showBadgeT';
    public showBadge2 = 'showBadgeTraders';
    public showBadge3 = 'showBadgePortfolio';
    public showBadge4 = 'showBadgeTracker';

    // Backend API Urls
    public AddMinuteApi = 'profile/addMinute';
    public TokenApi = 'token';
    public VerifyEmailCodeApi = 'auth/verifyEmailCode';
    public SaveUserLocationApi = 'user/saveUserLocation';
    public UpdateBookPageProgressApi = 'bookPage/updateUserBookPageProgress';
    public GetUserBookProgress = 'bookPage/getUserBookPageProgressByUserId';
    public GetChaptersList = 'chapter/getList';
    public GetChapterLessonsList = 'chapter/getChapterLessonListById';
    public GetChapterLessonById = 'chapter/getChapterLessonById';
    public AddNewLessonNoteApi = 'chapter/addNewNote';
    public CompleteLessonApi = 'chapter/completeLesson';
    public GetUserLocationApi = 'user/getUserLastLocation';
    public GetTodaysQuote = 'dashboard/getTodaysQuote';
    public GetTodoListApi = 'todo/list';
    public GetExaminationsListApi = 'examination/getList';
    public GetTwitterPostApi = 'twitter/getPost';
    public GetEventsListApi = 'event/list';
    public GetUserEventsListApi = 'userEvent/list';
    public GetShopifyArticlesApi = 'shopify/getArticles';
    public GetChapterLessonApi = 'chapter/getLesson';
    public GetNextUncompleteLessonApi = 'chapter/getNextUncompleteLesson';
    public GetProgressByLastSevenDaysApi = 'dashboard/getProgressByLastSevenDays';
    public GetVimeoBroadcastInfoApi = 'dashboard/getVimeoBroadcastInfo';
    public UpdateTodoApi = 'todo/updateIsDone';
    public DeleteTodoApi = 'todo/delete';
    public DeleteAllTodoApi = 'todo/deleteAll';
    public AddNewTodoApi = 'todo/addNewTodo';
    public AddNewUserEventApi = 'userEvent/addNewUserEvent';
    public UpdateUserEventApi = 'userEvent/updateById';
    public DeleteUserEventApi = 'userEvent/delete';
    public GetCurrentExamApi = 'examination/getCurrentExam';
    public GetUserInformationApi = 'User/UserInformation';
    public GetInitialSettingsApi = 'Settings/Initial';
    public GetQuestionsByExamIdApi = 'question/getListByExamId';
    public RestartExamByIdApi = 'exam/restartExamByExamId';
    public AnswerQuestionApi = 'userExamProgress/answerAQuestion';
    public GetNextExamApi = 'examination/nextExam';
    public ForgotPasswordRequestApi = 'sendRequestForgotPassword';
    public GetAllJournalStatsApi = 'journal/getAllStats';
    public GetAllTradeStatsApi = 'trade/getAllStats';
    public GetJournalLogListApi = 'journal/logList';
    public getProfileApi = 'portfolio/getProfile';
    public getTradersApi = 'traders/getTraders';
    public convertValuesApi='traders/convertCoin';
    public getCoinHighLow ='traders/getCoinHighLow';
    public addCoinApi='portfolio/addCoin';
    public getForexApi = 'forex/forexList';
    public addWatchApi = 'portfolio/addWatch'
    public AddJournalLogApi = 'journal/addLog';
    public DeleteJournalLogApi = 'journal/deleteLog';
    public GetSingleShopifyArticleApi = 'shopify/getAnArticle';
    public AddNewEpisodeCommentApi = 'wzdrEpisode/addNewComment';
    public LikeEpisodeCommentApi = 'wzdrEpisode/likeComment';
    public DislikeEpisodeCommentApi = 'wzdrEpisode/dislikeComment';
    public GetEpisodeCommentsListApi = 'wzdrEpisode/getCommentList';
    public SubscribeUserEmailApi = 'user/subscribeUserEmail';
    public AddNewCommentReplyApi = 'wzdrEpisode/addNewReplyByCommentId';
    public LikeReplyByIdApi = 'wzdrEpisode/likeReplyById';
    public GetAllNotificationsApi = 'notifications/';
    public MarkAllNotificationsReadApi = 'integration/notification/markAllRead/';
    public GetJsonPeakFromAssetsApi = 'assets/peaks/';
    public GetPodcastVotesApi = 'podcast/getVotes';
    public LikePodcastApi = 'podcast/likePodcast';
    public GetProfileAchievementsApi = 'profile/getAchievements';
    public SaveUserProfileApi = 'user/saveUserProfile';
    public GetUserDocumentsApi = 'profile/getUserDocuments';
    public GetProfileApi = 'profile/getProfile';
    public SaveProfileBioApi = 'profile/saveBio';
    public TechnicalSupportApi = 'profile/technicalSupport';
    public InviteFriendApi = 'profile/inviteFriend';
    public CheckResetTokenApi = 'checkResetToken';
    public ResetPasswordApi = 'resetPassword';
    public GetUserApi = 'user/getUser';
    public UpdateNameValueApi = 'updateNameValue';
    public ChangePasswordApi = 'changePassword';
    public UpdateUserSettingsApi = 'user/updateSettings';
    public AuthSignupApi = 'auth/signup';
    public GetTechnicalsListApi = 'technicals/technicalsList';
    public GetTradersTopCoins = 'trader/topCoins';
    public GetEpisodeLikesCount = 'episode/episodLikeCount';
    public GetEpisodeLikes = 'episode/episodeLike';
    public GetEpisodeCommentById = 'wzdrEpisode/getCommentsById';
    public GetEpisodesList = 'wzdrEpisode/getList';

    // Third Party Apis Urls
    public SoundCloudApi = 'https://api.soundcloud.com/playlists/861009011?client_id=b23455855ab96a4556cbd0a98397ae8c';
    public GetJsonPeakFromAWSApi = 'https://cryptowzrdmembers.s3.us-east-2.amazonaws.com/podcasts/';
    public VimeoBaseAlbumUrl = 'https://api.vimeo.com/users/67821071/albums/6578442/videos';
    public GetOutsideTradesApi = 'https://min-api.cryptocompare.com/data/subs';
}
