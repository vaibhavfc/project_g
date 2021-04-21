import { Ref } from 'react';
import { CardProps as MuiCardProps, CardClassKey } from '@material-ui/core/Card';
import { StyleRulesCallback } from '@material-ui/styles';

export interface CardStylingProps extends Partial<Record<CardClassKey, string>> {
  rootClickable?: string
  rootSelectable?: string
  rootDisplay?: string
  /**
   * card header style && headerTitle
   */
  title?: string
  headerTitle?: string
  metricTitle?: string
  Card_header?: string
  Card_headersingle?: string
  /**
   *  card subheader style
   */
  subheader?: string
  subheader1?: string
  /**
   * card hide style
   */
  hide?: string
  /**
   * action container && actionTextContainer
   */
  actionContainer?: string
  actionTextContainer?: string
  /**
    * content style && metricContent && contentSelectable
    */
  content?: string
  contentSelectable?: string
  metricContent?: string
    /**
     * header && headerWithAssets
     */
  header?: string
  headerWithAssets?: string
    /**
      * caption
      */
  caption?: string
  captionWraper?: string
  captionWraper1?: string
    /**
     * selectedTitle
     * unSelectedTitle
     */
  selectedTitle?: string
  unSelectedTitle?:string
    /**
     * selectedCard &&  unSelectedCard && display
     */
  selectedCard?: string
  display?: string
  unSelectedCard?: string
  /**
   * divider
   */
   divider?: string
  /**
   * clickable
   */
   clickable?: string
  /**
   * SelectedIcon && UnSelectedIcon
   */
   selectedIcon?: string
   unSelectedIcon?: string
  /**
   * cardContent && metricContent
   */
   cardContent?: string
  /**
   * cardAvatar && cardLayoutBody
   */
   cardAvatar?: string
   cardLayoutBody?: string
  /**
   * boxLabel
   */
   boxLabel?: string
   /**
    * contentWraper && contentWraper2 
    */
  contentWraper?: string
  contentWraper2 ?: string
  /**
   * textButton
   */
   textButton?: string
  /**
   * avatarContainer && avatarHeader && avatarMetricHeader
   */
   avatarContainer?: string
   avatarHeader?: string
   avatarMetricHeader?: string
  /**
   * cardWraper
   */
   cardWraper?: string
   /**
    * iconButton1 && iconButton
    */
    iconButton?: string
    iconButton1?: string
    iconTextButton?: string
    iconClickableButton?: string
   /**
    * switchBase
    */
    switchBase?: string
    checked?: string
    track?: string
}

export interface CardProps extends MuiCardProps {
  innerRef: Ref<HTMLDivElement>;
  type: 'label' |'label-2' | 'single' | 'extended' | 'metric' | 'no-label';
  cardType: 'clickable' | 'selectable' | 'display';
  buttonType: 'icon' | 'text' | 'none' | 'switch' | 'toggle';
  switchValue?: false;
  assets: 'Yes' | 'No';
  subheader?: string;
  content?: string;
  content2?: string;
  subheader2?: string;
  cardData: {avatar: string, content: string}[];
  link?: string;
  onIconCallback?: () => void;
}


export interface CardLayoutProps extends MuiCardProps {
  innerRef: Ref<HTMLDivElement>;
  data: {avatar: string, content: string};
  doneCallback?: () => void;
}
