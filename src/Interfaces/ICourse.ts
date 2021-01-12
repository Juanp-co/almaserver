import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';

export interface ICourseTemaryCommentsLikes {
  _id?: any;
  userid: string | null;
  user?: IUserSimpleInfo | null;
  created_at?: string | number;
}

export interface ICourseTemaryComments {
  _id?: any;
  userid: string | null;
  user?: IUserSimpleInfo | null;
  comment: string | null;
  answer?: string | null;
  likes: ICourseTemaryCommentsLikes[];
  unlikes: ICourseTemaryCommentsLikes[];
  created_at?: string | number;
  updated_at?: string | number;
}

export interface ICourseTemary {
  _id?: any;
  title?: string | null;
  description?: string | null;
  urlVideo?: string | null;
  comments: ICourseTemaryComments[];
  likes?: ICourseTemaryCommentsLikes[];
  unlikes?: ICourseTemaryCommentsLikes[];
}

export interface ICourseTest {
  _id?: any;
  title: string | null;
  description: string | null;
  extra: string | null;
  placeholder: string | null;
  inputType: string;
  require: boolean;
  values: string[];
  correctAnswer: number | null;
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
  test: ICourseTest[];
  comments: ICourseTemaryComments[];
  likes?: ICourseTemaryCommentsLikes[];
  unlikes?: ICourseTemaryCommentsLikes[];
  toRoles: number[];
  draft?: boolean;
  enable: boolean;
  created_at: string | number;
  updated_at: string | number;
}

export interface ICourseForm {
  speaker: ICourse['speaker'];
  speakerPosition: ICourse['speakerPosition'];
  code: ICourse['code'];
  title: ICourse['title'];
  banner: ICourse['banner'];
  description: ICourse['description'];
  slug: ICourse['slug'];
  temary: ICourse['temary'];
  test: ICourse['test'];
  toRoles: ICourse['toRoles'];
  enable: ICourse['enable'];
  draft?: ICourse['draft'];
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
  test?: ICourse['test'],
  comments?: ICourse['comments'],
  likes?: ICourse['likes'],
  unlikes?: ICourse['unlikes'],
  toRoles: ICourse['toRoles'],
  draft?: ICourse['draft'],
  enable?: ICourse['enable'],
  created_at?: ICourse['created_at'],
  updated_at?: ICourse['updated_at'],
}

export interface ICourseTestForm {
  questionId?: string | null;
  answer?: string | null,
}
