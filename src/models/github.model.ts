// @ts-nocheck
export class GithubModel {
  name = '';
  avatar_url = '';
  html_url = '';

  constructor (values = {}) {
    Object.keys(this).forEach(key => {
      if (values && values.hasOwnProperty(key))
        this[key] = values[key];
    })
  }
}