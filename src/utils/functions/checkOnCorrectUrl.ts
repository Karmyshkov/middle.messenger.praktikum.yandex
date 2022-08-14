import { BrowseRouter as router } from 'core';
import { PATHNAMES } from 'utils';

export function checkOnCorrectUrl(pathname: string) {
  if (!Object.values(PATHNAMES).find((path) => path === pathname)) {
    router.go(PATHNAMES.PATH_NOT_FOUND);
  }
}
