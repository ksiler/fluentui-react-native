import * as React from 'react';
import { View } from 'react-native';

import { Text } from '@fluentui/react-native';
import type { InteractionEvent } from '@fluentui/react-native';
import type { Size } from '@fluentui-react-native/experimental-avatar/';
import { NativeAvatar } from '@fluentui-react-native/experimental-avatar/';
import { Stack } from '@fluentui-react-native/stack';
import { Switch } from '@fluentui-react-native/switch';

import { testImageSource, rainbowGradientSource } from './testImageSources';
import { NATIVE_AVATAR_TESTPAGE } from '../../../../E2E/src/Avatar/consts';
import { commonTestStyles as commonStyles } from '../Common/styles';
import type { TestSection, PlatformStatus } from '../Test';
import { Test } from '../Test';

export const BasicAvatar: React.FunctionComponent = () => {
  const [showImage, setShowImage] = React.useState(true);
  const toggleShowImage = React.useCallback((_e: InteractionEvent, value?: boolean) => setShowImage(value), [setShowImage]);
  const [showPresence, setShowPresence] = React.useState(false);
  const toggleShowPresence = React.useCallback((_e: InteractionEvent, value?: boolean) => setShowPresence(value), [setShowPresence]);
  const [showRing, setShowRing] = React.useState(false);
  const toggleSetShowRing = React.useCallback((_e: InteractionEvent, value?: boolean) => setShowRing(value), [setShowRing]);

  return (
    <View style={commonStyles.root}>
      {/* settings */}
      <View style={commonStyles.settings}>
        <View style={commonStyles.switch}>
          <Text>Show image</Text>
          <Switch checked={showImage} onChange={toggleShowImage} />
        </View>
        <View style={commonStyles.switch}>
          <Text>Show presence</Text>
          <Switch checked={showPresence} onChange={toggleShowPresence} />
        </View>
        <View style={commonStyles.switch}>
          <Text>Show Ring</Text>
          <Switch checked={showRing} onChange={toggleSetShowRing} />
        </View>
      </View>
      {/* component under test */}
      <NativeAvatar
        primaryText="Kat Larrson"
        secondaryText="Kat.Larrson@example.com"
        imageSource={showImage ? testImageSource : undefined}
        presence={showPresence ? 'available' : null}
        isRingVisible={showRing}
        size={'size72'}
      />
    </View>
  );
};

export const CustomizeColors: React.FunctionComponent = () => {
  const [showCustomRingColor, setShowCustomRingColor] = React.useState(false);
  const toggleShowCustomRingColor = React.useCallback(
    (_e: InteractionEvent, value?: boolean) => setShowCustomRingColor(value),
    [setShowCustomRingColor],
  );
  const [showCustomForeground, setShowCustomForeground] = React.useState(false);
  const toggleShowCustomForeground = React.useCallback(
    (_e: InteractionEvent, value?: boolean) => setShowCustomForeground(value),
    [setShowCustomForeground],
  );
  const [showCustomBackground, setShowCustomBackground] = React.useState(false);
  const toggleShowCustomBackground = React.useCallback(
    (_e: InteractionEvent, value?: boolean) => setShowCustomBackground(value),
    [setShowCustomBackground],
  );
  const [showCustomBorderImage, setShowCustomBorderImage] = React.useState(false);
  const toggleShowCustomBorderImage = React.useCallback(
    (_e: InteractionEvent, value?: boolean) => setShowCustomBorderImage(value),
    [setShowCustomBorderImage],
  );
  const [showRingGap, setShowRingGap] = React.useState(false);
  const toggleShowRingGap = React.useCallback((_e: InteractionEvent, value?: boolean) => setShowRingGap(value), [setShowRingGap]);

  return (
    <View style={commonStyles.root}>
      {/* settings */}
      <View style={commonStyles.settings}>
        <View style={commonStyles.switch}>
          <Text>Custom foreground</Text>
          <Switch checked={showCustomForeground} onChange={toggleShowCustomRingColor} />
        </View>
        <View style={commonStyles.switch}>
          <Text>Custom background</Text>
          <Switch checked={showCustomBackground} onChange={toggleShowCustomForeground} />
        </View>
        <View style={commonStyles.switch}>
          <Text>Custom ring color</Text>
          <Switch checked={showCustomRingColor} onChange={toggleShowCustomBackground} />
        </View>
        <View style={commonStyles.switch}>
          <Text>Custom Border Image</Text>
          <Switch checked={showCustomBorderImage} onChange={toggleShowCustomBorderImage} />
        </View>
        <View style={commonStyles.switch}>
          <Text>Show Ring Gap</Text>
          <Switch checked={showRingGap} onChange={toggleShowRingGap} />
        </View>
      </View>
      {/* component under test */}
      <NativeAvatar
        primaryText="Kat Larrson"
        secondaryText="Kat.Larrson@example.com"
        ringColor={showCustomRingColor ? 'red' : null}
        foregroundColor={showCustomForeground ? 'green' : null}
        backgroundColor={showCustomBackground ? 'blue' : null}
        customBorderImageSource={showCustomBorderImage ? rainbowGradientSource : null}
        isRingVisible={true}
        hasRingInnerGap={showRingGap}
        size={'size72'}
      />
    </View>
  );
};

const AvatarSizeRamp: React.FunctionComponent = () => {
  const allSizes: Size[] = ['size16', 'size20', 'size24', 'size32', 'size40', 'size56', 'size72'];

  return (
    <Stack style={{ flexDirection: 'row' }}>
      {allSizes.map((size, index) => (
        <NativeAvatar key={index} primaryText="Kat Larrson" secondaryText="Kat.Larrson@example.com" size={size} />
      ))}
    </Stack>
  );
};

const avatarSections: TestSection[] = [
  {
    name: 'Basic Avatar',
    testID: NATIVE_AVATAR_TESTPAGE,
    component: BasicAvatar,
  },
  {
    name: 'Custom Colors',
    testID: NATIVE_AVATAR_TESTPAGE,
    component: CustomizeColors,
  },
  {
    name: 'Size Ramp',
    component: AvatarSizeRamp,
  },
];

export const NativeAvatarTest: React.FunctionComponent = () => {
  const status: PlatformStatus = {
    win32Status: 'Backlog',
    uwpStatus: 'Backlog',
    iosStatus: 'Beta',
    macosStatus: 'Experimental',
    androidStatus: 'Backlog',
  };

  const description =
    'AvatarView is a visual representation of a user, entity, or group. If an image is supplied, it is cropped to a circle of the requested size. If an image is not supplied, initials are extracted from the given name and email address provided and displayed on a colorful background.';

  return <Test name="Avatar Test" description={description} sections={avatarSections} status={status} />;
};
