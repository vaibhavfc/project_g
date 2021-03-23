import React, { FC, forwardRef, useMemo } from 'react';
import { SvgIcon as MuiSvgIcon } from '@material-ui/core';
import classnames from 'classnames';
import { HeaderProps, HeaderStylingProps } from './Header.type';

import classes from './Header.module.scss';

import { mergeClassesObjects } from '../../helpers/styling/mergeClassesObjects';

const HeaderWithInnerRef: FC<HeaderProps> = ({
  // innerRef = null,
  classes: overrideClasses = {},
  // children = 'Header',
  size,
  // ...props
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<HeaderStylingProps>(classes, overrideClasses),
    [overrideClasses],
  );
  return (
    <>
      { size === 'medium' ? (
        <MuiSvgIcon
          width="320"
          height="44"
          viewBox="0 0 320 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          classes={{
            root: classnames(mergedClasses.root),
          }}
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M0 5.25528e-07V44H152.922C158.11 44.002 160.057 39.6027 160.057 39.6027C160.057 39.6027 166.934 28.134 170.204 22.4252C173.479 16.7164 178.656 17.3222 178.656 17.3222H200V-1.75176e-07L0 5.25528e-07Z" fill="#97144D" />
          <path fillRule="evenodd" clipRule="evenodd" d="M53.4805 34.5522H44.3108L38.741 24.8445H47.9087L53.4805 34.5522Z" fill="#FEFEFE" />
          <path fillRule="evenodd" clipRule="evenodd" d="M38.7089 9L43.305 16.9057L33.1493 34.5518H24L38.7089 9Z" fill="#FEFEFE" />
          <path fillRule="evenodd" clipRule="evenodd" d="M81.106 17.9489C80.9117 17.6359 80.6785 17.4068 80.4085 17.2595C80.1385 17.1123 79.801 17.0366 79.396 17.0366C78.9399 17.0366 78.5922 17.1389 78.3528 17.3475C78.1115 17.5541 77.9928 17.8139 77.9928 18.1268C77.9928 18.6484 78.3753 19.0186 79.1424 19.2416L80.2183 19.5566C81.0876 19.8102 81.7299 20.162 82.1369 20.6141C82.5481 21.0641 82.7547 21.6041 82.7547 22.228C82.7547 22.6248 82.6749 22.995 82.5174 23.3366C82.3599 23.6782 82.1369 23.9748 81.8465 24.2202C81.5581 24.4698 81.2022 24.6682 80.791 24.8093C80.3778 24.9545 79.9156 25.0261 79.4083 25.0261C78.3876 25.0261 77.5817 24.7991 76.9906 24.343C76.3994 23.8868 76.0456 23.2282 75.9269 22.367L77.4978 22.0766C77.5899 22.6432 77.7985 23.0625 78.1237 23.3366C78.449 23.6107 78.8785 23.7477 79.4083 23.7477C79.9585 23.7477 80.3819 23.6148 80.6744 23.3489C80.9731 23.083 81.1183 22.7393 81.1183 22.318C81.1183 22.0868 81.0815 21.8945 81.0037 21.735C80.9281 21.5734 80.8197 21.4323 80.6806 21.3095C80.5435 21.1868 80.3799 21.0845 80.1876 21.0007C79.9974 20.9168 79.7928 20.8411 79.574 20.7716L78.5349 20.4668C77.7924 20.25 77.2442 19.9432 76.8903 19.5505C76.5365 19.1577 76.3585 18.6811 76.3585 18.1268C76.3585 17.7791 76.4301 17.462 76.5733 17.1695C76.7165 16.8791 76.921 16.6275 77.1869 16.423C77.4528 16.2164 77.7699 16.0527 78.136 15.9361C78.5062 15.8175 78.9174 15.7582 79.3715 15.7582C80.1467 15.7582 80.7808 15.8993 81.2697 16.1836C81.7606 16.4639 82.1267 16.8464 82.3722 17.3291L81.106 17.9489ZM72.824 24.8625H74.4317V15.9095H72.824V24.8625ZM66.2908 20.1764L63.2778 15.9095H65.1269L67.2276 19.0002L69.3426 15.9095H71.1672L68.1153 20.1907L71.4208 24.8625H69.5697L67.1908 21.418L64.7853 24.8625H62.9219L66.2908 20.1764ZM55.9981 21.5836H59.2278L57.6426 18.5195L55.9981 21.5836ZM59.8701 22.8498H55.3251L54.2247 24.8625H52.5044L57.6549 15.5802L62.7072 24.8625H60.9603L59.8701 22.8498Z" fill="#FEFEFE" />
          <path fillRule="evenodd" clipRule="evenodd" d="M118.182 15.9093H119.79V19.5053L123.905 15.9093H125.957L121.234 19.9737L126.084 24.8623H123.956L120.107 20.9371L119.79 21.2173V24.8623H118.182V15.9093ZM108.38 18.9366V24.8623H106.772V15.6557L114.447 21.8862V15.9093H116.055V25.165L108.38 18.9366ZM98.7829 21.5814H102.013L100.429 18.5173L98.7829 21.5814ZM102.657 22.8516H98.1119L97.0094 24.8623H95.2872L100.442 15.58L105.494 24.8623H103.747L102.657 22.8516ZM91.6667 23.5696C92.2579 23.5696 92.7304 23.4612 93.0842 23.2403C93.4401 23.0234 93.616 22.688 93.616 22.2421C93.616 21.7839 93.4401 21.4484 93.0842 21.2357C92.7304 21.0189 92.2579 20.9105 91.6667 20.9105H90.464V23.5696H91.6667ZM91.096 19.7323C91.6279 19.7323 92.0308 19.6198 92.3069 19.3907C92.581 19.1637 92.7181 18.8487 92.7181 18.4416C92.7181 18.0366 92.581 17.7196 92.3069 17.4925C92.0308 17.2634 91.634 17.1509 91.1083 17.1509H90.464V19.7323H91.096ZM88.8563 15.9093H91.0081C92.0963 15.9093 92.9144 16.1343 93.4647 16.5803C94.0129 17.0282 94.2869 17.6234 94.2869 18.3659C94.2869 18.6871 94.201 19.0041 94.0292 19.3089C93.8554 19.6178 93.6201 19.8714 93.3256 20.0637C93.8963 20.2314 94.3544 20.5116 94.7022 20.9043C95.0499 21.2971 95.2238 21.7593 95.2238 22.2912C95.2238 22.6287 95.1563 22.9539 95.0233 23.2689C94.8883 23.5798 94.6756 23.8539 94.3851 24.0891C94.0947 24.3264 93.7204 24.5125 93.2663 24.6516C92.8101 24.7928 92.264 24.8623 91.6238 24.8623H88.8563V15.9093Z" fill="#FEFEFE" />
          <path d="M200 0V17.3721H320V6.10352e-05L200 0Z" fill="#97144D" />
        </MuiSvgIcon>
      )
        : (
          <MuiSvgIcon
            width="1044"
            height="64"
            viewBox="0 0 1044 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            classes={{
              root: classnames(classes.root),
            }}
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M0 1.01921e-06V64H222.432C229.978 64.003 232.81 57.6039 232.81 57.6039C232.81 57.6039 242.813 40.9222 247.57 32.6185C252.333 24.3148 259.863 25.1959 259.863 25.1959H290.909V0L0 1.01921e-06Z" fill="#97144D" />
            <path fillRule="evenodd" clipRule="evenodd" d="M77.6811 50.2578H64.3433L56.2418 36.1375H69.5767L77.6811 50.2578Z" fill="#FEFEFE" />
            <path fillRule="evenodd" clipRule="evenodd" d="M56.1951 13.0909L62.8804 24.5901L48.1085 50.2572H34.8004L56.1951 13.0909Z" fill="#FEFEFE" />
            <path fillRule="evenodd" clipRule="evenodd" d="M117.864 26.1074C117.581 25.6522 117.242 25.319 116.849 25.1048C116.456 24.8906 115.965 24.7805 115.376 24.7805C114.713 24.7805 114.207 24.9292 113.859 25.2327C113.508 25.5332 113.335 25.9111 113.335 26.3663C113.335 27.1249 113.892 27.6635 115.007 27.9878L116.572 28.4459C117.837 28.8149 118.771 29.3266 119.363 29.9841C119.961 30.6387 120.262 31.4241 120.262 32.3316C120.262 32.9087 120.146 33.4473 119.917 33.9441C119.687 34.441 119.363 34.8724 118.941 35.2294C118.521 35.5924 118.003 35.881 117.405 36.0863C116.804 36.2975 116.132 36.4016 115.394 36.4016C113.91 36.4016 112.737 36.0714 111.878 35.4079C111.018 34.7444 110.503 33.7864 110.33 32.5339L112.615 32.1114C112.749 32.9355 113.053 33.5454 113.526 33.9441C113.999 34.3428 114.624 34.5421 115.394 34.5421C116.195 34.5421 116.81 34.3487 117.236 33.962C117.67 33.5752 117.881 33.0754 117.881 32.4625C117.881 32.1263 117.828 31.8466 117.715 31.6145C117.605 31.3795 117.447 31.1742 117.245 30.9957C117.045 30.8172 116.807 30.6684 116.528 30.5464C116.251 30.4244 115.954 30.3144 115.635 30.2132L114.124 29.7699C113.044 29.4545 112.246 29.0082 111.732 28.437C111.217 27.8658 110.958 27.1725 110.958 26.3663C110.958 25.8605 111.062 25.3993 111.271 24.9739C111.479 24.5514 111.776 24.1854 112.163 23.8879C112.55 23.5874 113.011 23.3494 113.544 23.1798C114.082 23.0073 114.68 22.921 115.341 22.921C116.468 22.921 117.391 23.1263 118.102 23.5398C118.816 23.9474 119.348 24.5038 119.705 25.2059L117.864 26.1074ZM105.817 36.1636H108.156V23.1412H105.817V36.1636ZM96.3142 29.3474L91.9317 23.1412H94.6213L97.6768 27.6367L100.753 23.1412H103.407L98.9681 29.3683L103.776 36.1636H101.083L97.6233 31.1534L94.1244 36.1636H91.414L96.3142 29.3474ZM81.343 31.3944H86.0408L83.735 26.9375L81.343 31.3944ZM86.975 33.236H80.3641L78.7635 36.1636H76.2613L83.7529 22.6621L91.1017 36.1636H88.5608L86.975 33.236Z" fill="#FEFEFE" />
            <path fillRule="evenodd" clipRule="evenodd" d="M171.792 23.1408H174.131V28.3713L180.117 23.1408H183.101L176.231 29.0526L183.285 36.1633H180.191L174.592 30.4539L174.131 30.8615V36.1633H171.792V23.1408ZM157.535 27.5441V36.1633H155.197V22.7719L166.36 31.8344V23.1408H168.698V36.6036L157.535 27.5441ZM143.575 31.3911H148.273L145.97 26.9342L143.575 31.3911ZM149.21 33.2387H142.6L140.996 36.1633H138.491L145.988 22.6618L153.337 36.1633H150.796L149.21 33.2387ZM133.225 34.283C134.085 34.283 134.772 34.1253 135.286 33.804C135.804 33.4886 136.06 33.0007 136.06 32.3521C136.06 31.6856 135.804 31.1977 135.286 30.8883C134.772 30.5729 134.085 30.4152 133.225 30.4152H131.475V34.283H133.225ZM132.395 28.7015C133.168 28.7015 133.754 28.5379 134.156 28.2046C134.555 27.8744 134.754 27.4162 134.754 26.8242C134.754 26.2351 134.555 25.7739 134.156 25.4437C133.754 25.1104 133.177 24.9468 132.412 24.9468H131.475V28.7015H132.395ZM129.137 23.1418H132.267C133.849 23.1418 135.04 23.4691 135.84 24.1177C136.637 24.7693 137.036 25.635 137.036 26.715C137.036 27.1822 136.911 27.6433 136.661 28.0866C136.408 28.5359 136.066 28.9048 135.638 29.1845C136.468 29.4284 137.134 29.836 137.64 30.4073C138.146 30.9785 138.399 31.6509 138.399 32.4245C138.399 32.9154 138.3 33.3884 138.107 33.8466C137.911 34.2988 137.601 34.6975 137.179 35.0397C136.756 35.3848 136.212 35.6555 135.551 35.8579C134.888 36.0631 134.093 36.1643 133.162 36.1643H129.137V23.1418Z" fill="#FEFEFE" />
            <path d="M290 0V25.2126H1043.56V8.31942e-05L290 0Z" fill="#97144D" />
          </MuiSvgIcon>
        )}
    </>
  );
};

const Header = forwardRef<SVGSVGElement, Omit<HeaderProps, 'innerRef'>>(
  (props, ref) => <HeaderWithInnerRef innerRef={ref} {...props} />,
);
export default Header;
