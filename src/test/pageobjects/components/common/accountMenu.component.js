import {$} from '@wdio/globals';

const selectors = {
  switchAccountButton: '[data-testid="switch-accounts-link"]',
  manageAccountButton: '[data-testid="manage-account-link"]',
  profileAndVisibilityButton: '//span[text()="Profile and visibility"]',
  logOutButton: '//span[contains(@class, "BmRHtH7FIX0jcL") and contains(text(), "Log out")]',
};

export default class AccountMenu {
  get rootEl() {
    return $('div[data-testid="account-menu"]');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
