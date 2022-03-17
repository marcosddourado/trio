import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';
import colors from '../common/colors';
import {hp, wp} from '../common/dimensions';
import RestaurantMenu from '../components/molecules/Restaurant/RestaurantMenu';
import {useDispatch} from 'react-redux';
import RestaurantReducer from '../redux/reducers/restaurant-reducer/restaurant.reducer';
import {useTypedSelector} from '../redux/selectors';
import Loading from '../components/atoms/Loading';
import {IMenuSection} from '../interfaces/restaurant.interface';
import ErrorAlert from '../components/atoms/ErrorAlert';

const Restaurant = () => {
  const dispatch = useDispatch();

  const {isRestaurantLoading, restaurant, restaurantError} = useTypedSelector(
    state => state.restaurant,
  );

  useEffect(() => {
    dispatch(RestaurantReducer.actions.fetchRestaurant());
  }, [dispatch]);

  const onRetryButtonPressed = () => {
    dispatch(RestaurantReducer.actions.fetchRestaurant());
  };

  return isRestaurantLoading ? (
    <Loading />
  ) : restaurantError ? (
    <ErrorAlert
      showAlert
      message={restaurantError}
      onConfirmPressed={onRetryButtonPressed}
    />
  ) : (
    <Container>
      <RestaurantNameWrapper>
        <RestaurantName>{restaurant?.restaurant_name}</RestaurantName>
      </RestaurantNameWrapper>

      <RestaurantMenu
        sections={restaurant?.menus[0].menu_sections as IMenuSection[]}
      />
    </Container>
  );
};

const Container = styled(View)`
  padding-bottom: ${hp(40)}px;
`;

const RestaurantNameWrapper = styled(View)`
  padding-bottom: ${hp(27)}px;
  padding-top: ${hp(69)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.separator};
  margin-bottom: ${hp(30)}px;
`;

const RestaurantName = styled(Text)`
  color: ${colors.title};
  text-align: center;
  font: normal normal normal ${wp(26)}px / ${wp(28)}px Montserrat-Regular;
  letter-spacing: 1.86px;
  text-transform: uppercase;
`;

export default Restaurant;
