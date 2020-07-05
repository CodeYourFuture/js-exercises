/*
Task 1: Complete the below code to create a music player that will run through a playlist of 
songs and output to the console as described in the comments.

Task 2: Add some extra logic to handle these 2 scenarios:
- Trying to call myMusicPlayer.play() if there are no songs in the playlist
- Trying to call myMusicPlayer.skip() when there are no songs left to play

Optional 1: Your music player stops once you have reached the end of the playlist.
Can you implement the 'repeat' functionality so that it starts again from the beginning instead of stopping?

Optional 2: Can you implement the shuffle functionality for your music player?
This means the order the songs are played in will be random, but each song will only play once.

 */

// Optional 1: Your music player stops once you have reached the end of the playlist.
// Can you implement the 'repeat' functionality so that it starts again from the beginning instead of stopping?
 class MusicPlayer {
   constructor() {
     this.playList = [];
     this.counterIndex = 0;
   }

   add(song, artist) {
     let playListItem = {
       newSong: song,
       newArtist: artist,
     };
     this.playList.push(playListItem);
   }

   play() {
     if (this.playList.length <= 0) {
       console.log("No songs to play");
     } else {
       console.log(
         `currently playing ${this.playList[this.counterIndex].newSong} by ${
            this.playList[this.counterIndex].newArtist
          }`
       );
     }
   }

   shuffle () {
    let randomSong = (Math.floor(Math.random(this.counterIndex, this.playList.length)*10));
    console.log(randomSong);
    this.play();
    return this.randomSong;

   }

   skip() {
     if (this.counterIndex < this.playList.length - 1) {
       this.counterIndex++;
       this.play();
     } else {
    //    console.log("there is no songs to play");
    this.counterIndex = 0;
    this.play();

     }
   }

   previous() {
    if (this.counterIndex > 0) {
        this.counterIndex--;
        this.play();
      } else {
        // console.log("there is no songs to play");
        this.counterIndex = this.playList.length-1;
      }
 }
}

let myMusicPlayer = new MusicPlayer(); // Create an empty playlist

// Add some songs to your playlist

// myMusicPlayer.play(); 
myMusicPlayer.add("Bohemian Rhapsody","Queen");
myMusicPlayer.add("Yesterday","The Beatles");
myMusicPlayer.add("Vogue","Madonna");

myMusicPlayer.play();      // Output: "Currently playing: Bohemian Rhapsody by Queen"
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();



// myMusicPlayer.skip();      // Output: "Currently playing: Yesterday by The Beatles"

// myMusicPlayer.previous();  // Output: "Currently playing: Bohemian Rhapsody by Queen"

// myMusicPlayer.skip();      // Output: "Currently playing: Yesterday by The Beatles"

// myMusicPlayer.skip();      // Output: "Currently playing: Vogue by Madonna"

// myMusicPlayer.previous();

// myMusicPlayer.skip(); 
// myMusicPlayer.skip(); 
// myMusicPlayer.skip(); 
// myMusicPlayer.skip(); 
// myMusicPlayer.skip(); 
// myMusicPlayer.skip(); 













