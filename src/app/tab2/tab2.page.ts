import { OnInit, Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  audios: any[] = [];
  constructor(private nativeAudio: NativeAudio) {

  }

  ngOnInit() {
  	this.nativeAudio.preloadSimple (
  		'astronomia',
  		'assets/audios/Vicetone_Tony_Igy_-_Astronomia.mp3'
  	).then(
  		function() { /*alert('OK Preload')*/	},
  		function(err) { alert(err); }
  	);
 
	  	
  }

  playSound() {
	this.nativeAudio.play('astronomia').then(
		function() {/* alert('OK Play');*/ },
		function(err) { alert(err); }
	); 
  }

  stopSound() {
	this.nativeAudio.stop('astronomia').then(
		function() { /*alert('OK Play');*/ },
		function(err) { alert(err); }
	); 
  }
}
