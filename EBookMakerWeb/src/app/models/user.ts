export class User{
    id:string;
    username:String;
    email:String;
    password:String;
    token?: string;

    constructor(user) {
        {
          this.username = user.username || '';
          this.email = user.email || '';
          this.password = user.password || '';
          this.id=user.id;
        }
    }
    
}