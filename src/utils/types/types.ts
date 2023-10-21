import {TextStyle} from 'react-native';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

export type TInputProps = {
  placeholder: string;
  onChange: (e: string) => void;
  style?: TextStyle;
};

export type TIconInputProps = {
  icon: IconProp;
  placeholder: string;
  secure?: boolean;
  onChange: (e: string) => void;
};

export type TEmailIconInputProps = {
  icon: IconProp;
  placeholder: string;
  secure?: boolean;
  onChange: (e: string) => void;
  valid: boolean | undefined;
  isLoading: boolean;
  value?: string;
};
