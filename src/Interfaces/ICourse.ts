import { Document } from 'mongoose';
import { IUserSimpleInfo } from './IUser';

export interface ICourseTemaryCommentsLikes {
  userid: string | null;
  created_at: string | number;
}

export interface ICourseTemaryComments {
  userid: string | null;
  comment: string | null;
  answer: string | null;
  likes: ICourseTemaryCommentsLikes[];
  created_at: string | number;
  updated_at: string | number;
}

export interface ICourseTemary {
  title?: string | null;
  description?: string | null;
  urlVideo?: string | null;
  comments?: ICourseTemaryComments[];
}

export interface ICourseTest {
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
  description: string | null;
  temary: ICourseTemary[];
  test: ICourseTest[];
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
  description: ICourse['description'];
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
  description?: ICourse['description'],
  temary?: ICourse['temary'],
  test?: ICourse['test'],
  toRoles: ICourse['toRoles'],
  draft?: ICourse['draft'],
  enable?: ICourse['enable'],
  created_at?: ICourse['created_at'],
  updated_at?: ICourse['updated_at'],
}
