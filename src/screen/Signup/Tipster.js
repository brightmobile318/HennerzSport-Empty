import React from 'react';
import { Component } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Signup.style';

import TipComponent from '../../Component/Tip';

class Tipster extends Component {
    constructor(props) {
        super(props);
    }

    onSelect = (id) => {
       this.props.onTipsterSelect(id);
    }

    render() {
        const { selectedTipster } = this.props;
        return <ScrollView style={styles.tipContainer} onScroll={ev => this.props.onScroll(ev)}>
                {
                    this.props.tipsters.map(tipster => {
                        return <TipComponent selected={selectedTipster} onSelect={(id) => this.onSelect(id)} key={tipster._id} avatar={ tipster.url } name={tipster.username} sports={tipster.sport} id={tipster._id} />
                    })
                }
                </ScrollView>;
    }
}

export default Tipster;