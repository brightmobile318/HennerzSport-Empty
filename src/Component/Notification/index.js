import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { styles } from './Notification.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';

export default class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
        }
    }
    _changeState = () => {
        this.setState({isShow: !this.state.isShow});
    }
    render() {
        return(
            <View style={styles.notificationPane}>
                <TouchableOpacity onPress={this._changeState}>
                    <View style={styles.notificationboard}>
                        {
                            this.state.isShow === true?
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                                <View style={{flexDirection: 'row'}} >
                                    <Icon name="comment" size={ 28 } color="#007a78" />
                                    <Text style={ styles.notificationfocusDate }>{ this.props.date }</Text>
                                    <Text style={ styles.notificationfocusTime }>{ this.props.time }</Text>
                                </View>
                                <Icon name="angle-down" size={ 28 } color="#007a78" />
                            </View>
                            : null
                        }
                        {
                            this.state.isShow === false?
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{flexDirection: 'row'}} >
                                    <Icon name="comment" size={ 28 } color="#004080" />
                                    <Text style={ styles.notificationDate }>{ this.props.date }</Text>
                                    <Text style={ styles.notificationTime }>{ this.props.time }</Text>                                
                                </View>
                                <View>
                                    <Icon name="angle-up" size={ 28 } color="#004080" />
                                </View>
                            </View> : null
                        }
                    </View>
                </TouchableOpacity>

                <View>
                    {
                        this.state.isShow === true ?
                        <View>
                            <Text style={styles.notiContainer}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Lacinia consectetur nunc, id accimsan dolor pulvinar eget. Integer semper purus ut magna eleifend. Ut non lectus eu dui sodales finbus. Curabitur ante felis, laoreet porta fermentum sit amet, scelerisque sit amet eros. Aliquam hendrerit neque sem. Curabitur lobortis ullacorper est, vel vulputate purus blandit quis. Aliquam id diam in mi seclerusque pulvinar.
                            </Text>
                            <Button style={styles.removeBtn}>Remove notification</Button>
                        </View>:null
                    }
                </View>
            </View>    
        );
    }
}