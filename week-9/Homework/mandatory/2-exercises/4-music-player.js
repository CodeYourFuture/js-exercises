class MusicPlayer {//creating a class called MusicPlayer in javaScript
    constructor(){ //creating constructor to use when creating instance of class
       this.song = [], //empty array to store the song
       this.artist = [], //empty array to store the artist
       this.number = 0; //index for song
    }
    add(songNumber, singer){ //add function
      let song = this.song.push(songNumber); //pushing the song into empty array
      let artist = this.artist.push(singer);//pushing the singer into empty array
    }

    play(){
     console.log("Currently playing:" +this.song[this.number]+ " By the artist" +this.artist[this.number]);
    } 

    skip(){
      this.number++;
      console.log("Currently playing:" + this.song[this.number] + " By the artist" + this.artist[this.number]);
    }

    previous(){
      this.number--;
      console.log("Currently playing:" + this.song[this.number] + " By the artist" + this.artist[this.number]);
    }
    // Add your code here

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








