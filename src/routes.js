import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';



import Home from './pages/Home';
import FirstScreen from './pages/FirstScreen';
import SecondScreen from './pages/SecondScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
      </DrawerContentScrollView>
    );
  }

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='First Screen' component={FirstScreen} />
                <Drawer.Screen name='Second Screen' component={SecondScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}