import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@fluentui/react-native';
import { Stack } from '@fluentui-react-native/stack';
import { stackStyle } from '../Common/styles';
import { TEXT_TESTPAGE } from './consts';

export const StandardUsage: React.FunctionComponent<{}> = () => {
  return (
    <View>
      <Stack style={stackStyle} gap={5}>
        <Text variant="heroLargeSemibold" testID={TEXT_TESTPAGE}>
          This is a Label.
        </Text>
        <Text variant="heroLargeSemibold">
          This is a Rich Label.
          <Text variant="heroLargeSemibold">This is a Rich Label (second run).</Text>
        </Text>
        <Text variant="captionStandard">CaptionStandard</Text>
        <Text variant="secondaryStandard">SecondaryStandard</Text>
        <Text variant="secondarySemibold">SecondarySemibold</Text>
        <Text variant="bodyStandard">BodyStandard</Text>
        <Text variant="bodySemibold">BodySemibold</Text>
        <Text variant="subheaderStandard">SubheaderStandard</Text>
        <Text variant="subheaderSemibold">SubheaderSemibold</Text>
        <Text variant="headerStandard">HeaderStandard</Text>
        <Text variant="headerSemibold">HeaderSemibold</Text>
        <Text variant="heroStandard">HeroStandard</Text>
        <Text variant="heroSemibold">HeroSemibold</Text>
        <Text variant="heroLargeStandard">HeroLargeStandard</Text>
        <Text variant="heroLargeSemibold">HeroLargeSemibold</Text>
      </Stack>
    </View>
  );
};
