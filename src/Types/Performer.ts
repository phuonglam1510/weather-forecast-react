import moment from 'moment';

// types.ts
export interface Performer {
  id: string;
  firstName: string;
  lastName: string;
  stageName: string;
  nickName: string;
  gender: 'male' | 'female' | 'other';
  birthDate: Date;
  careerStartedYear: number;
  biography: string;
  status: string;
  minIncome: string;
  maxIncome: string;
  costNegotiable: boolean;
  loading: boolean;
  avatarURL: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  authEmail: string;
  dateOfBirth: Date;
  createdAt: Date;
  phone: string;
  loading: boolean;
  nickName?: string;
  avatarURL: string;
  status: 'active' | 'disabled';
  profile: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phone: string;
    avatarURL: string;
  };
}

export function fullName(person: Performer | User): string {
  if (!person) {
    return 'Not set';
  }
  if (person.nickName) {
    return person.nickName;
  }
  return `${person.firstName} ${person.lastName}`;
}

export function genderFormat(genderValue: string): string {
  return genderValue === 'male' ? 'Nam' : 'Nữ';
}

export function dateFormat(dateString: string | Date): string {
  return moment(dateString).format('DD-MM-YYYY');
}
