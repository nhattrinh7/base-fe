// mock giả định

export interface IUser {
  _id: string;
  username: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  dob: string;
  address: string;
  avatar: string;
  roles: IRole[];

  status: 'ACTIVE' | 'BANNED';
  is2FAVerified: boolean;
  require2FA: boolean;

  createdAt: string;
  updatedAt: string;
  updatedBy: string | null;

  __v: number;
}

export interface IRole {
  _id: string;
  name: string;
  description: string;
  permissions: { _id: string; name: string }[];
  inherits: { _id: string; name: string }[];
  deleted: boolean;
  deletedAt: string | null;
  deletedBy: string | null;
  deleteAfter: string | null;
  createdBy: string;
  updatedBy: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
  inheritsPermits?: string[];
}