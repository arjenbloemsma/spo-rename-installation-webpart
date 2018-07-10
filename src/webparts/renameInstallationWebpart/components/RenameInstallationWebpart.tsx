import * as React from 'react';
import styles from './RenameInstallationWebpart.module.scss';
import { IRenameInstallationWebpartProps } from './IRenameInstallationWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default class RenameInstallationWebpart extends React.Component<IRenameInstallationWebpartProps, {}> {
  public render(): React.ReactElement<IRenameInstallationWebpartProps> {
    return (
      <div className={styles.renameInstallationWebpart}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={ styles.title }>Rename Installation Sites</span>
              <p className={ styles.description }>{escape('Use this webpart for renaming one or more Installation sites in one go. You can do this simply by providing a (relative) URL, clicking the validate button and add the desired name in the textfield that is displaying the current title of the Installation site. Repeat this if you would like to rename more Installation sites. Once you provided a new title for all the Installation sites, click the update button.')}</p>
              <Provider store={store}>
                <App />
              </Provider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}