class Player {
  constructor(){
    this.playlist = ['song1.mp3'];
    this.currentSong = this.playlist[0];
	this.state = 'PLAYING';
  }
  play(){
    console.log('Playing '+this.currentSong);
  }

  pause(){
    console.log('Paused');
  }

  stop(){
    console.log('Stopped');
  }

  add(song){
    this.playlist.push(song);
  }
}
