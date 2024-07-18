

import {$} from '@wdio/globals'


const selectors = {
  cardTitleInputField: 'textarea[data-testid="list-card-composer-textarea"]',
  addCardSubmitBtn: 'button[type="submit"]',
  displayedCard: '//a[@class="NQKKfeqJDDdX3" and contains(text(), "Test card")]',
}

export default class CardComposer {
  get rootEl() {
    return $('//li[@class="bi0h3HALKXjfDq"]//h2[contains(text(), "New list") and @data-testid="list-name"]//ancestor::li[@class="bi0h3HALKXjfDq"]')
  }


  item(param) {
    return this.rootEl.$(selectors[param])
  }
}
