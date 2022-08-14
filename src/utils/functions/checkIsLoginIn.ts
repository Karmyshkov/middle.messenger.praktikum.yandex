import { BrowseRouter as router } from 'core';
import { lOCALSTORAGE, PATHNAMES } from 'utils';

export function checkIsLoginIn() {
  if (localStorage.getItem(lOCALSTORAGE.IS_SIGNIN)) {
    const pathname = router.getPathname();

    Object.values(PATHNAMES.PUBLIC).find(
      (privatePathname) => privatePathname === pathname
    ) && router.go(PATHNAMES.PRIVATE.MESSAGER_PATH);
  } else {
    router.back();
  }
}
