export interface IUser {
  _id: string;
  email?: string;
  emailVerified: boolean;
  displayName: string;
  profileImage?: string;
  isAdmin: boolean;
}
