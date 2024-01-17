import * as React from 'react';
import { Text, View, Platform } from 'react-native';

import type { ContextualMenuProps } from '@fluentui/react-native';
import type { InteractionEvent } from '@fluentui/react-native';
import { Separator } from '@fluentui/react-native';
import { MenuButton } from '@fluentui-react-native/experimental-menu-button';
import type { IconSourcesType } from '@fluentui-react-native/icon';
import { Switch } from '@fluentui-react-native/switch';

import { viewWrapperStyle, columnStyle, rowStyle, textColor } from './MenuButtonV1TestStyles';
import { menuItems, iconProps } from './testData';
import { testImage } from '../Common/iconExamples';

export const StandardMenuButton: React.FunctionComponent = () => {
  const [lastMenuItemClicked, setLastMenuItemClicked] = React.useState(null);

  const [focusOnMount, setShouldFocusOnMount] = React.useState(true);
  const toggleFocusOnMount = React.useCallback(
    (_e: InteractionEvent, value?: boolean) => setShouldFocusOnMount(value),
    [setShouldFocusOnMount],
  );

  const [focusOnContainer, setShouldFocusOnContainer] = React.useState(false);
  const toggleFocusOnContainer = React.useCallback(
    (_e: InteractionEvent, value?: boolean) => setShouldFocusOnContainer(value),
    [setShouldFocusOnContainer],
  );

  const onItemClick = React.useCallback(
    (key) => {
      setLastMenuItemClicked(key);
    },
    [setLastMenuItemClicked],
  );

  const contextualMenuProps: ContextualMenuProps = {
    accessibilityLabel: 'MenuButton',
    shouldFocusOnMount: focusOnMount,
    shouldFocusOnContainer: focusOnContainer,
  };

  const iconToShow: IconSourcesType = Platform.select({
    macos: testImage, //GH #931, macOS MenuButton only supports showing PNG icons
    default: iconProps,
  });

  return (
    <View>
      <View style={viewWrapperStyle}>
        <View style={columnStyle}>
          <View style={rowStyle}>
            <Text>Should Focus on Mount</Text>
            <Switch checked={focusOnMount} onChange={toggleFocusOnMount} />
          </View>

          <View style={rowStyle}>
            <Text>Should Focus on Container</Text>
            <Switch checked={focusOnContainer} onChange={toggleFocusOnContainer} />
          </View>
        </View>

        <Separator vertical />

        <View style={columnStyle}>
          <Text>
            <Text>Last Menu Item Clicked: </Text>
            {lastMenuItemClicked > 0 ? <Text style={textColor}>{lastMenuItemClicked}</Text> : <Text style={textColor}>none</Text>}
          </Text>
          <View style={{ ...rowStyle, paddingHorizontal: 5 }}>
            <View style={columnStyle}>
              <MenuButton
                content="Standard MenuButton"
                menuItems={menuItems}
                onItemClick={onItemClick}
                contextualMenu={contextualMenuProps}
              />
              <Text>MenuButton with icon</Text>
              <MenuButton
                icon={iconToShow}
                content="MenuButton"
                menuItems={menuItems}
                onItemClick={onItemClick}
                contextualMenu={contextualMenuProps}
              />
              <Text>MenuButton with only icon</Text>
              <MenuButton icon={iconToShow} menuItems={menuItems} onItemClick={onItemClick} contextualMenu={contextualMenuProps} />
              <Text>Disabled MenuButton</Text>
              <MenuButton disabled content="Disabled MenuButton" menuItems={menuItems} />
            </View>
            <Separator vertical />
            <View style={columnStyle}>
              <MenuButton
                appearance="primary"
                content="Primary MenuButton"
                menuItems={menuItems}
                onItemClick={onItemClick}
                contextualMenu={contextualMenuProps}
              />
              <Text>Primary MenuButton with icon</Text>
              <MenuButton
                appearance="primary"
                icon={iconToShow}
                content="Primary MenuButton"
                menuItems={menuItems}
                onItemClick={onItemClick}
                contextualMenu={contextualMenuProps}
              />
              <Text>Primary MenuButton with only icon</Text>
              <MenuButton
                appearance="primary"
                icon={iconToShow}
                menuItems={menuItems}
                onItemClick={onItemClick}
                contextualMenu={contextualMenuProps}
              />
              <Text>Primary Disabled MenuButton</Text>
              <MenuButton appearance="primary" disabled content="Disabled Primary MenuButton" menuItems={menuItems} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
