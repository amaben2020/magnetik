export type THero = {
  id: string,
  image: {
    file: {
      url: string,
    } | any
  }[],
  title: string,
  variant: string
}