import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions  } from 'react-native';
import Button from 'react-native-button';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './Tipsters.style';
import TipsterComponent from '../../Component/TipsterComponent';
import SportComponent from '../../Component/SportComponent';

import avatar1 from '../../../assets/img/avatar/avatar1.png';
import avatar2 from '../../../assets/img/avatar/avatar2.png';
import avatar3 from '../../../assets/img/avatar/avatar3.png';
import avatar4 from '../../../assets/img/avatar/avatar4.png';
import sport1 from '../../../assets/img/avatar/sport1.png';
import sport2 from '../../../assets/img/avatar/sport2.png';
import sport3 from '../../../assets/img/avatar/sport3.png';
import sport4 from '../../../assets/img/avatar/sport4.png';

import back1 from '../../../assets/img/componentBack/1.png';
import back2 from  '../../../assets/img/componentBack/2.png';

import headerImage from '../../../assets/img/todayTipHeader.png';
import AnimatedTab from '../../Component/AnimatedTab';
import { backend_url } from '../../../server.js';

const sportsArr = [
    {
        id: 1,
        name: "Football",
        avatar: sport1
    },
    {
        id: 2,
        name: "Basketball",
        avatar: sport2
    },
    {
        id: 3,
        name: "Horse Riding",
        avatar: sport3
    },
    {
        id: 4,  
        name: "American Football",
        avatar: sport4
    },
]

class TipstersScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            tab: 'All',
            selectedTipster: 0,
            selectedTipsterObj: {},
            selectedSport: 0,
            isSubscribed: 0,
            tipsters: [],
            tipstersArr: [],
            tipsterSearchResults: [],
            selectedSportName: '',
            isSearched: false
        }
    };

    async componentDidMount() {
        const request = await fetch(`${backend_url}/getAllTipsters`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        );
        let responseJson = await request.json();
        if (request.status === 200) {
            if (responseJson.ok) {
                const tmp = [];
                responseJson.data.map(tipster => {
                    tmp.push(tipster);
                });
                this.setState({
                    tipsters: tmp,
                    tipstersArr: tmp
                });
            } else {
                console.log("fetch error:", responseJson.msg);
            }
        } else {
            console.log("server error:", responseJson.msg);
        }
    }

    selectTipster = (id) => {
        this.setState({
            selectedTipster: id,
        });
    }

    selectSport = (id) => {
        const pickedSport = sportsArr.filter(s => s.id == id);
        const tmp = [];
        if(pickedSport.length > 0) {
            this.state.tipsters.map(t => {
                if(t.sport == pickedSport[0].name) {
                    tmp.push(t);
                }
            })
        }
        this.setState({
            selectedSport: id,
            selectedSportName: pickedSport[0].name,
            tipstersArr: tmp
        });
    }

    subscribe = (id) => {
        this.setState({ 
            isSubscribed: id,
            selectedTipsterObj: this.state.tipsters.filter(data => data._id === id)[0]
        });
    }

    payWithGPay = () => {
        this.setState({ isSubscribed: 0});
    }

    moveTab = (param) => {
        if(param == 0) {
            this.setState({
                tab: 'All'
            });
        }
        if(param == 1) {
            this.setState({
                tab: 'Sport'
            });
        }
        if(param == 2) {
            this.setState({
                tab: 'Search'
            });
        }
        this.setState({             
            tipsterSearchResults: []
        });
    }

    tipsterSearch = (text) => {
        const  { tipsters } = this.state;
        const searchResult = tipsters.filter(tipster => tipster.username.toLowerCase().includes(text) || tipster.sport.toLowerCase().includes(text));
        this.setState({tipsterSearchResults: text != '' ? searchResult : []});
    }

    pickTipster = (id) => {
        const { tipsters } = this.state;
        const pickedTipster = tipsters.filter(t => t._id == id)
        this.setState({
            isSearched: true,
            tipstersArr: pickedTipster
        })
    }

    removeSearch = () => {
        this.setState({
            isSearched: false,
            tipstersArr: this.state.tipsters
        })
    }

    removeFilter = () => {
        const  { tipsters } = this.state;
        this.setState({
            selectedSport: 0,
            selectedSportName: '',
            tipstersArr: tipsters
        });
    }

    onTipsterChange = () => {
        this.setState({ isSubscribed: 0});
    }

    render(){
        const { tab, selectedTipster, selectedSport, isSubscribed, tipsterSearchResults, tipsters, tipstersArr, selectedSportName, isSearched, selectedTipsterObj } = this.state;

        console.log("selectedTipsterObj:", selectedTipsterObj)

        return(
            <View style={styles.container}>
                {
                    isSubscribed == 0 ? <View>
                        <View>
                            <Text style={styles.titleLabel}>Tipsters</Text>
                        </View>
                        <AnimatedTab moveTab={(param) => this.moveTab(param)} onChange={text => this.tipsterSearch(text)} searchResults={tipsterSearchResults} pickTipster={id => this.pickTipster(id)} />
                        {
                            selectedSportName != '' ? <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, width: '60%', marginLeft: 'auto', marginRight: 'auto'}}>
                                <Text style={{color: '#fff', fontSize: 12, fontFamily: 'Lato-regular'}}>{selectedSportName} filter applied</Text>
                                <TouchableOpacity style={{borderWidth: 1, borderColor: '#fff', paddingHorizontal: 2}} onPress={this.removeFilter}>
                                    <Icon 
                                        name="close"
                                        size={14} 
                                        color= {"#fff"}
                                    />
                                </TouchableOpacity>
                            </View> : null
                        }
                        {
                            isSearched ? <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, width: '60%', marginLeft: 'auto', marginRight: 'auto'}}>
                                <Text style={{color: '#fff', fontSize: 12, fontFamily: 'Lato-regular'}}>Search filter applied</Text>
                                <TouchableOpacity style={{borderWidth: 1, borderColor: '#fff', paddingHorizontal: 2}} onPress={this.removeSearch}>
                                    <Icon 
                                        name="close" 
                                        size={14} 
                                        color= {"#fff"}
                                    />
                                </TouchableOpacity>
                            </View> : null
                        }
                        <View style={{height: Dimensions.get('window').height - 240}}>
                            <ScrollView>
                                {
                                    tab == 'All' ? tipstersArr.map(data => <TipsterComponent isType="tipster" data={data} selected={selectedTipster} key={data.id} isTouch={id => this.selectTipster(id)} subscribe={(id) => this.subscribe(id)} isSubscribed={isSubscribed} />) : null
                                }
                                {
                                    tab == 'Sport' ? sportsArr.map(data => <SportComponent selected={selectedSport} isType= "tipsterTip" id={data.id} name={data.name} avatar={data.avatar} onSelect={id => this.selectSport(id)} />) : null
                                }
                            </ScrollView>
                        </View> 
                    </View> : <View>
                        <View style={{marginBottom: 28, marginTop: 14}}>
                            <Text style={styles.titleLabel}>Adding new subscription</Text>
                        </View>
                        <View style={{marginBottom: 28}}>
                            <Text style={styles.subTitleLabel}>Add this tipster for an additional subscription</Text>
                        </View>
                        <View style={{backgroundColor: '#484848', borderWidth: 2, borderColor: 'white', borderRadius: 28, flexDirection: 'row', padding: 8, alignItems: 'center', justifyContent: 'space-between', marginBottom: 28}}>
                            <View style={{flex: 1, borderWidth: 0, borderColor: '#fff', borderRadius: 30, overflow: 'hidden', backgroundColor: '#fff'}}>
                                <Image source={{uri: selectedTipsterObj.url}} style={{resizeMode: 'contain', width: 30, height: 30}} />
                            </View>
                            <Text style={{flex: 10, paddingLeft: 15, color: 'white'}}>{selectedTipsterObj.username}</Text>
                            <TouchableOpacity  style={{flex: 2}} onPress={this.onTipsterChange}>
                                <Text style={{color: 'white', textDecorationLine:'underline', fontFamily: 'Lato-Regular'}}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginBottom: 28}}>
                            <Text style={styles.subTitleLabel}>for</Text>
                        </View>
                        <View style={{marginBottom: 28, width: '100%', backgroundColor: '#007A78', borderRadius: 8, paddingVertical: 16}}>
                            <Text style={{fontSize: 24, textAlign: 'center', color: 'white', fontFamily: 'Lato-Regular'}}>Monthly Subscription</Text>
                            <Text style={{fontSize: 36, fontWeight: 'bold', textAlign: 'center', color: '#F5CB28', fontFamily: 'Lato-Regular'}}>{ '\u00A3' }79.99</Text>
                            <Text style={{fontSize: 18, textAlign: 'center', color: 'white', fontFamily: 'Lato-Regular'}}>Just { '\u00A3' } p/w</Text>
                        </View>
                        <View>
                            <Text style={{color: 'white', textAlign: 'center', lineHeight: 22, fontSize: 14, fontFamily: 'Lato-Regular'}}>By subscribing you accept our <Text style={{textDecorationLine: 'underline'}}>Terms and Conditions</Text>, <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text> and <Text style={{textDecorationLine: 'underline'}}>Age & Identity Verification Policy</Text>.</Text>
                        </View>
                        <TouchableOpacity style={{width: '100%', paddingVertical: 8, borderRadius: 28, backgroundColor: 'white', marginTop: '15%'}} onPress={this.payWithGPay}>
                            <Text style={{fontSize: 18, color: 'red', textAlign: 'center', fontFamily: 'Lato-Regular', paddingVertical: 5}}>Subscribe</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

export default TipstersScreen;


