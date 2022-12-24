export type TPage = {
  id: string,
  image: {
    file: {
      url: string,
    } | any
  }[],
  title: string,
  variant: string
}

export type TPageTemplate = {
  data: {
    page:
    {
      sections: TPage[]
    }
  }
}