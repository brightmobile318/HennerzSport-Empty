import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { backend_url } from '../../../server.js';
import TipComponent from '../../Component/Tip2';

class CancelSubscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tipsters: [],
      selectedTipster: 0,
      selectedTipsters: []
    }
  }

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
            });
        } else {
            console.log("fetch error:", responseJson.msg);
        }
    } else {
        console.log("server error:", responseJson.msg);
    }
  }

  backFunction = () => {
    this.props.navigation.navigate('Setting');
  }

  onSelect = (id) => {
    const tmp = this.state.selectedTipsters;
    if(tmp.filter(data => data === id).length > 1) {
      const index = tmp.indexOf(id);
      if (index > -1) {
        tmp.splice(index, 1);
      }
    } else {
      tmp.push(id);
    }

    this.setState({
      selectedTipsters: tmp
    })
  }

  cancelSubscription = () => {
    const cancelList = this.state.selectedTipsters;
  }

  render() {
    const { selectedTipster, selectedTipsters } = this.state;

    return <View style={{height: '100%', backgroundColor: '#000'}}>
      <View style={{display: 'flex', justifyContent: 'flex-start'}}>

      </View>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingTop: 36, paddingBottom: 36, marginLeft: '5%'}} 
        onPress={this.backFunction}
      >
        <View style={{marginRight: 8}}>
          <Icon name='arrow-left-bold' size={ 32 } color="white" />
        </View>
        <Text style={{color: '#fff', fontSize: 18}}>Back to settings</Text>
      </TouchableOpacity>
      <Text style={{color: '#fff', textAlign: 'center', fontSize: 20, paddingLeft: '5%', paddingRight: '5%', marginBottom: 12}}>Please select tipsters you're going to cancel</Text>
      <ScrollView style={{maxHeight: 500, paddingLeft: '5%', paddingRight: '5%', paddingTop: 12, paddingBottom: 12}}>
      {
          this.state.tipsters.map(tipster => {
              return <TipComponent selected={selectedTipsters} onSelect={(id) => this.onSelect(id)} key={tipster._id} avatar={ tipster.url } name={tipster.username} sports={tipster.sport} id={tipster._id} />
          })
      }
      </ScrollView>
      <TouchableOpacity style={{width: '80%', height: 55, backgroundColor: '#007A78', marginLeft: '10%', alignItems: 'center', justifyContent: 'center', borderRadius: 30, marginTop: 36}} onPress={this.cancelSubscription}>
        <Text style={{color: '#fff', fontSize: 18}}>
        Cancel Subscriptions
        </Text>
      </TouchableOpacity>
    </View>;
  }
}

export default CancelSubscription;