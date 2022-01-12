import React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Animated } from 'react-native';

class Tab2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animX: new Animated.Value(0)
        }
    }

    moveTab = (param) => {        
        if(param == 0) {
            Animated.timing(this.state.animX, {
                toValue: param,
                duration: 300
            }).start();
            this.props.moveTab(0);
        }
        if(param == 180) {
            Animated.timing(this.state.animX, {
                toValue: param,
                duration: 300
            }).start();
            this.props.moveTab(1);
        }
    }

    render() {
        return (
            <View style={{position: 'relative', width: 360, height: 50, backgroundColor: '#707070', marginLeft: 'auto', marginRight: 'auto', borderRadius: 28, flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                <Animated.View
                    style={[
                        {
                            position: 'absolute',
                            width: 180,
                            backgroundColor: '#007A78',
                            height: 50,
                            borderRadius: 28
                        },
                        {                            
                            left: this.state.animX
                        }
                    ]}
                > 
                </Animated.View> 
                <TouchableOpacity style={{width: 180}} onPress={() => this.moveTab(0)}>
                                <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontFamily: 'Lato-Regular'}}>{this.props.tabNames[0]}</Text>
                            </TouchableOpacity>
                <TouchableOpacity style={{width: 180}} onPress={() => this.moveTab(180)}>
                                <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontFamily: 'Lato-Regular'}}>{this.props.tabNames[1]}</Text>
                            </TouchableOpacity>
            </View>
        )
    }
}

export default Tab2;
