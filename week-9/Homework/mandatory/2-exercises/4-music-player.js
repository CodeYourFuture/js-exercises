class MusicPlayer {
    // Add your code here
    constructor(){
        this.playList = [];
        this.currentPlay = 0;
    }

    add(songName, artist){
        const song ={
            "songName": songName,
            "artist": artist
        }
        this.playList.push(song);
    //     this.playList.music = music;
    //     this.playList.singer = singer
    }

    play(){
        if(this.playList.length == 0){
            console.log('there is no any song!');
            
        } else{
        printSong(this.playList[this.currentPlay]);
        }
    }
    skip(){
        if(this.currentPlay == this.playList.length - 1){
            // console.log('unable plye the next song!');
            this.currentPlay = 0;
            printSong(this.playList[this.currentPlay ]);
        } else{
        
            this.currentPlay += 1;
            printSong(this.playList[this.currentPlay ]);
        }
    }
    previous(){
        if(this.currentPlay == 0){
            // console.log('unable to go to the previous song!')
            this.currentPlay = this.playList.length - 1;
            printSong(this.playList[this.currentPlay]);
        } else{
            this.currentPlay -=1;
            printSong(this.playList[this.currentPlay]);
        }
    }
    shuffle(){
        shuffleArray(this.playList);
        this.playList.forEach(printSong) // This is same as this.playList.forEach(song => printSong(song)).
    }
}
function printSong(song){
    console.log(`Currently playing: ${song.songName} by ${song.artist}`)
}

function shuffleArray(array) {
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

myMusicPlayer.shuffle();

// myMusicPlayer.play();      // Output: "Currently playing: Bohemian Rhapsody by Queen"

// myMusicPlayer.skip(); 
                     // Output: "Currently playing: Yesterday by The Beatles"

// myMusicPlayer.previous();  // Output: "Currently playing: Bohemian Rhapsody by Queen"

// myMusicPlayer.skip();      // Output: "Currently playing: Yesterday by The Beatles"

// myMusicPlayer.skip();      // Output: "Currently playing: Vogue by Madonna"


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








