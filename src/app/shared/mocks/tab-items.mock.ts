export interface ITabInfo {
  title: string;
  link: string;
  index: number;
}

export const TAB_ITEMS: ITabInfo[] = [
  {
    title: 'campaign',
    link: 'campaign',
    index: 0
  },
  {
    title: 'guidelines',
    link: 'guidelines',
    index: 1
  }
];
