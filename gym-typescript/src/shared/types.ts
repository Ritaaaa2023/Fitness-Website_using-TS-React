export enum SelectedPage{
  Home="home",
  Benefits = "benefits",
  Ourclasses = "ourclasses",
  ContactUs ="contactUs"
}

export interface BenefitType{
  icon: React.JSX.Element;
  title: string;
  description:string;

}