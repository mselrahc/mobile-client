import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mainRoutes } from '../configs/routes';

const Tab = createMaterialBottomTabNavigator();

const getTabIcon = (iconName, focused) => {
  const iconStyles = [styles.icon];
  if (focused) {
    iconStyles.push(styles.activeIcon);
  }

  return <MaterialCommunityIcons name={iconName} style={iconStyles} />;
};

function MainScreenTab(props) {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      shifting={false}
      inactiveColor={styles.buttonText.color}
      activeColor={styles.activeButtonText.color}
      barStyle={[styles.container, props.style]}
      backBehavior="initialRoute"
    >
      {mainRoutes.map(({ name, component, iconName }, i) => (
        <Tab.Screen
          key={i}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({ focused }) => getTabIcon(iconName, focused),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowColor: '#111',
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12,
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#616161',
    fontSize: 24,
    opacity: 0.8,
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: '#9E9E9E',
    paddingTop: 4,
    fontSize: 12,
    fontFamily: 'roboto-regular',
  },
  activeIcon: {
    color: '#3f51b5',
  },
  activeButtonText: {
    color: '#3f51b5',
  },
});

export default MainScreenTab;
