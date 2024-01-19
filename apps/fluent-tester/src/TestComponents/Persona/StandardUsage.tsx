import * as React from 'react';
import { View } from 'react-native';

import type { InteractionEvent, PersonaSize } from '@fluentui/react-native';
import { Persona } from '@fluentui/react-native';
import { Switch } from '@fluentui-react-native/switch';

import { satyaImageUrl } from './styles';
import { MenuPicker } from '../Common/MenuPicker';
import { commonTestStyles as commonStyles } from '../Common/styles';
import { undefinedText } from '../PersonaCoin/styles';

type WithUndefined<T> = T | typeof undefinedText;

const allSizes: WithUndefined<PersonaSize>[] = [
  undefinedText,
  'size8',
  'size24',
  'size32',
  'size40',
  'size48',
  'size56',
  'size72',
  'size100',
  'size120',
];

const allSizesCollection = allSizes.map((size) => {
  return {
    label: size,
    value: size,
  };
});

export const StandardUsage: React.FunctionComponent = () => {
  const [showImage, setShowImage] = React.useState(true);
  const toggleShowImage = React.useCallback((_e: InteractionEvent, value?: boolean) => setShowImage(value), [setShowImage]);

  const [showPrimary, setShowPrimary] = React.useState(true);
  const toggleShowPrimary = React.useCallback((_e: InteractionEvent, value?: boolean) => setShowPrimary(value), [setShowPrimary]);

  const [showSecondary, setShowSecondary] = React.useState(true);
  const toggleShowSecondary = React.useCallback((_e: InteractionEvent, value?: boolean) => setShowSecondary(value), [setShowSecondary]);

  const [showTertiary, setShowTertiary] = React.useState(true);
  const toggleShowTertiary = React.useCallback((_e: InteractionEvent, value?: boolean) => setShowTertiary(value), [setShowTertiary]);

  const [showOptional, setShowOptional] = React.useState(true);
  const toggleShowOptional = React.useCallback((_e: InteractionEvent, value?: boolean) => setShowOptional(value), [setShowOptional]);

  const [imageSize, setImageSize] = React.useState<PersonaSize | undefined>('size72');

  return (
    <View style={commonStyles.root}>
      {/* settings */}
      <View style={commonStyles.settings}>
        <Switch label="Show image" labelPosition="before" checked={showImage} onChange={toggleShowImage} />
        <Switch label="Show primary text" labelPosition="before" checked={showPrimary} onChange={toggleShowPrimary} />
        <Switch label="Show secondary text" labelPosition="before" checked={showSecondary} onChange={toggleShowSecondary} />
        <Switch label="Show tertiary text" labelPosition="before" checked={showTertiary} onChange={toggleShowTertiary} />
        <Switch label="Show optional text" labelPosition="before" checked={showOptional} onChange={toggleShowOptional} />
        <MenuPicker
          prompt="Size"
          style={commonStyles.header}
          selected={imageSize || undefinedText}
          onChange={(size: PersonaSize | typeof undefinedText) => setImageSize(size === undefinedText ? undefined : size)}
          collection={allSizesCollection}
        />
      </View>

      <Persona
        text={showPrimary ? 'Satya Nadella' : undefined}
        secondaryText={showSecondary ? 'CEO' : undefined}
        tertiaryText={showTertiary ? 'Microsoft' : undefined}
        optionalText={showOptional ? 'Office of the CEO' : undefined}
        size={imageSize}
        initials="SN"
        imageUrl={showImage ? satyaImageUrl : undefined}
        imageDescription="Profile photo of Satya Nadella"
        presence={'away'}
      />
    </View>
  );
};
