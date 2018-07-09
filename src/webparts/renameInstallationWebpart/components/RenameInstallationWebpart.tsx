import * as React from 'react';
import styles from './RenameInstallationWebpart.module.scss';
import { AnyAction } from 'redux';
import { DispatchProp, connect } from 'react-redux';
import { IRenameInstallationWebpartProps } from './IRenameInstallationWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class RenameInstallationWebpart extends React.Component<IRenameInstallationWebpartProps, {}> {
  public render(): React.ReactElement<IRenameInstallationWebpartProps> {
    return (
      <div className={styles.renameInstallationWebpart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={ styles.title }>Hello Ninja!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*

              */
/*

*/
