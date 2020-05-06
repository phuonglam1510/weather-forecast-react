import { LAST_MAILBOX_SEEN_TIME } from 'Constants/StorageConst';
import moment from 'moment';

export const lastMailboxSeenTime = (): Date => {
  const token: string = localStorage.getItem(LAST_MAILBOX_SEEN_TIME) as string;

  return token && token !== ''
    ? new Date(token)
    : moment(moment.now())
        .add('year', 10)
        .toDate();
};
