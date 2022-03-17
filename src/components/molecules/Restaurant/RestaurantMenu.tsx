import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import colors from '../../../common/colors';
import {hp, wp} from '../../../common/dimensions';
import {
  IMenuItem,
  IMenuSection,
} from '../../../interfaces/restaurant.interface';
import MenuTabNavigator from './MenuTabNavigator';
import _ from 'lodash';

interface Props {
  sections: IMenuSection[];
}

const FIRST_MENU_ITEM_ID = 0;

const RestaurantMenu = ({sections}: Props) => {
  const getUniqueMenuItemsByName = (itemId: number) =>
    sections?.length ? _.uniqBy(sections[itemId].menu_items, 'name') : [];

  const [selectedMenuItemId, setSelectedMenuItemId] =
    useState<number>(FIRST_MENU_ITEM_ID);
  const [menuItems, setMenuItems] = useState<IMenuItem[]>(
    getUniqueMenuItemsByName(FIRST_MENU_ITEM_ID),
  );

  const onChangeMenuItem = (itemId: number) => {
    setSelectedMenuItemId(itemId);

    setMenuItems(getUniqueMenuItemsByName(itemId));
  };

  return (
    <Container>
      <Title>MENU</Title>

      <MenuTabNavigator
        sections={sections}
        selectedItemId={selectedMenuItemId}
        onChangeItem={onChangeMenuItem}
        menuItems={menuItems}
      />
    </Container>
  );
};

const Container = styled(View)`
  flex-grow: 1;
  margin-left: ${hp(30)}px;
  margin-right: ${hp(30)}px;
`;

const Title = styled(Text)`
  text-align: center;
  font: normal normal normal ${wp(26)}px / ${wp(28)}px Montserrat-Regular;
  letter-spacing: 0px;
  color: ${colors.subtitle};
  margin: ${hp(46)}px;
`;

export default RestaurantMenu;
