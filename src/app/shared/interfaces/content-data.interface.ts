export interface ICampaignData {
  title: string;
  content: string;
  subTitle: string;
  media: string;
  price: number;
}

export interface IGuidelineData {
  title: string;
  content: {
    subtitle: string;
    textContent: string;
  }[];

}
