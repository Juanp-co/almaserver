import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';

export interface ICourseTest {
  _id?: any;
  title: string | null;
  description: string | null;
  placeholder: string | null;
  inputType: string;
  require: boolean;
  values: string[];
  correctAnswer: number | null;
}

export interface ICourseContent {
  _id?: any;
  title?: string | null;
  description?: string | null;
  urlVideo?: string | null;
  view?: number | null;
}

export interface ICourseTemary {
  _id?: any,
  title: string | null,
  description?: string | null,
  content: ICourseContent[],
  test: ICourseTest[],
  view?: number;
}

export default interface ICourse extends Document {
  userid: string | null;
  speaker: string | null;
  speakerPosition: string | null;
  code: string | null;
  title: string | null;
  banner: string | null;
  description: string | null;
  slug: string | null;
  temary: ICourseTemary[];
  levels: string[];
  toRoles: number[];
  enable: boolean;
  created_at: string | number;
  updated_at: string | number;
}

export interface ICourseSimpleRegisterForm {
  code: ICourse['code'];
  slug: ICourse['slug'];
  title: ICourse['title'];
  banner: ICourse['banner'];
  description: ICourse['description'];
  toRoles: ICourse['toRoles'];
}

export interface ICourseInfoUpdateForm {
  title: string|null;
  description: string|null;
  speaker: string|null;
  speakerPosition: string|null;
  toRoles: ICourse['toRoles'];
}

export interface ICourseBannerUpdateForm {
  banner: string|null;
}

export interface ICourseThemeUpdateForm {
  title: string|null;
  description: string|null;
}

export interface ICourseQuestionUpdateForm {
  title: string|null;
  description: string|null;
  placeholder: string|null;
  inputType: string;
  require: boolean;
  values: string[];
  correctAnswer: number|null;
}

export interface ICourseContentThemeUpdateForm {
  title: string|null;
  description: string|null;
  urlVideo: string|null;
}

export interface ICourseReference {
  _id: any;
  title: ICourse['title'];
  description: ICourse['description'];
  banner: ICourse['banner'];
  slug: ICourse['slug'];
  enable: ICourse['enable'];
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
  banner: ICourse['banner'],
  description?: ICourse['description'],
  temary?: ICourse['temary'],
  levels?: ICourseReference[] | ICourse['levels'] | any[],
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
  banner: ICourse['banner'],
  description?: ICourse['description'],
}

export interface ICourseTestForm {
  questionId?: string | null;
  answer?: string | null,
}

export interface ICourseLevelsForm {
  listIds: string[];
}
