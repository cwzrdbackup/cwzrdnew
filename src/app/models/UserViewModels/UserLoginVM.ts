export class UserLoginVM{
    email: string;
    password: string;
    userData: any;
}

export class UserAuthenticatedVM{
    user : user
    token: string
    status: string
    message: string
  }
  export class user {
    userId: number
    email: string
    name: string
  }