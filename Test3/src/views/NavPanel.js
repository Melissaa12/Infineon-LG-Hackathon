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
import sgmap from '../assets/car_seatings/sgmap.png';


var MainPanel = kind({


	 name: 'NavPanel',
	 propTypes: {
		onClick4: PropTypes.func,
	},

	 render: ({title,onClick0, onClick1, onClick2, onClick3,onClick4,  text, ...rest}) => (
	  			<Panel {...rest}>
<div id='customClass' className={css.customClass}>
<IconButton small onClick={onClick3}>arrowsmallleft</IconButton>

<BodyText centered>
<h1>
<BodyText centered>Where do you want to go?</BodyText>
<Input placeholder="Enter destination here" /><Button onClick={onClick4}>Go</Button>
</h1>
</BodyText>

<BodyText centered>

<div id = 'sub_container1'className = {css.container_vertical}>

<Image src={sgmap} alt = "" style={{height: 300, width: 858}}/>
</div>

<h1>FastTravel
	<Button onClick={onClick4}>Home</Button>
	<Button onClick={onClick4}>Work</Button>
	<Button onClick={onClick4}>School</Button>
	<Button onClick={onClick4}>Fave</Button>
</h1>
</BodyText>


</div>

	  			</Panel>
	 )
	});

export default MainPanel;
