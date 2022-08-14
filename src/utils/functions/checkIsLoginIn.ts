import { BrowseRouter as router } from 'core';

export function checkIsLoginIn() {
  if (!localStorage.getItem('isSignin')) {
    router.back();
  }
}
