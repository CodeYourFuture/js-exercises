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
  // Add your code here
  constructor() {
    this.playlist = [];
    this.playing = false;
    this.trackIndex = 0;
    this.playedSongs = [];
  }
  add(track, artist) {
    let song = {};
    song.name = track;
    song.artist = artist;
    this.playlist.push(song);
  }

  play(choice) {
    if (this.playlist.length == 0) {
      console.log("You have no songs in your playlist!");
    } else {
      if (choice) {
        if (choice >= 0 && choice <= this.playlist.length) {
          console.log(
            `Currently playing:${this.playlist[choice].name} by ${this.playlist[choice].artist}`
          );
        } else {
          console.log(`This choice is out of the range of your list!`);
        }
      } else {
        console.log(
          `Currently playing:${this.playlist[this.trackIndex].name} by ${
            this.playlist[this.trackIndex].artist
          }`
        );
      }
    }
  }
  repeat() {
    if (this.trackIndex === this.playlist.length - 1) {
      this.trackIndex = 0;
      this.play(this.trackIndex);
    } else {
      this.play(this.trackIndex);
    }
  }
  skip() {
    if (this.trackIndex < this.playlist.length - 1) {
      this.trackIndex++;
      this.play(this.trackIndex);
    } else {
      console.log(
        `Currently playing:${this.playlist[this.trackIndex].name} by ${
          this.playlist[this.trackIndex].artist
        } and it's the last song in your list!`
      );
    }
  }
  randNumberGen() {
    return Math.floor(Math.random() * this.playlist.length);
  }

  shuffle() {
    let randNumber = this.randNumberGen();
    if (this.playedSongs.includes(randNumber)) {
      console.log("We went through the whole playlist");
    } else {
      this.play(randNumber);
      this.playedSongs.push(randNumber);
    }
  }
  previous() {
    if (this.trackIndex > 0) {
      this.trackIndex--;
      this.play(this.trackIndex);
    } else {
      console.log(
        `Currently playing:${this.playlist[this.trackIndex].name} by ${
          this.playlist[this.trackIndex].artist
        } and it's the first song in your list`
      );
    }
  }
}

let myMusicPlayer = new MusicPlayer(); // Create an empty playlist

// Add some songs to your playlist
myMusicPlayer.add("Bohemian Rhapsody", "Queen");
myMusicPlayer.add("Yesterday", "The Beatles");
myMusicPlayer.add("Vogue", "Madonna");
myMusicPlayer.add("I Will Always Love You", "Dolly Parton");
myMusicPlayer.add("My Heart Will Go On", "Celine Dion");
myMusicPlayer.add("Ain't No Sunshine", "Bill Withers");
myMusicPlayer.add("Smooth ft. Rob Thomas", "Santana");
myMusicPlayer.add(`Bailando`, `Enrique Iglesias`);

myMusicPlayer.play(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.previous(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.skip(); // Output: "Currently playing: Vogue by Madonna"
myMusicPlayer.repeat();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
myMusicPlayer.shuffle();
