import React from 'react';
import styled from 'styled-components';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {
  IMenuItem,
  IMenuSection,
} from '../../../interfaces/restaurant.interface';
import {hp} from '../../../common/dimensions';
import colors from '../../../common/colors';
import MenuSections from './MenuSections';
import MenuItem from './MenuItem';

interface Props {
  sections: IMenuSection[];
  selectedItemId: number;
  onChangeItem: (itemId: number) => void;
  menuItems: IMenuItem[];
}

const MenuTabNavigator = ({
  sections,
  selectedItemId,
  onChangeItem,
  menuItems,
}: Props) => {
  const renderMenuSections = () => {
    return (
      <MenuSections
        sections={sections}
        selectedItemId={selectedItemId}
        onChangeItem={onChangeItem}
      />
    );
  };

  const keyExtractor = (item: IMenuItem) =>
    `menu_item_${item.name}_${item.description}`;

  const renderItem = ({item}: ListRenderItemInfo<IMenuItem>) => {
    return <MenuItem item={item} />;
  };

  const renderSeparator = () => <Separator />;

  return (
    <View>
      <FlatList
        ListHeaderComponent={renderMenuSections}
        data={menuItems}
        keyExtractor={keyExtractor}
        stickyHeaderIndices={[0]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const Separator = styled(View)`
  width: 90%;
  height: ${hp(2)}px;
  background-color: ${colors.separator};
  align-self: center;
`;

export default MenuTabNavigator;
