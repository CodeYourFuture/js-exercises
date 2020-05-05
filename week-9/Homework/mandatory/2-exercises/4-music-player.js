class MusicPlayer {
    constructor() {
        this.songList = [];
        this.i = 0;
    }
    add(song, singer){
      this.musicList = {song, singer} 
      this.songList.push(this.musicList)
      console.log(this.songList)
    }

    play(){
        console.log(`Currently playing: ${this.songList[this.i].song} by ${this.songList[this.i].singer}`)
    }

    skip(){
      this.i++;
      this.i > this.songList.length-1 ? this.i =0 : true
      this.play()
    }

    previous(){
        this.i--;
        this.i < 0 ? this.i = this.songList.length-1: true
        this.play()
    }

    // shuffle(){
    //     let a = this.songList.length
    //     let temp = this.i
    //     this.i = Math.floor(Math.random() * a)
    //     this.i !== temp ? true : false
    // }
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








