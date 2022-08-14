import { BrowseRouter as router } from 'core';
import { lOCALSTORAGE } from 'utils';

export function checkIsLoginIn() {
  !localStorage.getItem(lOCALSTORAGE.IS_SIGNIN) && router.back();
}
