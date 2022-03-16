import React from 'react';
import styled from 'styled-components';
import {
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
  SectionList,
  BackHandler,
} from 'react-native';
import {MenuItem, MenuSection} from '../../../interfaces/restaurant.interface';
import {hp, wp} from '../../../common/dimensions';
import colors from '../../../common/colors';

interface Props {
  sections: MenuSection[];
  selectedItemId: number;
  onChangeItem: (itemId: number) => void;
  menuItems: MenuItem[];
}

const MenuTabNavigator = ({
  sections,
  selectedItemId,
  onChangeItem,
  menuItems,
}: Props) => {
  const keyExtractor = (item: MenuSection): string =>
    `${item.section_name}_menu`;

  const renderItem = (info: ListRenderItemInfo<MenuSection>) => {
    const isItemSelected = info.index === selectedItemId;

    return (
      <TouchableOpacity
        onPress={() => {
          onChangeItem(info.index);
        }}>
        <TabMenuItemText
          style={{
            color: isItemSelected ? colors.subtitle : colors.text,
            borderBottomColor: colors.title,
            borderBottomWidth: isItemSelected ? 2 : 0,
          }}>
          {info.item.section_name}
        </TabMenuItemText>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View>
              <Tab
                data={sections}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
              />
            </View>
          );
        }}
        data={menuItems}
        keyExtractor={(item: MenuItem) =>
          `menu_item_${item.name}_${item.description}`
        }
        stickyHeaderIndices={[0]}
        renderItem={({item}: ListRenderItemInfo<MenuItem>) => {
          return (
            <MenuItemWrapper>
              <MenuItemTitle>{item.name}</MenuItemTitle>
              {item.description ? (
                <MenuItemDescription>{item.description}</MenuItemDescription>
              ) : (
                <></>
              )}
              <MenuItemPrice>{item.pricing[0].priceString}</MenuItemPrice>
            </MenuItemWrapper>
          );
        }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

const Tab = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  border-color: ${colors.separator};
  border-width: 1px;
  background-color: ${colors.background};
` as unknown as typeof FlatList;

const TabMenuItemText = styled(Text)`
  text-align: center;
  font: normal normal normal ${wp(27)}px Montserrat-Regular;
  letter-spacing: 0px;
  color: ${colors.text};
  padding: ${hp(40)}px ${wp(5)}px;
  margin-right: ${wp(100)}px;
  text-transform: uppercase;
`;

const MenuItemTitle = styled(Text)`
  text-align: center;
  font: normal normal normal ${wp(48)}px / ${wp(64)}px PlayfairDisplay-Regular;
  letter-spacing: -0.96px;
  color: ${colors.title};
`;

const MenuItemDescription = styled(Text)`
  text-align: center;
  font: normal normal normal ${wp(30)}px / ${wp(48)}px PlayfairDisplay-Regular;
  letter-spacing: 0px;
  color: ${colors.text};
  margin-top: ${hp(20)}px;
`;

const MenuItemPrice = styled(Text)`
  text-align: center;
  font: normal normal normal ${wp(22)}px / ${wp(27)}px Montserrat-Regular;
  letter-spacing: 1px;
  color: #777777;
  margin-top: ${hp(20)}px;
`;

const MenuItemWrapper = styled(View)`
  margin: ${hp(55)}px;
`;

const Separator = styled(View)`
  width: 90%;
  height: ${hp(2)}px;
  background-color: ${colors.separator};
  align-self: center;
`;

export default MenuTabNavigator;
