import * as React from 'react';
import { View, Text } from 'react-native';

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

interface ISwitchWithLabelProps {
  label: string;
  value: boolean;
  onChange: (e: InteractionEvent, value?: boolean) => void;
}

function SwitchWithLabel(props: ISwitchWithLabelProps): React.ReactElement {
  const { label, value, onChange } = props;
  return (
    <View style={commonStyles.switch}>
      <Text>{label}</Text>
      <Switch checked={value} onChange={onChange} />
    </View>
  );
}

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
        <SwitchWithLabel label="Show image" value={showImage} onChange={toggleShowImage} />
        <SwitchWithLabel label="Show primary text" value={showPrimary} onChange={toggleShowPrimary} />
        <SwitchWithLabel label="Show secondary text" value={showSecondary} onChange={toggleShowSecondary} />
        <SwitchWithLabel label="Show tertiary text" value={showTertiary} onChange={toggleShowTertiary} />
        <SwitchWithLabel label="Show optional text" value={showOptional} onChange={toggleShowOptional} />
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
