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
import normal_seat from '../assets/car_seatings/car_normal.png';
import red_seat from '../assets/car_seatings/blinkingseat.png';
import css from '../App/App.module.less';
import FunctionClick from '../components/FunctionClick';
import PropTypes from 'prop-types';
import VideoPlayer from '@enact/moonstone/VideoPlayer';
import Draggable from 'react-draggable';
import Clock from 'react-live-clock';
 

var MainPanel = kind({
	 name: 'MainPanel',

	 propTypes: {
		onClick1: PropTypes.func,
		onClick2: PropTypes.func,
		onClick5: PropTypes.func,
		onClick6: PropTypes.func,

	},

	 render: ({title,onClick0, onClick1, onClick2, onClick3, onClick5 ,onClick6,text, ...rest}) => (
	  			<Panel {...rest}>
                      <div id='customClass' className={css.customClass}>

					  </div>				
<Draggable><div>
<Clock
     className={css.ukFormat}
      style={{fontSize: '1.5em' }}
      format={'h:mm:ssa'}
      ticking={true} /> </div></Draggable>
      
						<BodyText centered>Welcome aboard!</BodyText>
						<div id = 'main_container' className = {css.container_horizontal}>

							<div id = 'sub_container1'className = {css.container_vertical}>
								<Button onClick={onClick5}>Music</Button>
								<div style ={{padding: "10px"}}></div>
								<Button onClick={onClick1}>Settings</Button>
							</div>
							<div id = 'sub_container1'className = {css.container_vertical}>

							<Image src={normal_seat} alt = "" style={{height: 461, width: 858}}/>
							</div>

							<div id = 'sub_container1'className = {css.container_vertical}>
								<Button onClick={onClick2}>Navigation</Button>
								<div style ={{padding: "10px"}}></div>
								<Button onClick={onClick6}>Bluetooth</Button>
							</div>
							<Draggable>
  <div>I can now be moved around!</div>
</Draggable>

					
						</div>

	      



						<h2 style={{padding: "10px"}}>
						<BodyText centered>

						<Icon>music</Icon>
						<IconButton>backward</IconButton>
						<IconButton>pause</IconButton>
						<IconButton>stop</IconButton>
						<IconButton>play</IconButton>
						<IconButton>forward</IconButton>
						</BodyText>
						</h2>
						<div id="overlay" className={css.overlay}>
						<div id="pic" className={css.pic}>
						<Image src={red_seat} alt = "" style={{height: 461, width: 858}}/>
						</div>

                   </div>
				   
	  			</Panel>
	 )
	});

export default MainPanel;
