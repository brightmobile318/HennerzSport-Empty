import 'react-native-gesture-handler';
import React, { Component } from 'react';  
import { Platform, StyleSheet, View, SafeAreaView } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from './src/screen/Splash';
import WelcomeScreen from './src/screen/Welcome';
import SignupScreen from './src/screen/Signup';
import WelcomeFaceScreen from './src/screen/WelcomeFaceId';
import TodayTipsShowScreen from './src/screen/TodayTipShow';
import SigninScreen from './src/screen/Signin';
import ForgotScreen from './src/screen/ForgotPassword';
import LoadScreen from './src/screen/Load';
import CancelSubscription from './src/screen/CancelSubscription';
// bottomTab
import FeedScreen from './src/screen/Feed';
import TodayTipsScreen from './src/screen/TodayTips';
import TipstersScreen from './src/screen/Tipsters';
import FutuerTipsScreen from './src/screen/FutureTip';
import SettingScreen from './src/screen/Setting';

import { Provider } from 'react-redux'
import store from './store'

const NavigateStack = createStackNavigator();
function NavigateStackScreen(){
  return(
    <NavigateStack.Navigator>
      {/* <NavigateStack.Screen 
        name="BottomNav"
        component = { BottomNavScreen }
        options={{headerShown:false}}
      /> */}
      <NavigateStack.Screen 
        name="Welcome" 
        component={ WelcomeScreen } 
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="Signup"
        component = { SignupScreen }
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="SignIn"
        component = { SigninScreen }
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="ForgotScreen"
        component = { ForgotScreen }
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="LoadScreen"
        component = { LoadScreen }
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="TodayTipsShow"
        component = { TodayTipsShowScreen }
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="WelcomeFace"
        component = { WelcomeFaceScreen }
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="TipShow"
        component = { TodayTipsShowScreen }
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="CancelSubscription"
        component = { CancelSubscription }
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="BottomNav"
        component = { BottomNavScreen }
        options={{headerShown:false}}
      />
    </NavigateStack.Navigator>
  )
};

// const BottomNav = createBottomTabNavigator();
const BottomNav = createMaterialBottomTabNavigator();
function BottomNavScreen() {
  return(
    <BottomNav.Navigator
      labeled={false}
      initialRouteName="Home"
      activeColor="#007A78"
      inactiveColor="#B3B3B3"
      barStyle={{ backgroundColor: '#000', borderTopColor: '#007A78', borderTopWidth: 2, height: 60 }}
    >
      <BottomNav.Screen name="Feed" component={ FeedScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon 
              name="bullhorn" 
              size={25} 
              color= { color }
            />
        ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <BottomNav.Screen name="TodayTip" component={ TodayTipsScreen } 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon 
              name="fire" 
              size={25} 
              color= { color }
            />
        ),
        headerShown: false,
        tabBarShowLabel: false,
      }}      
      />
      <BottomNav.Screen name="FutureTip" component={ FutuerTipsScreen } 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon 
              name="clock-time-three-outline" 
              size={25} 
              color= { color }
            />
        ),
        headerShown: false,
        tabBarShowLabel: false,
        }}      
      />
      <BottomNav.Screen name="Tipsters" component={ TipstersScreen } 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon 
              name="crosshairs-gps" 
              size={25} 
              color= { color }
            />
        ),
        headerShown: false,
        tabBarShowLabel: false,
        }}      
      />
      <BottomNav.Screen name="Setting" component={ SettingScreen } 
        options={{
          tabBarIcon: ({ color }) => (
            <Icon 
              name="cog" 
              size={25} 
              color= { color }
            />
        ),
        headerShown: false,
        tabBarShowLabel: false,
        }}      
      />
    </BottomNav.Navigator>
  );
};

export default class App extends Component{  
  constructor(){
    super();
    this.state={
      isVisible : true,  
    }
  }
  Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false
    });
  }
  componentDidMount(){
    var that = this;
    setTimeout(function(){
      that.Hide_Splash_Screen();
    }, 1500);
  }

  render(){
    let Splash_Screen = (  
      <View style={styles.SplashScreen_RootView}>  
          <SplashScreen />
      </View> 
    )
    return(
      <Provider store={store}>
        <SafeAreaView style = { styles.MainContainer }>
          <NavigationContainer>
            <NavigateStackScreen />
          </NavigationContainer> 
          {  
            (this.state.isVisible === true) ? Splash_Screen : null  
          }  
        </SafeAreaView>          
      </Provider>
    );  
  }
}
const styles = StyleSheet.create(  
{  
    MainContainer: {  
        flex: 1,
        justifyContent: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 0 : 0,
    },  
    SplashScreen_RootView:{  
        justifyContent: 'center',  
        flex:1,  
        margin: 0,  
        position: 'absolute',  
        width: '100%',  
        height: '100%', 
      },  
   
    SplashScreen_ChildView:{  
        justifyContent: 'center',  
        alignItems: 'center',  
        flex:1,  
    },  
    bottomTabIcon: {
      width: 25,
      height: 25,
    },
});  