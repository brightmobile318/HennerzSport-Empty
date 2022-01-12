
import React from 'react';
import { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-easy-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
// import * as RNIap from 'react-native-iap';

import { backend_url } from '../../../server.js';
import { styles } from './Signup.style';
import Input from '../../Component/Input';
import InputWithIcon from '../../Component/InputWithIcon';
import avatar1 from '../../../assets/img/avatar/avatar1.png';
import avatar2 from '../../../assets/img/avatar/avatar2.png';
import avatar3 from '../../../assets/img/avatar/avatar3.png';
import avatar4 from '../../../assets/img/avatar/avatar4.png';
import sport1 from '../../../assets/img/avatar/sport1.png';
import sport2 from '../../../assets/img/avatar/sport2.png';
import sport3 from '../../../assets/img/avatar/sport3.png';
import sport4 from '../../../assets/img/avatar/sport4.png';
import TipComponentChange from '../../Component/TipComponentChange';
import Tipster from './Tipster';
import Sport from './Sport';
import AnimatedTab from '../../Component/AnimatedTab';

const Header_Maximum_Height = 70;

const Header_Minimum_Height = 0;

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
        name: "Volleyball",
        avatar: sport3
    },
    {
        id: 4,  
        name: "American Football",
        avatar: sport4
    },
]

// const itemSubs = Platform.select({
//     ios: [
//          'com.apexcup.hennerzbets.sub.new.1'
//     ],
//     android: [
//          'com.apexcup.hennerzbets.sub.new.1'
//     ],
// });

let purchaseUpdateSubscription;
let purchaseErrorSubscription;

class SignupScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: false,
            currentStep: 0,
            searchFlag: 0,
            selectedTipster: 0,
            selectedTipsterObj: {},
            selectedSport: 0,
            selectedSportName: '',
            tipsters: [],
            tipstersArr: [],
            tipsterSearchResults: [],
            isSearched: false,
            // step 1
            email: '',
            password: '',
            isAgree: false,
            isValidPassword: [false, false, false],
            stepValid: [false, false, false, false],
            // step 2
            name: '',
            mobileNumber: '',
            age: 0,
            isAgree1: false,

            AnimatedScrollHeight: new Animated.Value(0),

            // productList: [],
            // receipt: '',
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
        const loginId = await AsyncStorage.getItem('id');
        if(loginId == null) {
            
        } else {
            this.props.navigation.navigate('BottomNav');
        }

        // try {
        //     const result = await RNIap.initConnection();
        //     await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
        //     await this.getSubscriptions()
        //     console.log('connection result : ', result)
        // } catch (err) {
        //     console.warn(err.code, err.message)
        // }
    }

    // componentWillUnmount() {
    //     RNIap.endConnection();
    // }

    // getSubscriptions = async () => {
    //     try {
    //          const products = await RNIap.getSubscriptions(itemSubs)
    //          console.log('products L ', products)
    //          this.setState({ productList: products.filter((item) => item.productId === 'com.apexcup.hennerzbets.sub.new.1') })
    //     } catch (err) {
    //          console.warn(err.code, err.message)
    //     }
    // }

    // requestSubscription = async (sku) => {
    //     try {
    //         RNIap.requestSubscription(sku);

    //         purchaseUpdateSubscription = RNIap.purchaseUpdatedListener(
    //             async (purchase) => {
    //                 const receipt = purchase.transactionReceipt;
    //                 if (receipt) {
    //                     try {
    //                         await RNIap.acknowledgePurchaseAndroid(purchase.purchaseToken).then(() => {
    //                             RNIap.finishTransaction(purchase, true).catch(err => {
    //                                 console.log(err.code, err.message);
    //                             });
    //                         });
    //                     } catch (ackErr) {
    //                         console.warn('ackErr', ackErr)
    //                     }
    //                 }
    //                 this.setState({ receipt }, () => this.go())
    //             }
    //         )

    //         purchaseErrorSubscription = RNIap.purchaseErrorListener(
    //             (error) => {
    //                 console.log('purchaseErrorListener', error);
    //                 Alert.alert('Purchase Error', JSON.stringify(error.message))
    //             }
    //         )
    //     } catch (err) {
    //         Alert.alert(err.message);
    //     }
    // };

    // _goHome = async () => {
    //     Alert.alert('Confirm', `Are you sure to subscribe ${this.state.productList[0].currency} ${this.state.productList[0].price} / 1 month rolling to use Hennerz Bets app?`, [
    //         {
    //             text: 'Cancel', onPress: () => {

    //             }
    //         },
    //         {
    //             text: 'Purchase', onPress: async () => {
    //                 this.setState({ isLoading: true })
    //                 await AsyncStorage.setItem('plan', this.state.selectedPayMethod)
    //                 // await this.getSubscriptions()
    //                 this.setState({ isLoading: false })
    //                 var productId = 'com.apexcup.hennerzbets.sub.new.1'
    //                 this.requestSubscription(productId)
    //             }
    //         }
    //     ])
    // }

    _goNext = () => {
        this.setState({ currentStep: this.state.currentStep + 1 });
    }

    _goStep = (stepNumber) => {
        const { currentStep } = this.state;
        if(currentStep > stepNumber) {
            this.setState({ currentStep: stepNumber });
            if(stepNumber == 0) {
                this.setState({
                    email: '',
                    password: '',
                    isAgree: false,
                    isValidPassword: [false, false, false],
                    stepValid: [false, false, false, false],

                    name: '',
                    mobileNumber: '',
                    age: 0,
                    isAgree1: false,

                    selectedTipster: 0,
                });
            }
            if(stepNumber == 1) {
                this.setState({
                    name: '',
                    mobileNumber: '',
                    age: 0,
                    isAgree1: false,
                    stepValid: [true, false, false, false],
                });
            }
            if(stepNumber == 2) {
                this.setState({
                    selectedTipster: 0,
                    stepValid: [true, true, false, false],
                });
            }
            if(stepNumber == 3) {
                this.setState({
                    
                });
            }
        }
    }

    moveTab = (param) => {
        this.setState({ 
            searchFlag: param ,
            tipsterSearchResults: []
        });
    }

    _changeTipster = () => {
        this.setState({ currentStep: 2 })
    }

    _useFaceID = async () => {
        // signup
        const { email, password, name, mobileNumber, age, selectedTipster } = this.state;
        this.setState({ isLoading: true });
        const request = await fetch(`${backend_url}/addUser`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    username: name,
                    mobileNumber: mobileNumber,
                    age: age,
                    tipster_id: selectedTipster
                })
            }
        );
        let responseJson = await request.json();
        if (request.status === 200) {
            this.setState({ isLoading: false })
            if (responseJson.ok) {
                await AsyncStorage.setItem('id', responseJson.data._id);
                await AsyncStorage.setItem('email', responseJson.data.email);
                await AsyncStorage.setItem('password', responseJson.data.password);
                await AsyncStorage.setItem('tipster_id', responseJson.data.tipster_id);
                this.props.navigation.navigate('BottomNav');
            } else {
                this.toast.show(responseJson.msg);
            }
        } else {
                this.setState({ isLoading: false })
                this.toast.show(responseJson.msg);
        }
    }

    _checkPolicy = () => {
        const { isAgree } = this.state;
        this.setState({ isAgree: !isAgree }, () => {
            this.checkStepValid();
        });
    }

    _checkPolicy1 = () => {
        const { isAgree1 } = this.state;
        this.setState({ isAgree1: !isAgree1 }, () => {
            this.checkStepValid();
        });
    }

    onTipsterSelect = (id) => {
        const selectedTipsterObj = this.state.tipsters.filter(tip => tip._id === id)[0];
        this.setState({
            selectedTipster: id,
            selectedTipsterObj: selectedTipsterObj
        }, () => {
            this.checkStepValid();
        });
    }

    onSportSelect = (id) => {
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

    checkStepValid = () => {
        const { email, password, isAgree, isValidPassword, stepValid, name, mobileNumber, age, isAgree1, selectedTipster } = this.state;
        // step1
        if(email != '' && password != '' && isValidPassword[0] && isValidPassword[1] && isValidPassword[2] && isAgree) {
            stepValid[0] = true;
        } else {
            stepValid[0] = false;
        }
        // step2
        if(name != '' && mobileNumber != '' && age != 0 && isAgree1) {
            stepValid[1] = true;
        } else {
            stepValid[1] = false;
        }
        // step3
        if(selectedTipster != 0) {
            stepValid[2] = true;
        } else {
            stepValid[2] = false;
        }
        this.setState({stepValid});
    }

    emailChange = (text) => {
        this.setState({
            email: text
        }, () => {
            this.checkStepValid();
        });
    }

    passwordChange = (text) => {
        let valid = [false, false, false];
        let exp1 = /[A-Z]/;
        let exp2 = /[0-9]/;
        if(text.length >= 6) {
            valid[0] = true;
        }
        if(exp1.test(text)) {
            valid[1] = true;
        }
        if(exp2.test(text)) {
            valid[2] = true;
        }
        this.setState({
            isValidPassword: valid
        });
        if(valid[0] && valid[1] && valid[2]) {
            this.setState({
                password: text
            });
        }
        this.checkStepValid();
    }

    nameChange = (text) => {
        this.setState({
            name: text
        }, () => {
            this.checkStepValid();
        });
    }

    numberChange = (text) => {
        this.setState({
            mobileNumber: text
        }, () => {
            this.checkStepValid();
        });
    }

    ageChange = (text) => {
        this.setState({
            age: text
        }, () => {
            this.checkStepValid();
        });
    }

    removeFilter = () => {
        const  { tipsters } = this.state;
        this.setState({
            selectedSport: 0,
            selectedSportName: '',
            tipstersArr: tipsters
        });
    }

    emailValidate = (email) => {
        const emailFormatter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailFormatter.test(String(email).toLowerCase());
    }

    empty1 = () => {
        const { email, password, isAgree, isValidPassword} = this.state;
        const isEmailValid = this.emailValidate(email);
        if(email == '' || !isEmailValid) {
            this.toast.show('Please input valid email address.');
        } else if(!isValidPassword[0] || !isValidPassword[0] || !isValidPassword[0]) {
            this.toast.show('Please input valid password.');
        } else if(!isAgree) {
            this.toast.show('Please check the terms and policy.');
        }
    }

    empty2 = () => {
        const { name, mobileNumber, age, isAgree1 } = this.state;
        if(name == '' || mobileNumber == '' || age == 0 || !isAgree1) {
            this.toast.show('Please check all input fields.');
        }
    }

    empty3 = () => {
        this.toast.show('Please select tipster.');
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

    tipsterScroll = (ev) => {
        let currentOffset = ev.nativeEvent.contentOffset.y;
        Animated.timing(this.state.AnimatedScrollHeight, {
            toValue: currentOffset,
            duration: 100
        }).start();
    }

    render(){
        const { navigate } = this.props.navigation;
        const { currentStep, isAgree, isAgree1, searchFlag, selectedTipster, selectedSport, selectedSportName, isValidPassword, stepValid, tipstersArr, tipsterSearchResults, isSearched, AnimatedScrollHeight, selectedTipsterObj } = this.state;

        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.isLoading}
                />
                {
                    currentStep !== 4 ? <View style={{flex: 1}}>
                                            
                                            <View style={[styles.headerPad, {height: 70}]}>
                                                <Text style={styles.signupLabel}>Sign up</Text>
                                                {
                                                    currentStep ===  0 ? <Button style={styles.signinButton}
                                                                            onPress={ () => { navigate('SignIn') } }
                                                                        >
                                                                            Sign In
                                                                        </Button> : null
                                                }
                                            </View>
                                            {
                                                currentStep ===  0 ? <View style={styles.bodyPane}>
                                                                        <View style={{flex: 3}}>
                                                                            <View style={styles.commentPad}>
                                                                                <Text style={styles.commentLabel}>Sign up with your social media account or email address</Text>
                                                                            </View>
                                                                            <View style={styles.iconGroup}>
                                                                                <TouchableOpacity style={styles.headerIcon}>
                                                                                    <Icon name="facebook" size={ 40 } color="white"/>
                                                                                </TouchableOpacity>
                                                                                <TouchableOpacity style={styles.headerIcon}>
                                                                                    <Icon name="twitter" size={ 40 } color="white"/>
                                                                                </TouchableOpacity>
                                                                                <TouchableOpacity style={styles.headerIcon}>
                                                                                    <Icon name="instagram" size={ 40 } color="white"/>
                                                                                </TouchableOpacity>
                                                                                <TouchableOpacity style={styles.headerIcon}>
                                                                                    <Icon name="google" size={ 40 } color="white"/>
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                            <View style={styles.ORContainer}>
                                                                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                                                    <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
                                                                                    <View style={styles.ORPane}>
                                                                                        <Text style={styles.ORLabel}>OR</Text>
                                                                                    </View>
                                                                                    <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
                                                                                </View>
                                                                            </View>
                                                                        </View>
                                                                        <View style={{flex: 5}}>
                                                                            <View>
                                                                                <Input 
                                                                                    onChange={text => this.emailChange(text)}
                                                                                    placeholder = "Email"
                                                                                />
                                                                                <View style={{height: 10}}></View>
                                                                                <InputWithIcon 
                                                                                    placeholder = "Password"
                                                                                    isValidPassword = {isValidPassword}
                                                                                    onChange={text => this.passwordChange(text)}
                                                                                />
                                                                            </View>
                                                                            <View style={styles.policyPane}>
                                                                                <TouchableOpacity style = { styles.touchCheck } 
                                                                                    onPress={ this._checkPolicy }
                                                                                >
                                                                                    {
                                                                                        !isAgree ? <Icon size={ 24 } ></Icon> : <Icon name="square" size={ 24 } color="#188483" ></Icon>
                                                                                    }
                                                                                </TouchableOpacity>
                                                                                <Text style={styles.policyLabel}>I have read and agree to the Terms of use. Legal restrictions, Privacy Policy and. Terms of personal data. processing </Text>
                                                                            </View>
                                                                        </View>
                                                                    </View> : null
                                            }
                                            {
                                                currentStep ===  1 ? <View style={styles.bodyPane1}>
                                                                        <View style={{marginTop: 20}}>
                                                                            <Input 
                                                                                placeholder = "Name"
                                                                                type="text"
                                                                                onChange={text => this.nameChange(text)}
                                                                            />
                                                                            <View style={{height: 20}}></View>
                                                                            <Input 
                                                                                placeholder = "Mobile Number"
                                                                                type="number"
                                                                                onChange={text => this.numberChange(text)}
                                                                            />
                                                                            <View style={{height: 20}}></View>
                                                                            <Input 
                                                                                placeholder = "Age"
                                                                                type="number"
                                                                                onChange={text => this.ageChange(text)}
                                                                            />                                
                                                                        </View>
                                                                        <View style={styles.policyPane}>
                                                                            <TouchableOpacity style = { styles.touchCheck2 } 
                                                                                onPress={ this._checkPolicy1 }
                                                                            >
                                                                                {
                                                                                    !isAgree1 ? <Icon size={ 24 } ></Icon> : <Icon name="square" size={ 24 } color="#188483" ></Icon>
                                                                                }
                                                                            </TouchableOpacity>

                                                                            <Text style={styles.policyLabel}>I agree that i am over 18 and able to use this app. </Text>
                                                                        </View>
                                                                    </View> : null
                                            }
                                            {
                                                currentStep ===  2 ? <View style={ styles.bodyPane }>
                                                                        <View style={{height: 90}}>
                                                                            <Text style={styles.whichtipst}>Which tipster has referred yet?</Text>
                                                                            <Text style={styles.pleasenote}>Please note that selecting any more than one, may result in you being charged twice.</Text>
                                                                        </View>
                                                                        <Animated.View style={[{justifyContent: 'flex-start', alignItems: 'center', paddingTop: 40, backgroundColor: 'black'}, {
                                                                            height: AnimatedScrollHeight.interpolate({
                                                                                inputRange: [0, 250],
                                                                                outputRange: [500, 660],
                                                                                extrapolate: 'clamp'
                                                                            })
                                                                        }]}>
                                                                            <AnimatedTab moveTab={(param) => this.moveTab(param)} onChange={text => this.tipsterSearch(text)} searchResults={tipsterSearchResults} pickTipster={id => this.pickTipster(id)} />
                                                                            {
                                                                                selectedSportName != '' ? <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, width: '60%'}}>
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
                                                                                isSearched ? <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, width: '60%'}}>
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
                                                                            {
                                                                                this.state.searchFlag === 0 ?
                                                                                <View style={{flex: 1}}><Tipster tipsters={tipstersArr} selectedTipster={this.state.selectedTipster} onTipsterSelect={(id) => this.onTipsterSelect(id)} onScroll={ev => this.tipsterScroll(ev)} /></View> :null
                                                                            }
                                                                            {
                                                                                this.state.searchFlag === 1 ?
                                                                                <View><Sport sportsArr={sportsArr} selectedSport={this.state.selectedSport} onSportSelect={(id) => this.onSportSelect(id)} /></View> :null
                                                                            }    
                                                                        </Animated.View>
                                                                    </View> : null
                                            }
                                            {
                                                currentStep ===  3 ? <View style={ styles.bodyPane1 }>
                                                                        <Text style={styles.withtipst}>With this referred tipster</Text>
                                                                        <View style={styles.tipContainer} >                            
                                                                            <TipComponentChange avatar= {avatar1} name="#ScoobyDoo" selected={selectedTipsterObj} changeFunction={ this._goStep.bind(this, 2) }/>
                                                                        </View>
                                                                        <View style={styles.bodyContent}>
                                                                            <View >
                                                                                <Text style={styles.bodyTitle}>Get on board for</Text>
                                                                            </View>
                                                                            <View style={styles.payPane}>
                                                                                <Text style={styles.payMethod}>Monthly Subscription</Text>
                                                                                <Text style={styles.payAmount}>{ '\u00A3' } 19.99</Text>
                                                                                <Text style={styles.payRate}>Just { '\u00A3' } 6.25 p/w</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View> : null
                                            }
                                            {
                                                currentStep ===  4 ? null : <View style={ styles.footer }>
                                                                                <View style={ styles.stepPane }>
                                                                                    <TouchableOpacity style={ currentStep == 0 ? styles.nowStep : currentStep > 0 ? styles.lastStep : styles.step } onPress={() => this._goStep(0)}></TouchableOpacity>
                                                                                    <TouchableOpacity style={ currentStep == 1 ? styles.nowStep : currentStep > 1 ? styles.lastStep : styles.step } onPress={() => this._goStep(1)}></TouchableOpacity>
                                                                                    <TouchableOpacity style={ currentStep == 2 ? styles.nowStep : currentStep > 2 ? styles.lastStep : styles.step } onPress={() => this._goStep(2)}></TouchableOpacity>
                                                                                    <TouchableOpacity style={ currentStep == 3 ? styles.nowStep : currentStep > 3 ? styles.lastStep : styles.step } onPress={() => this._goStep(3)}></TouchableOpacity>
                                                                                </View>
                                                                                <View style={{flex: 1}}> 
                                                                                    {
                                                                                        currentStep == 0 ? <Button style={stepValid[0] ? styles.nextActiveButton : styles.nextButton} onPress={stepValid[0] ? this._goNext : this.empty1}>Next</Button> : null
                                                                                    }
                                                                                    {
                                                                                        currentStep == 1 ? <Button style={stepValid[1] ? styles.nextActiveButton : styles.nextButton} onPress={stepValid[1] ? this._goNext : this.empty2}>Next</Button> : null
                                                                                    }
                                                                                    {
                                                                                        currentStep == 2 ? stepValid[2] ? <Button style={styles.nextActiveButton} onPress={ this._goNext}>Next</Button> : <Button style={styles.nextButton} onPress={this.empty3}>Select Tipster</Button> : null
                                                                                    }
                                                                                    {
                                                                                        currentStep == 3 ? <Button style={[styles.nextActiveButton, {color: '#fff'}]} onPress={() => {this._goNext()}}>Subscribe</Button> : null
                                                                                    }
                                                                                </View>
                                                                            </View>
                                            }                            
                                        </View> : <View style={{flex: 1}}>
                                            <View style={ styles.faceHeader }>
                                                <Icon name="smile-o" color="white" size={ 200 } />
                                                <Text style={ styles.faceDescriprion }>Would you like faster access with Face ID?</Text>
                                            </View>
                                            <View style={ styles.faceFooter }>
                                                <Button style={ styles.faceIDButton } onPress={this._useFaceID} >Use Face ID</Button>
                                                <TouchableOpacity><Text style={ styles.notnowButton }>Not Now</Text></TouchableOpacity>
                                            </View>
                                        </View>
                }
                <Toast ref={(toast) => this.toast = toast} />
            </View>
          );
    }

}
export default SignupScreen;