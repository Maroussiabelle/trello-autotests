import {$} from '@wdio/globals'


const selectors = {
  switchAccountButton: '[data-testid="switch-accounts-link"]',
  manageAccountButton: '[data-testid="manage-account-link"]',
  profileAndVisibilityButton: '//span[text()="Profile and visibility"]',
  // activityButton: '',
  // cardsButton: '',
  // settingsButton: '',
}

export default class AccountMenu {
  get rootEl() {
    return $('div.q2PzD_Dkq1FVX3')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
