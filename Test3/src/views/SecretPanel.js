import Button from '@enact/moonstone/Button';
import Layout from '@enact/ui/Layout';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import Image from '@enact/moonstone/Image';
import EditableIntegerPicker from '@enact/moonstone/EditableIntegerPicker';
import Marquee from '@enact/moonstone/Marquee';
import BodyText from '@enact/moonstone/BodyText';
import Icon from '@enact/moonstone/Icon';
import IconButton from '@enact/moonstone/IconButton';
import Scroller from '@enact/moonstone/Scroller';
import Slider from '@enact/moonstone/Slider';
import red_seat from '../assets/car_seatings/car_red_front.png';
import css from '../App/App.module.less';
import FunctionClick from '../components/FunctionClick';
import PropTypes from 'prop-types';
import Input from '@enact/moonstone/Input';
import React, {Component} from 'react';
import car from '../assets/car_seatings/map.PNG';
import SwitchItem from '@enact/moonstone/SwitchItem';
import Spinner from '@enact/moonstone/Spinner';

var MainPanel = kind({


	 name: 'SettingsPanel',
	 propTypes: {
		onClick4: PropTypes.func,
	},

	 render: ({title,onClick0, onClick1, onClick2, onClick3,onClick4,  text, ...rest}) => (
	  			<Panel {...rest}>
<div id='customClass' className={css.customClass}>

<IconButton small onClick={onClick3}>arrowsmallleft</IconButton>

<SwitchItem>
 Bluetooth
</SwitchItem>

<h5>Searching for devices ...
<Spinner></Spinner>
</h5>
<Scroller>
  <div style={{height: "500px" ,width: "20px"}}>
    <p>JBL0707JLY</p>
    <p>SHAKE11</p>
    <p>EMAN22</p>
    <p>MAHLIZA33</p>
    <p>INFINEON10</p>
    <p>LG10</p>
    <p>M1213</p>
    <p>R1213</p>
    <p>YOKO</p>
    <p>SHIRO</p>
    <p>KAWKAWKAW</p>
    <p>HEHEHEHEE</p>
    
  </div>
</Scroller>

</div>

	  			</Panel>
	 )
	});

export default MainPanel;
