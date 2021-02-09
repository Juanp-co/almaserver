import _ from 'lodash';
import { getNamesUsersList } from './UsersActions';
import { IReferralsMember } from '../Interfaces/IReferrals';
import { IUserSimpleInfo } from '../Interfaces/IUser';
import Referrals from '../Models/Referrals';

export default async function getReferralsData(listIds: string[]) : Promise<IReferralsMember[]> {

  const ret: IReferralsMember[] = [];

  if (listIds.length > 0) {
    const refsData = await Referrals.find({ _id: { $in: listIds } }).exec();

    if (refsData.length > 0) {
      const usersIds = _.map(refsData, '_id');
      const users = await getNamesUsersList(usersIds);

      if (users.length > 0) {
        users.forEach((u: IUserSimpleInfo) => {
          const ref = _.find(refsData, r => r._id.toString() === u._id.toString());
          ret.push({
            user: u,
            totalsReferrals: ref ? ref.members.length : 0
          })
        })
      }
    }
  }

  return ret;
}
