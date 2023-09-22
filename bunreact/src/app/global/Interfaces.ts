export interface IPage {
  name: string,
  path: string,
  element: () => JSX.Element,
  permissions: string[],
  header: boolean,
  sidebar: boolean
}
