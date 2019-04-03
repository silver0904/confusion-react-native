import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishDetailComponent';
import Home from './HomeComponent';
import Contactus from './ContactComponent';
import Aboutus from './AboutComponent';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);
const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
}, {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTitleStyle: {
                color: "#fff"
            },
            headerTintColor: "#fff"
        })
    });
const AboutusNavigator = createStackNavigator({
    Home: { screen: Aboutus }
}, {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTitleStyle: {
                color: "#fff"
            },
            headerTintColor: "#fff"
        })
});

const ContactusNavigator = createStackNavigator({
    Home: { screen: Contactus }
}, {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTitleStyle: {
                color: "#fff"
            },
            headerTintColor: "#fff"
        })
});

const MainNavigator = createDrawerNavigator({
    Home:
    {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Aboutus:
    {
        screen: AboutusNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us'
        }
    },

    Menu:
    {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        },
    },
    Contactus:
    {
        screen: ContactusNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us'
        }
    }
}, {
        drawerBackgroundColor: '#D1C4E9'
    });
class Main extends Component {

    render() {
        // return(
        //     <View style={{flex:1, paddingTop:Platform.OS ==='ios'? 0:Expo.Constants.statusBarHeight}}>
        //         <MenuNavigator/>
        //     </View>
        // )
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>

        );
    }
}


export default Main;