/*


Task 1: Complete the below code to create a music player that will run 
through a playlist of songs and output to the console as described in the comments.

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
        this.allSongs = [];
        this.counter = 0;
    }
    add(song, artist) {

        this.allSongs.push(`${song} by ${artist}`);
    }
    play() {
        if (this.allSongs.length===0) {
            console.log('You do not have any songs to play');
        }
        else {
            console.log(`Currently playing ${this.allSongs[this.counter]} `);
        }
        
    }
    skip() {
        this.counter += 1;
        if (this.counter === this.allSongs.length) {
            console.log('You have already played all the songs!')
        }
        else {
      
            console.log(`Currently playing ${this.allSongs[this.counter]} `);
        }
    }

 
    previous() {
        console.log(`Currently playing ${this.allSongs[this.counter]} `);
    }


}

let myMusicPlayer = new MusicPlayer(); // Create an empty playlist

//Add some songs to your playlist
myMusicPlayer.add("Bohemian Rhapsody","Queen");
myMusicPlayer.add("Yesterday","The Beatles");
myMusicPlayer.add("Vogue","Madonna");

myMusicPlayer.play(); // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip();      // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.previous();  // Output: "Currently playing: Bohemian Rhapsody by Queen"

myMusicPlayer.skip();      // Output: "Currently playing: Yesterday by The Beatles"

myMusicPlayer.skip();      // Output: "Currently playing: Vogue by Madonna"
myMusicPlayer.skip();
myMusicPlayer.skip();










