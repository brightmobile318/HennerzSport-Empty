import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { styles } from './SettingComponent.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {        
            animX: new Animated.Value(!!this.props.isActive ? 30: 0),
        }
    }

    componentWillReceiveProps(nextProps) {
        Animated.timing(this.state.animX, {
            toValue: !!nextProps.isActive ? 30 : 0,
            duration: 500
        }).start();
    }

    _onSelectOption = () => {        
        this.props.onSelect(!this.props.isActive);
    }


    
    render() {
        return(
            <TouchableOpacity style={styles.SettingComponentPane} onPress={ () => this.props.runFunction(this.props.functionName) }>
                <Icon name={ this.props.iconName } size={ 28 } color="white" style={ styles.SettingComponentIcon }/>
                <View style={ styles.SettingComponentFunctionPane }>
                    <Text style={ styles.SettingComponentFunctionName }>{ this.props.functionName }</Text>
                {
                    this.props.selectable === 'avaliable'?
                    <View>
                        <TouchableOpacity onPress={ this._onSelectOption }>
                        <View style={[styles.SettingComponentSelectBoard, this.props.isActive ? {backgroundColor: '#007a78'} : {backgroundColor: '#707070'}]}>
                            <Animated.View style={ [styles.SettingComponentSelect, {
                                left: this.state.animX
                            }] }></Animated.View>
                        </View>
                        </TouchableOpacity>
                    </View> : null
                }
                </View>
            </TouchableOpacity>
        );
    }
}