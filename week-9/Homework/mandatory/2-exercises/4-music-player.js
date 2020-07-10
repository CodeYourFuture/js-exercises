/*


Task 1: Complete the below code to create a music player that will run through a playlist of songs and output to the console as described in the comments.

Task 2: Add some extra logic to handle these 2 scenarios:
- Trying to call myMusicPlayer.play() if there are no songs in the playlist
- Trying to call myMusicPlayer.skip() when there are no songs left to play



Optional 1: Your music player stops once you have reached the end of the playlist.
Can you implement the 'repeat' functionality so that it starts again from the beginning instead of stopping?


Optional 2: Can you implement the shuffle functionality for your music player?
This means the order the songs are played in will be random, but each song will only play once.

 */

class MusicPlayer {
  constructor() {
    this.songList = [];
    this.index = 0;
  }
  add(song, singer) {
    this.album = {};
    this.album.song = song;
    this.album.singer = singer;
    this.songList.push(this.album);
  }
  play() {
    if (this.songList.length == 0) {
      console.log("Song List is empty. Please add song first");
    } else {
      this.index = 0;
      console.log(
        `Currently playing:${this.songList[this.index].song} by ${
          this.songList[this.index].singer
        }`
      );
    }
  }

  skip() {
    this.index++;
    if (this.index < this.songList.length) {
      console.log(
        `Skipped...Currently playing:${this.songList[this.index].song} by ${
          this.songList[this.index].singer
        }`
      );
    } else {
      console.log(
        `Reached the end of the Song List. Returning to first song: ${this.songList[0].song} by ${this.songList[0].singer}`
      );
      this.index = 0;
    }
  }

  previous() {
    this.index--;
    if (this.index >= 0) {
      console.log(
        `Back...Currently playing:${this.songList[this.index].song} by ${
          this.songList[this.index].singer
        }`
      );
    } else {
      console.log(
        `Reached the beginning of the Song List. Playing the first song: ${this.songList[0].song} by ${this.songList[0].singer}`
      );
      this.index = 0;
    }
  }

  shuffle() {
    let j = Math.floor(Math.random() * this.songList.length);
    console.log(
      `Randomly playing:${this.songList[j].song} by ${this.songList[j].singer}`
    );
    this.index = j;
  }
}

let myMusicPlayer = new MusicPlayer(); // Create an empty playlist

// Add some songs to your playlist
myMusicPlayer.add("Bohemian Rhapsody", "Queen");
myMusicPlayer.add("Yesterday", "The Beatles");
myMusicPlayer.add("Vogue", "Madonna");
myMusicPlayer.play(); // Output: "Currently playing: Bohemian Rhapsody by Queen"
myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"
myMusicPlayer.previous(); // Output: "Currently playing: Bohemian Rhapsody by Queen"
myMusicPlayer.previous(); // Output: "Currently playing: Bohemian Rhapsody by Queen"
myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"
myMusicPlayer.shuffle();
myMusicPlayer.skip();
