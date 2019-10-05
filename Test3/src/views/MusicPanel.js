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
import ToggleButton from '@enact/moonstone/ToggleButton';
import ExpandablePicker from '@enact/moonstone/ExpandablePicker';
import IncrementSlider from '@enact/moonstone/IncrementSlider';
var MainPanel = kind({


	 name: 'NavPanel',
	 propTypes: {
		onClick4: PropTypes.func,
	},

	 render: ({title,onClick0, onClick1, onClick2, onClick3,onClick4,  text, ...rest}) => (
	  			<Panel {...rest}>
<div id='customClass' className={css.customClass}>
    
<IconButton small onClick={onClick3}>arrowsmallleft</IconButton>
<div id = 'main_container' className = {css.container_horizontal}>

<h1>
<ExpandablePicker
  joined
  title="Equalizer"
  width="medium"
>
  {['HipHop', 'Jazz', 'Chill']}
</ExpandablePicker>

<IncrementSlider 
  decrementIcon="minus"
  defaultValue={-25}
  incrementIcon="plus"
  knobStep={25}
  max={100}
  min={-100}
  step={5}
/> 
</h1></div>

<div id = 'main_container' className = {css.container_horizontal}>
<h1>
<ExpandablePicker
  joined
  title="Bass"
  width="medium"
>
  {['Deep', 'Soft', 'Chill']}
</ExpandablePicker>


<IncrementSlider 
  decrementIcon="minus"
  defaultValue={-25}
  incrementIcon="plus"
  knobStep={25}
  max={100}
  min={-100}
  step={5}
/> 
</h1></div>

<div id = 'main_container' className = {css.container_horizontal}>
<h1>
<ExpandablePicker
  joined
  title="Tune"
  width="medium"
>
  {['Auto', 'Classic', 'Original']}
</ExpandablePicker>

<IncrementSlider 
  decrementIcon="minus"
  defaultValue={-25}
  incrementIcon="plus"
  knobStep={25}
  max={100}
  min={-100}
  step={5}
/> 



</h1></div>
</div>
	  			</Panel>
	 )
	});

export default MainPanel;
