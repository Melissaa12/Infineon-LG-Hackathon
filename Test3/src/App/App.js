import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {Panels, Routable, Route} from '@enact/moonstone/Panels';
import React from 'react';
import PropTypes from 'prop-types';
import {SlideLeftArranger} from '@enact/ui/ViewManager';

import MainPanel from '../views/MainPanel';
import SettingsPanel from '../views/SettingsPanel';
import NavPanel from '../views/NavPanel';
import IntroPanel from '../views/IntroPanel';
import Nav2Panel from '../views/Nav2Panel';
import MusicPanel from '../views/MusicPanel';
import BluetoothPanel from '../views/BluetoothPanel';
import SecretPanel from '../views/SecretPanel';
import LS2Request from '@enact/webos/LS2Request';


import AppStateDecorator from './AppStateDecorator';

import css from './App.module.less';

const RoutablePanels = Routable({navigate: 'onBack'}, Panels);

const WebSocket = require('isomorphic-ws');

var ws_server_ip = '192.168.1.130';  //Websocket server ip address
var msgReceived  = true;             //Flag for received message
var replyLostCnt = 0;                //Number of messages not replied from sensor
var intervalID;                      //Sensor data request interval ID


var url = 'ws://'+ ws_server_ip +':80';
var websocket;

function init()
{
  // document.getElementById("status").innerHTML = "Off";
  // document.getElementById("temp").innerHTML = "--";
  // document.getElementById("press").innerHTML = "--";
  testWebSocket(url);
}
function testWebSocket(url)
{
	websocket = new WebSocket(url);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}
function onOpen(evt)
{
  console.log("CONNECTED");
  //document.getElementById("status").innerHTML = "On";
  intervalID = setInterval(function(){doSend();}, 200);
  //showNotification("Sensor device connected");
}
function onClose(evt)
{
  console.log("DISCONNECTED");

  // clearInterval(intervalID);
  //showNotification("Sensor device disconnected");
}
function onMessage(evt)
{
  var message = JSON.parse(evt.data);
  msgReceived = true;
  //console.log('>RESPONSE: ' +evt.data);
  if (message.sensors.hands_on_status == true)
  {
    var NotificationRequest1 = new LS2Request().send({
  		service: 'luna://com.webos.notification',
  		method: 'createToast',
      parameters: {"sourceId":"com.sample.test2","message":"Hands are OFF"},
  		onSuccess: function (args) {},
      onFailure: function(args) {}
  		});
  }
  if (message.sensors.belt_status == true)
  {
    var NotificationRequest2 = new LS2Request().send({
  		service: 'luna://com.webos.notification',
  		method: 'createToast',
      parameters: {"sourceId":"com.sample.test2","message":"Please secure seatbelts"},
  		onSuccess: function (args) {},
      onFailure: function(args) {}
  		});
  }


  showNotification("Hands on Status is: " + message.sensors.hands_on_status )
}
function onError(evt)
{
  console.log('">ERROR:' + evt.data);
  clearInterval(intervalID);
  //showNotification("Sensor communication error");
  websocket.close();
}

function doSend()
{
  /*JSON API commands to retrieve data from sensor */
  var jsonGetData = {"command": 1, "sensors":["hands_on_status","rotation"]}; //Specify sensors
  var jsonGetDataAll = {"command": 2};                                    //All sensors

  if(msgReceived)
  {
    //console.log("SENT: " + JSON.stringify(jsonGetData));
    websocket.send(JSON.stringify(jsonGetData));
    //showNotification("Sensor communication established!");
    msgReceived = false;
  }
  else
  {
    if(++replyLostCnt >= 2)
    {
      replyLostCnt = 0;
      msgReceived = true;
      // document.getElementById("status").innerHTML = "??";
      // document.getElementById("hands_on_status").innerHTML = "--";
      // document.getElementById("rotation").innerHTML = "--";
      //showNotification("Sensor communication lost");
    }
  }
}

function showNotification(message)
{
	console.log(message);
  // var lunaReq = webOS.service.request("luna://com.webos.notification",
  //             {
  //                 method:"createToast",
  //                 parameters:{
  //                     "sourceId" : "com.sample.iotsensor",
  //                     "message"  : message
  //                 },
  //                 onSuccess: function (args) {
  //                 },
  //                 onFailure: function (args) {
         //          }
         // });
}
testWebSocket(url);
//End of notification code


const App = kind({
	name: 'App',

	propTypes: {
		onNavigate: PropTypes.func,
		path: PropTypes.string
	},

	styles: {
		css,
		className: 'app'
	},

	handlers: {
		onFirstPanel: (ev, {onNavigate}) => onNavigate({path: '/main'}),
		onSecondPanel: (ev, {onNavigate}) => onNavigate({path: '/main/settings'}),
		onThirdPanel: (ev, {onNavigate}) => onNavigate({path: '/main/navigation'}),
		onFourthPanel: (ev, {onNavigate}) => onNavigate({path: '/main/intro'}),
		onFifthPanel: (ev, {onNavigate}) => onNavigate({path: '/main/navigation2'}),
		onSixthPanel: (ev, {onNavigate}) => onNavigate({path: '/main/music'}),
		onSevenPanel: (ev, {onNavigate}) => onNavigate({path: '/main/bluetooth'}),
		onSecretPanel: (ev, {onNavigate}) => onNavigate({path: '/main/secret'}),


	},

	render: ({onFirstPanel, onNavigate, onSecondPanel, onThirdPanel, onFourthPanel,onFifthPanel,onSixthPanel, onSevenPanel,onSecretPanel,path, ...rest}) => {
		return (
			<RoutablePanels {...rest}  onBack={onNavigate} path={path}>
				<Route path="main" component={MainPanel} title="MainPanel"  onClick1={onSecondPanel} onClick2={onThirdPanel} onClick3={onFourthPanel} onClick4={onFifthPanel} onClick5={onSixthPanel} onClick6={onSevenPanel} onClick8={onSecretPanel}>

					<Route path="intro" component = {IntroPanel} title = "IntroPanel"onClick1={onSecondPanel} onClick2={onThirdPanel} onClick3={onFourthPanel} onClick5={onSixthPanel} onClick6={onSevenPanel} onClick8={onSecretPanel}/>
						<Route path="bluetooth" component = {BluetoothPanel} title = "BluetoothPanel" onClick3={onFourthPanel} onClick4={onFifthPanel} />
						<Route path="music" component = {MusicPanel} title = "MusicPanel" onClick3={onFourthPanel} onClick4={onFifthPanel} />
						<Route path="settings" component={SettingsPanel} title="SettingsPanel" onClick1={onSecondPanel} onClick2={onThirdPanel} onClick3={onFourthPanel} onClick8={onSecretPanel} />
							<Route path="secret" component={SecretPanel} title="SecretPanel" onClick8={onSecretPanel}  />

						<Route path="navigation" component = {NavPanel} title = "NavPanel" onClick3={onFourthPanel} onClick4={onFifthPanel} />
							<Route path="navigation2" component = {Nav2Panel} title = "Nav2Panel" onClick3={onThirdPanel} onClick4={onFifthPanel} />

				</Route>
			</RoutablePanels>



		);
	}
});

export default MoonstoneDecorator(
	AppStateDecorator(
		App
	)
);
