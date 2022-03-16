import React from 'react';
import styled from 'styled-components';
import {
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMenuSection} from '../../../interfaces/restaurant.interface';
import {hp, wp} from '../../../common/dimensions';
import colors from '../../../common/colors';

interface Props {
  sections: IMenuSection[];
  selectedItemId: number;
  onChangeItem: (itemId: number) => void;
}

const MenuSections = ({sections, selectedItemId, onChangeItem}: Props) => {
  const keyExtractor = (item: IMenuSection): string =>
    `${item.section_name}_menu`;

  const renderItem = (info: ListRenderItemInfo<IMenuSection>) => {
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
      <Tabs
        data={sections}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const Tabs = styled(FlatList).attrs({
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

export default MenuSections;
