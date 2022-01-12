import React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Animated, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import close from '../../../assets/img/close.png';

class AnimatedTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animX: new Animated.Value(0),
            animW: new Animated.Value(0),
            isSearch: false
        }
    }

    moveTab = (param) => {    
        const { type } = this.props;

        if(param == 0) {
            Animated.timing(this.state.animX, {
                toValue: param,
                duration: 300
            }).start();
            Animated.timing(this.state.animW, {
                toValue: 0,
                duration: 1
            }).start();
            this.props.moveTab(0);
        }
        if(param == 120) {
            Animated.timing(this.state.animX, {
                toValue: param,
                duration: 300
            }).start();
            Animated.timing(this.state.animW, {
                toValue: 0,
                duration: 1
            }).start();
            this.props.moveTab(1);
        }
        if(param == 240) {
            if(type == 'refine') {
                Animated.timing(this.state.animX, {
                    toValue: param,
                    duration: 300
                }).start();
                Animated.timing(this.state.animW, {
                    toValue: 0,
                    duration: 1
                }).start();
            } else {
                this.setState({
                    isSearch: true,
                });
                Animated.timing(this.state.animW, {
                    toValue: 360,
                    duration: 300
                }).start();   
            }
            this.props.moveTab(2);
        }
    }

    render() {
        const { isSearch } = this.state;
        const { type } = this.props;

        return (
            <View style={[{position: 'relative', width: 360, minHeight: 50, marginLeft: 'auto', marginRight: 'auto', borderRadius: 28, flexDirection: 'row', alignItems: 'center', marginBottom: 20}, this.props.searchResults.length == 0 ? {backgroundColor: '#707070'} : {backgroundColor: '#007A78'}]}>
                {
                    !isSearch ? <Animated.View
                                style={[
                                    {
                                        position: 'absolute',
                                        width: 120,
                                        backgroundColor: '#007A78',
                                        height: 50,
                                        borderRadius: 28
                                    },
                                    {                            
                                        left: this.state.animX
                                    }
                                ]}
                            >
                            </Animated.View> : null
                }
                {
                    !isSearch ? <TouchableOpacity style={{width: 120}} onPress={() => this.moveTab(0)}>
                                <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontFamily: 'Lato-Regular'}}>Tipster</Text>
                            </TouchableOpacity> : null
                }
                {
                    !isSearch ? <TouchableOpacity style={{width: 120}} onPress={() => this.moveTab(120)}>
                                <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontFamily: 'Lato-Regular'}}>Sport</Text>
                            </TouchableOpacity> : null
                }
                {
                    !isSearch ? type == 'refine' ? 
                        <TouchableOpacity style={{width: 120}} onPress={() => this.moveTab(240)}>
                            <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontFamily: 'Lato-Regular'}}>Odds</Text>
                        </TouchableOpacity> : 
                        <TouchableOpacity style={{width: 120}} onPress={() => this.moveTab(240)}>
                            <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontFamily: 'Lato-Regular'}}>Search</Text>
                        </TouchableOpacity> : null
                }
                {
                    isSearch ? <Animated.View
                                style={[
                                    {
                                        position: 'absolute',
                                        zIndex: 1,
                                        backgroundColor: '#007A78',
                                        borderRadius: 28,
                                        top: 0,
                                        right: 0,
                                        paddingHorizontal: 12,
                                    },
                                    {                            
                                        width: this.state.animW
                                    }
                                ]}
                            >
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <TextInput style={{width: '90%', color: 'white', fontSize: 18, fontFamily: 'Lato-Regular'}} onChangeText={text => this.props.onChange(text)}></TextInput>
                                    <TouchableOpacity onPress={() => {
                                        this.setState({
                                            isSearch: false,
                                            animW: new Animated.Value(0),
                                        });
                                        this.moveTab(0);
                                    }}>
                                        <Image style={{marginRight: 8}} source={close} />
                                    </TouchableOpacity>
                                </View>
                            </Animated.View> : null
                }
                {
                    isSearch ? <View style={[{width: '100%', marginTop: 50, backgroundColor: '#007A78', borderBottomLeftRadius: 28, borderBottomRightRadius: 28, paddingHorizontal: 12, maxHeight: Dimensions.get('window').height - 570}, this.props.searchResults.length > 0 ? {paddingBottom: 20} : {paddingBottom: 0}]}>
                        <ScrollView>
                            {
                                this.props.searchResults.map(data => {
                                    return <TouchableOpacity style={{ borderTopColor: 'white', borderTopWidth: 1, width: '100%', paddingVertical: 8}} key={data._id} onPress={() => {
                                        this.props.pickTipster(data._id)
                                        this.setState({
                                            isSearch: false,
                                            animW: new Animated.Value(0),
                                        });
                                        this.moveTab(0);
                                    }}>
                                        <Text style={{width: '90%', color: 'white', fontSize: 18, fontFamily: 'Lato-Regular'}}>{data.username}</Text>
                                    </TouchableOpacity>
                                })
                            }
                        </ScrollView>
                    </View> : null
                }
            </View>
        )
    }
}

export default AnimatedTab;
