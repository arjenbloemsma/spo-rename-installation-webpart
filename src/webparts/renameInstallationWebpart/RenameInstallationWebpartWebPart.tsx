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
import { ISiteInfo } from "./actions/actionTypes";

export interface IRenameInstallationWebpartWebPartProps {
  description: string;
  sites: ISiteInfo[];
}

export default class RenameInstallationWebpartWebPart extends BaseClientSideWebPart<IRenameInstallationWebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRenameInstallationWebpartProps> = React.createElement(
      RenameInstallationWebpart,
      {
        description: this.properties.description,
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
