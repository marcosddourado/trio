import React from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';
import {IMenuItem} from '../../../interfaces/restaurant.interface';
import {hp, wp} from '../../../common/dimensions';
import colors from '../../../common/colors';

interface Props {
  item: IMenuItem;
}

const MenuItem = ({item}: Props) => {
  return (
    <Container>
      <Title>{item.name}</Title>
      {item.description ? <Description>{item.description}</Description> : <></>}
      <Price>{item.pricing[0].priceString}</Price>
    </Container>
  );
};

const Container = styled(View)`
  margin: ${hp(55)}px;
`;

const Title = styled(Text)`
  text-align: center;
  font: normal normal normal ${wp(48)}px / ${wp(64)}px PlayfairDisplay-Regular;
  letter-spacing: -0.96px;
  color: ${colors.title};
`;

const Description = styled(Text)`
  text-align: center;
  font: normal normal normal ${wp(30)}px / ${wp(48)}px PlayfairDisplay-Regular;
  letter-spacing: 0px;
  color: ${colors.text};
  margin-top: ${hp(20)}px;
`;

const Price = styled(Text)`
  text-align: center;
  font: normal normal normal ${wp(22)}px / ${wp(27)}px Montserrat-Regular;
  letter-spacing: 1px;
  color: #777777;
  margin-top: ${hp(20)}px;
`;

export default MenuItem;
