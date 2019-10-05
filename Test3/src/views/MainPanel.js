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
import VideoPlayer from '@enact/moonstone/VideoPlayer';
import Draggable from 'react-draggable';
import Clock from 'react-live-clock';
import mainvid from '../views/Artboard 1_2.mp4';

var MainPanel = kind({
	 name: 'MainPanel',

	 propTypes: {
		onClick1: PropTypes.func,
		onClick2: PropTypes.func
	},

	 render: ({title,onClick0, onClick1, onClick2, onClick3, text, ...rest}) => (
	  			<Panel {...rest}>
  							<div id='custom2Class' className={css.custom2Class}>
					  		<video id="background-video" loop autoPlay onClick={onClick3} style={{height: 461, width: 858}}   >
              		    	<source src={mainvid} type="video/mp4" />          				    </video>
							</div>
					
	  			</Panel>
	 )
	});

export default MainPanel;
