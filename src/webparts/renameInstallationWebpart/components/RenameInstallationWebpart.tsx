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
              <p className={ styles.subTitle }>Some subtitle...</p>
              <p className={ styles.description }>{escape('a nice description')}</p>
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