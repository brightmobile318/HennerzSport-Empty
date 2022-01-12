import React from 'react';
import { Component } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Signup.style';

import SportComponent from '../../Component/SportComponent';

class Sport extends Component {
    constructor(props) {
        super(props);
    }

    onSelect = (id) => {
       this.props.onSportSelect(id);
    }

    render() {
        const { selectedSport } = this.props;
        return <ScrollView style={styles.tipContainer}>
                {
                    this.props.sportsArr.map(sport => {
                        return <SportComponent isType="signup" selected={selectedSport} onSelect={(id) => this.onSelect(id)} key={sport.id} avatar={ sport.avatar } name={sport.name} id={sport.id} />
                    })
                }
                </ScrollView>;
    }
}

export default Sport;