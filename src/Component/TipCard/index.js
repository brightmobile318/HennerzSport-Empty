import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import { styles } from './TipCard.style';

import sport1 from '../../../assets/img/avatar/sport1.png';
import sport2 from '../../../assets/img/avatar/sport2.png';
import sport3 from '../../../assets/img/avatar/sport3.png';
import sport4 from '../../../assets/img/avatar/sport4.png';

const sports = {
    'Football' : sport2,
    'Basketball' : sport1,
    'Horse Riding' : sport3,
    'American Football' : sport4
}

export default class TipCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: null
        }
    }

    render() {
        const { tip } = this.props;
        
        let unix_timestamp = tip.date;
        var date = new Date(unix_timestamp);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var tipTime = year + '/' + month + '/' + day + ' | ' + hours + ':' + minutes;

        const tipster = tip.tip_tipster[0];

        return(
            <ImageBackground source={ tip.background } resizeMode="cover" style={ styles.tipcardPane } >
                <View style={ styles.tipcardHeader }>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={sports[tip.sport]} style={{width: 30, height: 30}} />
                        <Text style={styles.datatime}>{tipTime}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={styles.nameLabel}>{
                            tipster ? tipster.username : null
                        }</Text>
                        <View style={{backgroundColor: 'white', borderRadius: 50, overflow: 'hidden'}}>
                            {
                                tip.url !== '' && <Image source={{ uri: tip.url }} style={{width: 30, height: 30, resizeMode: 'contain'}} />
                            }
                            {
                                tip.url === '' && <View style={{width: 30, height: 30}}></View>
                            }
                        </View>
                    </View>
                </View>
                {
                    tip.tipType === 'Race' && <View style={{marginBottom: 8}}>
                        <Text style={{fontSize: 17, fontFamily: 'Lato', color: 'white', textAlign: 'center'}}>{tip.team1}</Text>
                        <Text style={{fontSize: 20, fontFamily: 'Lato', color: 'white', fontWeight: '800', textAlign: 'center'}}>{tip.team2}</Text>
                    </View>
                }
                {
                    tip.tipType !== 'Race' && <Text style={styles.tipTitle}>{ tip.team1 } VS { tip.team2 }</Text>
                }
                <View style={ styles.tipcardBody } >
                    <View style={ styles.oddPane }>
                        <Text style={styles.paneLabel}>Odds</Text>
                        <Text style={styles.paneValue}>{ tip.over }</Text>
                    </View>
                    <View style={ styles.oddPane }>
                        <Text style={styles.paneLabel}>Stake</Text>
                        <Text style={styles.paneValue}>{ '\u00A3' }{ tip.stake }</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 2, backgroundColor: '#9bffb5'}} />
                </View>
                <View style={ styles.tipcardFooter }>
                    <Text style={styles.returnLabel}>Return </Text>
                    <Text style={styles.footerLabel}>{ '\u00A3' }{ tip.return }</Text>
                </View>
            </ImageBackground>
        );
    }
}
