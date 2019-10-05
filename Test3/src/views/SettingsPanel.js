import Button from '@enact/moonstone/Button';
import Layout from '@enact/ui/Layout';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
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
import SwitchItem from '@enact/moonstone/SwitchItem';
import testing1 from '../assets/car_seatings/testing1.png';
import testing2 from '../assets/car_seatings/pinklight.png';
import testing3 from '../assets/car_seatings/yellowlight.png';



var MainPanel = kind({


  name: 'MainPanel',
  propTypes: {
   onClick8: PropTypes.func,
 },

  render: ({title,onClick0, onClick1, onClick2, onClick3,onClick4,onClick8, text, ...rest}) => (
	  			<Panel {...rest}>
            <div id='customClass' className={css.customClass}>

<IconButton small onClick={onClick3}>arrowsmallleft</IconButton>

						<BodyText centered>Settings</BodyText>
						<div id = 'main_container' className = {css.container_horizontal}>

							<div id = 'sub_container1'className = {css.container_vertical}>
							<Image src={"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5754411.jpg"} alt = "" style={{height: 61, width: 58}}/>
							</div>

							<Slider
  								defaultValue={25}
 								max={30}
								min={17}
								step={1}
								style={{height:5,width:500}}						
  								tooltip
								/>	
							<div id = 'sub_container1'className = {css.container_vertical}>
							<Image src={"https://www.colourbox.com/preview/15759722-brightness-icon.jpg"} alt = "" style={{height: 61, width: 58}}/>
							</div>

							<Slider
  								defaultValue={50}
 								max={100}
								min={0}
								step={10}
								style={{height:5,width:500}}						
  								tooltip
								/>			
</div>
<div id = 'main_container' className = {css.container_horizontal}>

<div id = 'sub_container1'className = {css.container_vertical}>
<Image src={"http://www.insetfair.com/admin/images/water_35421110_CPU%20fan%20simple%20flat%20black%20icon%20PNG%20file_m.jpg"} alt = "" style={{height: 61, width: 58}}/>
</div>

<Slider
	  defaultValue={3}
	 max={5}
	min={0}
	step={1}
	style={{height:5,width:500}}						
	  tooltip
	/>	
<div id = 'sub_container1'className = {css.container_vertical}>
<Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjj34Ihx4Y88wleFfkOQaQytYF30A5J2jenfWYEnumGbmjl4MKvw"} alt = "" style={{height: 61, width: 58}}/>
</div>

<Slider
	  defaultValue={25}
	 max={30}
	min={17}
	step={1}
	style={{height:5,width:500}}						
	  tooltip
	/>			
</div>
	
								<div id = 'main_container' className = {css.container_horizontal}>

								<div id = 'sub_container1'className = {css.container_vertical}>
								<SwitchItem>
 								 SafetyMode
								</SwitchItem>
								<SwitchItem>
 								 Front Headlights
								</SwitchItem>
								<SwitchItem>
								Back Headlights
								</SwitchItem>
								</div>

<div id = 'sub_container1'className = {css.container_vertical}>
<Image  src={testing1} alt = "" onClick={onClick8} style={{height: 461, width: 858}} />

</div>

<div id = 'overlaypinklight'className = {css.overlaypinklight}>
<div id = 'lights'className = {css.lights}>

<Image src={testing2} alt = "" style={{height: 461, width: 858}}/>
</div></div>
<div id = 'overlaypinklight'className = {css.overlaypinklight}>
<div id = 'lights'className = {css.lights}>

<Image src={testing3} alt = "" style={{height: 461, width: 858}}/>
</div></div>

<div id = 'button'className = {css.button}>
<Button onClick={onClick8}>Wheel</Button></div>


</div></div>

			
	  			</Panel>
	 )
	});

export default MainPanel;
