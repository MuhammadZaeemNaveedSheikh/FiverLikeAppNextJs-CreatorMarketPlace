import React from 'react';
import cn from 'classnames';
import LanguageChange from 'components/LanguageChange';
import PrimaryBtn from 'components/PrimaryBtn';

import styles from './Header.module.scss';

export default function Header(props) {
  return (
    <div className={cn(styles.group1, 'header')}>
      <div className={styles.group1__item}>
        <img src={require('assets/a9348fd605142d43d466a749aebe2b47.png')} alt="alt text" className={styles.image1} />
      </div>

      <div className={styles.flexRow}>
        <a className={styles.highlights1}>Home</a>
        <div className={styles.flexRow__spacer} />
        <a className={styles.highlights}>Search Library</a>
        <div className={styles.flexRow__spacer} />
        <a className={styles.highlights2}>Chats</a>
        <div className={styles.flexRow__spacer} />
        <a className={styles.highlights3}>Settings</a>
        <div className={styles.flexRow__spacer} />
        <a className={styles.highlights4}>My Profile</a>
      </div>

      <div className={styles.flexRow1}>
        <div className={styles.component}>
          <LanguageChange />
        </div>
        <div className={styles.flexRow1__spacer} />
        <div className={styles.box1}>
          <PrimaryBtn btn__text={`Log In`} />
        </div>
        <div className={styles.flexRow1__spacer1} />
        <div className={styles.flexRow1__item}>
          <button className={styles.btn} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text}>Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Header.inStorybook = true;
