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
    constructor(){
       this.index
       this.music = []
    }
add(song, singer){
let addSong = {
    song: song,
   singer: singer
}
this.music.push(addSong)
}
play(){
    this.index = 0
    if(this.music.length > 0 ){
        console.log(`Currently playing: ${this.music[this.index].song} by ${this.music[this.index].singer}`)
    } else {
        console.log('Sorry there is no songs to play')
    } 

}
skip(){
this.index++

if(this.index === this.music.length){this.index = 0}
  console.log(`Currently playing: ${this.music[this.index].song} by ${this.music[this.index].singer}`);
}
previous(){
    this.index--
    if(this.index < 0){this.index = this.music.length - 1}
    console.log(`Currently playing: ${this.music[this.index].song} by ${this.music[this.index].singer}`);
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










