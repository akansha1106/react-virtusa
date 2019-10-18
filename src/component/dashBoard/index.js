import React, { Component } from 'react';
import store from '../../store.js';
import {Typography} from '@material-ui/core/'
import SimpleTable from '../tradeTable/tradeGrid'

export default class DashBoard extends Component {

    constructor(props) {
        super(props);
        this.getTradingData = this.getTradingData.bind(this);
        this.state = {
            display: 'flex'
        }
    }
    getTradingData(there){
        let me = this;
     //Trade data API Call
            there.props.callRest('POST', 'tradeData/' +  '', function () {
                if (this.readyState === XMLHttpRequest.DONE) {
                        let report = JSON.parse(this.responseText);
                        store.dispatch({type: 'tradeData', tradeData: report.result.data.root.children[0].children});
                        me.setState({display: 'none'});
                        
                }
               });
        }
    
    render() {
        return (<div>
            <Typography variant="h6" align="left" color='textPrimary'>Trade Data
            </Typography>
   <SimpleTable/>
   </div>
        )
    }
}

