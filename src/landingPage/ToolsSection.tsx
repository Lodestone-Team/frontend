import React from 'react';
import styles from './ToolsSection.module.scss';
import GhostBlock from 'common/GhostBlock';

const ToolsSection = (props: any) => {
  return (
    <section className={styles.container}>
      <h1>
        <span className={styles.gradient}>power&nbsp;manage.</span>
        <br />your&nbsp;world
      </h1>

      <ul className={styles.parameters}>
        <li>
          <h2>Power up and down your server with just a few clicks</h2>
          <p>
            Lodestone is the perfect tool for Minecraft server management on a local level. 
            With just a few clicks, you can power up and down your server, as well as manage player permissions,
            mods, and plugins. Whether you're a beginner or a seasoned pro, 
            Lodestone has the features you need to keep your server running smoothly.
          </p>
        </li>
        <li>
          <h2>Manage player permissions and world settings</h2>
          <p>
          Lodestone gives you the power to manage your players and worlds with ease. With our easy to use interface, 
          you can quickly give or revoke player permissions, manage world settings, and more. Whether you're running a
          small server for friends or a large server for hundreds of players, Lodestone has the tools you need to keep things running smoothly.
          </p>
        </li>
        <li>
          <h2>Generate detailed reports of server activity</h2>
          <p>
          Lodestone gives server admins the ability to generate detailed reports of server activity, 
          including player connections, disconnections, chat messages, and commands executed. 
          These reports can be generated for specific time periods, and can be customized to 
          include or exclude specific players, worlds, or server events.
          </p>
        </li>
        <li>
          <h2>Get real-time alerts of server events</h2>
          <p>
          Lodestone allows you to set up alerts for when certain events occur on your server, so you can stay up-to-date on what's happening even when you're away.
          </p>
        </li>
        <li>
          <h2>And much, much more!</h2>
          <p>
          The Lodestone team is committed to improving and adding new features to our client. 
          We are constantly working on new ways to make our client more user-friendly and efficient. 
          We want to make sure that our client is the best possible option for those who are looking for a Minecraft server hosting solution.
          </p>
        </li>
      </ul>

      <div className={styles.stickyBoxBounds}>
        <div className={styles.stickyBox}>
          <GhostBlock></GhostBlock>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
