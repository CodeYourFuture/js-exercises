class MusicPlayer {
  // Add your code here
  constructor() {
    this.playlist = [];
    this.counter = 0;
    this.repeatPlayList = false;
  }
  add(song, singer) {
    let newplaylist = {};
    newplaylist.song = song;
    newplaylist.singer = singer;
    this.playlist.push(newplaylist);
  }

  play() {
    
      if ( this.playlist.length == 0){
        console.log('there is no playlist ')
      }else{
        console.log(
          `"Currently playing:${this.playlist[this.counter].song}    by  
      ${this.playlist[this.counter].singer}"`
        )
      }
      
  
  }
  skip() {
    this.counter++;

    if (this.counter > this.playlist.length - 1) {
      if (this.repeatPlayList) {
        this.counter = 0;
        this.play();
      } else {
        console.log("no song left ");
      }
    } else {
      this.play();
    }
  }
  previous() {
    this.counter--;
    this.play();
  }
  shuffle() {
    this.counter = [Math.floor(Math.random() * this.playlist.length)];
    this.play();
  }

  repeat() {
    //boolean negation
    this.repeatPlayList = !this.repeatPlayList;
  }
}

let myMusicPlayer = new MusicPlayer(); // Create an empty playlist

// Add some songs to your playlist
myMusicPlayer.add("Bohemian Rhapsody", "Queen");
myMusicPlayer.add("Yesterday", "The Beatles");
myMusicPlayer.add("Vogue", "Madonna");

myMusicPlayer.play(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

// Output: "Currently playing: Yesterday by The Beatles"

// Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"
myMusicPlayer.skip();
myMusicPlayer.repeat();
myMusicPlayer.skip();

// myMusicPlayer.skip(); // Output: "Currently playing: Vogue by Madonna"

/*


Task 1: Complete the above code to create 
a music player that will run through a playlist of 
songs and output to the console as described in the comments.


Task 2: Add some extra logic to handle these 2 scenarios:
- Trying to call myMusicPlayer.play() if there are no songs in the playlist
- Trying to call myMusicPlayer.skip() when there are no songs left to play

Optional 1: Your music player stops once you have 
reached the end of the playlist.
Can you implement the 'repeat' functionality so that
 it starts again from the 
beginning instead of stopping?


Optional 2: Can you implement the shuffle functionality for your music player?
This means the order the songs are 
played in will be random, but each song will only play once.

 */
