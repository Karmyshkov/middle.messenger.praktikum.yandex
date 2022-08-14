import { config, DATA_ATTRIBUTE } from 'utils';

export function getUserId(evt: Event) {
  const target = evt.target as HTMLElement;
  const userItem = target.closest(`.${config.userItemSelector}`);
  return Number(userItem?.getAttribute(DATA_ATTRIBUTE.USER_ID));
}
