interface IUserResp {
  id: number
  first_name: string
  last_name: string
  name: string
  default_lang: 'en' | 'tr'
  type: 1 | 2
}

export default class User {
  id: number
  first_name: string
  last_name: string
  name: string
  default_lang: string
  type: 1 | 2

  constructor(data: IUserResp) {
    this.id = data.id
    this.first_name = data.first_name
    this.last_name = data.last_name
    this.name = data.name
    this.default_lang = data.default_lang
    this.type = data.type
  }
  isFreelancer() {
    return this.type === 2
  }
}
