import React from 'react';
import { IWixStatic } from '@wix/native-components-infra/dist/src/types/wix-sdk';
import {
  I18nextProvider,
  translate,
  InjectedTranslateProps,
} from 'react-i18next';
import { get } from 'lodash';
import { WixSDK } from 'yoshi-flow-editor-runtime';
import { ColorPickerColorSpace, TextLabel } from '@wix/wix-base-ui';
import i18n, { getLanguageWithInstance } from '../../../config/i18n';
import './Settings.global.scss';
import css from './Settings.scss';

interface ISettingsProps {
  Wix: IWixStatic;
}

const defaultSettingsValues = {
  backgroundColor: '#ffffff',
  buttonBackgroundColor: '#ffffff',
  fontSize: 14,
};

const SettingsLabel = translate()(({ t }: InjectedTranslateProps) => (
  <TextLabel
    type="T02"
    value={t('app.settings.label')}
    shouldTranslate={false}
  />
));

export class Settings extends React.Component<ISettingsProps> {
  state = defaultSettingsValues;

  componentDidMount() {
    this.props.Wix.Styles.getStyleParams((styleParams: any) => {
      this.setState({
        backgroundColor: get(
          styleParams,
          'colors.backgroundColor.value',
          this.state.backgroundColor,
        ),
        buttonBackgroundColor: get(
          styleParams,
          'colors.buttonBackgroundColor.value',
          this.state.buttonBackgroundColor,
        ),
        fontSize: get(styleParams, 'fonts.fontSize.size', this.state.fontSize),
      });
    });
  }

  updateHeaderBackgroundColor = (backgroundColor: string) => {
    this.props.Wix.Styles.setColorParam('backgroundColor', {
      value: { color: false, opacity: 1, rgba: backgroundColor },
    });
    this.setState({ backgroundColor });
  };

  render() {
    return (
      <div>
        <section className={css.section}>
          <SettingsLabel />
          <div className={css.colorPicker}>
            <ColorPickerColorSpace
              onChange={this.updateHeaderBackgroundColor}
              value={this.state.backgroundColor}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default () => (
  <WixSDK isEditor>
    {({ Wix }) => (
      <I18nextProvider
        i18n={i18n({
          language: getLanguageWithInstance(Wix),
          waitForReact: true,
        })}
      >
        <Settings Wix={Wix} />
      </I18nextProvider>
    )}
  </WixSDK>
);
