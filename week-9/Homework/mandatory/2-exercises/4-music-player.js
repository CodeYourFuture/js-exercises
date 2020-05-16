class MusicPlayer {
    // Add your code here
    constructor(){
        this.playList = [];
        this.currentPlay = 0
    }
    add(song, band){
        this.playList.push({song, band})
    }
    play(){
        if(this.currentPlay > this.playList.length-1){
            this.currentPlay=0;
            console.log(`Currently playing: ${this.playList[this.currentPlay].song} by ${this.playList[this.currentPlay].band}`)
        }else{
            console.log(`Currently playing: ${this.playList[this.currentPlay].song} by ${this.playList[this.currentPlay].band}` )
        }
    }
    skip(){
        if(this.currentPlay = this.playList.length -1){
          this.currentPlay = 0;
          console.log(`Currently playing: ${this.playList[this.currentPlay].song} by ${this.playList[this.currentPlay].band}`)
        }else{
            this.currentPlay+=1
            console.log(`Currently playing: ${this.playList[this.currentPlay].song} by ${this.playList[this.currentPlay].band}`)
        }
    }
    previous(){
        if(this.currentPlay = this.playList[0]){
            this.currentPlay = this.playList.length-1;
            console.log(`Currently playing: ${this.playList[this.currentPlay].song} by ${this.playList[this.currentPlay].band}`)
        }else{
        this.currentPlay-=1
        console.log(`Currently playing: ${this.playList[this.currentPlay].song} by ${this.playList[this.currentPlay].band}`)
    }}
    shuffle(){
        shufflePlayList(this.playList);
        console.log(`Currently playing: ${this.playList[this.currentPlay].song} by ${this.playList[this.currentPlay].band}`)
    }

}


function shufflePlayList(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

let myMusicPlayer = new MusicPlayer(); // Create an empty playlist

// Add some songs to your playlist
myMusicPlayer.add("Bohemian Rhapsody","Queen");
myMusicPlayer.add("Yesterday","The Beatles");
myMusicPlayer.add("Vogue","Madonna");

myMusicPlayer.play();      // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip();      // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.previous();  // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip();      // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.skip();      // Output: "Currently playing: Vogue by Madonna"
myMusicPlayer.skip();
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








