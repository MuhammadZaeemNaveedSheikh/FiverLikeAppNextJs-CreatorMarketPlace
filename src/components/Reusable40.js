import React from 'react';
import cn from 'classnames';

import styles from './Reusable40.module.scss';

export default function Reusable40(props) {
  return (
    <section className={cn(styles.section7, 'reusable40')}>
      <div className={styles.box4}>
        <img src={require('assets/e35be313a117b3ddf65372bf7578f93e.png')} alt="alt text" className={styles.icon4} />
        <img src={require('assets/728e269feecd5558b6c5335c6daa58d0.png')} alt="alt text" className={styles.icon6} />
        <img src={require('assets/302fe3c8bfbfea08415a415a9df48b15.png')} alt="alt text" className={styles.icon5} />
        <img src={require('assets/3215011a4b559f0960b4f069acdb3c5c.png')} alt="alt text" className={styles.icon7} />
        <img src={require('assets/83ae2c5317a297c6b8551065d302ab7d.png')} alt="alt text" className={styles.icon71} />
        <px-grid
          track-style="flex-grow: 1;"
          x="307fr 57.39% 307fr"
          y="70px 335fr 56fr"
          z-index={1}
          lg-x="307fr 57.39% 307fr"
          lg-y="70px 335fr 56fr"
          lg-z-index={1}
          md-x="144fr 80.01% 144fr"
          md-y="70px 335fr 56fr"
          md-z-index={1}>
          <div className={styles.flexCol}>
            <h1 className={styles.hero_title3}>Benefits for management teams on our platform?</h1>
            <h5 className={styles.highlights8}>
              {
                "Our platform offers a multitude of benefits for management teams. By managing your YouTubers on our secure and efficient platform, you can easily find better and more secure deals. We're not here to be your competition, but rather a tool to help you succeed."
              }
            </h5>

            <button className={styles.btn} onClick={() => alert('It is clickable')}>
              <span className={styles.btn__text}>Get Started</span>
            </button>
          </div>
        </px-grid>
      </div>
    </section>
  );
}

Reusable40.inStorybook = true;
