import React, {useState} from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';
import colors from '../common/colors';
import {hp, wp} from '../common/dimensions';
import {MenuSection} from '../interfaces/restaurant.interface';
import MenuList from '../components/molecules/RestaurantMenu/MenuList';

interface Props {
  sections: MenuSection[];
}

const FIRST_MENU_ITEM_ID = 0;

const RestaurantMenu = ({sections}: Props) => {
  const [selectedMenuItemId, setSelectedMenuItemId] =
    useState<number>(FIRST_MENU_ITEM_ID);

  const onChangeMenuItem = (itemId: number) => {
    setSelectedMenuItemId(itemId);
  };

  return (
    <Container>
      <Title>MENU</Title>

      <MenuList
        sections={sections}
        selectedItemId={selectedMenuItemId}
        onChangeItem={onChangeMenuItem}
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
