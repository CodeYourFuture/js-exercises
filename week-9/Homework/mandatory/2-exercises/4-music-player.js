class MusicPlayer {
  constructor() {
    this.musicList = [];
    this.index = 0;
  }

  add = (name, artist) => {
    this.track = { name, artist };
    this.musicList.push(this.track);
  };

  play = () => {
    this.musicList.length === 0
      ? console.log("There is no songs in your playlist")
      : console.log(
          `Currently playing: ${this.musicList[this.index].name} by ${
            this.musicList[this.index].artist
          }`
        );
  };

  skip = () => {
    this.index += 1;
    this.index === this.musicList.length
      ? console.log("No more songs to skip")
      : console.log(
          `Currently playing: ${this.musicList[this.index].name} by ${
            this.musicList[this.index].artist
          }`
        );
  };

  previous = () => {
    this.index -= 1;
    console.log(
      `Currently playing: ${this.musicList[this.index].name} by ${
        this.musicList[this.index].artist
      }`
    );
  };

  repeat = () => {
    if (this.index === this.musicList.length) {
      this.index = 0;
    }
  };

  shuffle = () => {
    this.randomIndex = Math.floor(Math.random() * this.musicList.length);
    console.log(
      `Currently playing: ${this.musicList[this.randomIndex].name} by ${
        this.musicList[this.randomIndex].artist
      }`
    );
  };
}

let myMusicPlayer = new MusicPlayer(); // Create an empty playlist

myMusicPlayer.play();
// Add some songs to your playlist
myMusicPlayer.add("Bohemian Rhapsody", "Queen");
myMusicPlayer.add("Yesterday", "The Beatles");
myMusicPlayer.add("Vogue", "Madonna");

myMusicPlayer.play(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.previous(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.skip(); // Output: "Currently playing: Vogue by Madonna"

myMusicPlayer.skip();

myMusicPlayer.repeat();

myMusicPlayer.play();

myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();

/*
  Task 1: Complete the above code to create a music player that will run through a playlist of songs and output to the console as described in the comments.
  Task 2: Add some extra logic to handle these 2 scenarios:
  - Trying to call myMusicPlayer.play() if there are no songs in the playlist
  - Trying to call myMusicPlayer.skip() when there are no songs left to play
  Optional 1: Your music player stops once you have reached the end of the playlist.
  Can you implement the 'repeat' functionality so that it starts again from the beginning instead of stopping?
  Optional 2: Can you implement the shuffle functionality for your music player?
  This means the order the songs are played in will be random, but each song will only play once.
   */
