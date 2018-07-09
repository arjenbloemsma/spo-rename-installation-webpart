import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from "react-redux";
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'RenameInstallationWebpartWebPartStrings';
import RenameInstallationWebpart from './components/RenameInstallationWebpart';
import { IRenameInstallationWebpartProps } from './components/IRenameInstallationWebpartProps';

export interface IRenameInstallationWebpartWebPartProps {
  testSiteCollectionExistsEndpoint: string;
  addSiteUpdateRequestEndpoint: string;
}

export default class RenameInstallationWebpartWebPart extends BaseClientSideWebPart<IRenameInstallationWebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRenameInstallationWebpartProps> = React.createElement(
      RenameInstallationWebpart,
      {
        sites: []
      }
    );

    ReactDom.render(
      element,
      this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('testSiteCollectionExistsEndpointFieldLabel', {
                  label: strings.TestSiteCollectionExistsEndpointFieldLabel
                }),
                PropertyPaneTextField('addSiteUpdateRequestEndpointFieldLabel', {
                  label: strings.AddSiteUpdateRequestEndpointFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
