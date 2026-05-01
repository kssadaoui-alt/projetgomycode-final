export class CreateUserDto {
  uName: string;
  uEmail: string;
  uAddress: string;
  uPhone: string;
  uPass: string;
  uType?: string;
}

export class LoginUserDto {
  uEmail: string;
  uPass: string;
}
