class MusicPlayer {
  // Add your code here
  constructor() {
    this.playList = [];
    this.currentIndex = 0;
  }
  add = (song, singer) => {
    this.playList.push([song, singer]);
  };
  play = () => {
    if (this.playList.length > 0) {
      console.log(
        `Currently playing: ${this.playList[this.currentIndex][0]} by ${
          this.playList[this.currentIndex][1]
        }`
      );
    } else {
      console.log(
        `your playlist is empty, add your favorite song to your playlist`
      );
    }
  };
  skip = () => {
    this.currentIndex++;
    if (this.playList.length === this.currentIndex) {
      this.currentIndex = 0;
    }
    this.play();
  };
  previous = () => {
    this.currentIndex--;
    this.play();
  };
  shuffle = () => {
    do {
      this.randomIndex = Math.floor(Math.random() * this.playList.length);
    } while (this.randomIndex === this.currentIndex);
    console.log(
      `Currently playing: ${this.playList[this.randomIndex][0]} by ${
        this.playList[this.randomIndex][1]
      }`
    );
  };
}

let myMusicPlayer = new MusicPlayer(); // Create an empty playlist
// myMusicPlayer.play();
// Add some songs to your playlist
myMusicPlayer.add("Bohemian Rhapsody", "Queen");
myMusicPlayer.add("Yesterday", "The Beatles");
myMusicPlayer.add("Vogue", "Madonna");
// console.log(myMusicPlayer.playList);
myMusicPlayer.play(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.previous(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip(); // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.skip(); // Output: "Currently playing: Vogue by Madonna"

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
