import React from 'react';
import styled from 'styled-components';
import {
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import {MenuSection} from '../../../interfaces/restaurant.interface';
import {hp, wp} from '../../../common/dimensions';
import colors from '../../../common/colors';

interface Props {
  sections: MenuSection[];
  selectedItemId: number;
  onChangeItem: (itemId: number) => void;
}

const MenuList = ({sections, selectedItemId, onChangeItem}: Props) => {
  const keyExtractor = (item: MenuSection): string =>
    `${item.section_name}_menu`;

  const renderItem = (info: ListRenderItemInfo<MenuSection>) => {
    const isItemSelected = info.index === selectedItemId;

    return (
      <TouchableOpacity
        onPress={() => {
          onChangeItem(info.index);
        }}>
        <MenuItem
          style={{
            color: isItemSelected ? colors.subtitle : colors.text,
            borderBottomColor: colors.title,
            borderBottomWidth: isItemSelected ? 2 : 0,
          }}>
          {info.item.section_name}
        </MenuItem>
      </TouchableOpacity>
    );
  };

  return (
    <List data={sections} keyExtractor={keyExtractor} renderItem={renderItem} />
  );
};

const List = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  border-color: ${colors.separator};
  border-width: 1px;
` as unknown as typeof FlatList;

const MenuItem = styled(Text)`
  text-align: center;
  font: normal normal normal ${wp(27)}px Montserrat-Regular;
  letter-spacing: 0px;
  color: ${colors.text};
  padding: ${hp(40)}px ${wp(5)}px;
  margin-right: ${wp(100)}px;
  text-transform: uppercase;
`;

export default MenuList;
