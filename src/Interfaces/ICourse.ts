import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';

export interface ICourseQuiz {
  _id?: any;
  title: string | null;
  description: string | null;
  placeholder: string | null;
  inputType: string;
  require: boolean;
  values: string[];
  correctAnswer: number | null;
}

export interface ICourseTemary {
  _id?: any;
  title?: string | null;
  description?: string | null;
  urlVideo?: string | null;
  quiz?: ICourseQuiz[] | null;
  view?: number | null;
}

export default interface ICourse extends Document {
  userid: string | null;
  speaker: string | null;
  speakerPosition: string | null;
  code: string | null;
  title: string | null;
  description: string | null;
  slug: string | null;
  temary: ICourseTemary[];
  level: number;
  toRoles: number[];
  enable: boolean;
  created_at: string | number;
  updated_at: string | number;
}

export interface ICourseSimpleRegisterForm {
  code: ICourse['code'];
  slug: ICourse['slug'];
  title: ICourse['title'];
  description: ICourse['description'];
  level: number|null;
  toRoles: ICourse['toRoles'];
}

export interface ICourseInfoUpdateForm {
  title: string|null;
  description: string|null;
  speaker: string|null;
  speakerPosition: string|null;
  level: number|null;
  toRoles: ICourse['toRoles'];
}

export interface ICourseContentThemeUpdateForm {
  title: string|null;
  description: string|null;
  urlVideo: string|null;
  quiz: ICourseQuiz[]|null;
}

export interface ICourseList {
  _id: any;
  userid?: ICourse['userid'],
  user?: IUserSimpleInfo | null,
  speaker: ICourse['speaker'],
  speakerPosition: ICourse['speakerPosition'],
  code: ICourse['code'],
  title: ICourse['title'],
  slug?: ICourse['slug'],
  description?: ICourse['description'],
  temary?: ICourse['temary'],
  level?: ICourse['level'],
  toRoles: ICourse['toRoles'],
  enable?: ICourse['enable'],
  totalsUsers?: number;
  created_at?: ICourse['created_at'],
  updated_at?: ICourse['updated_at'],
}

export interface ICourseSimpleList {
  _id: any;
  title: ICourse['title'],
  slug: ICourse['slug'],
  description?: ICourse['description'],
  level?: ICourse['level'],
  approved?: boolean,
}

export interface ICourseTestForm {
  questionId?: string | null;
  answer?: string | null,
}
