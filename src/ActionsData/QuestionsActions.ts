import Question from '../Models/Question';

export default async function checkIfExistQuestion(_id?: string | null): Promise<boolean> {
  return _id ? (await Question.find({ _id }, { _id: 1 }).countDocuments().exec()) > 0 : false;
}
