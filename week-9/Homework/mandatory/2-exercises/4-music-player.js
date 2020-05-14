class MusicPlayer {
    // Add your code here
    constructor(){
       this.songName =[],
       this.songSinger = [] 
        this.num = 0 ;  
    }
    add(newSong,newSinger){
        this.songName.push(newSong);
        this.songSinger.push(newSinger);
    }
    play(){
        if(this.songName.length == 0){
            console.log("You don't have any song to play")
        }
        console.log("Currently playing: " + this.songName[this.num] + " by " + this.songSinger[this.num])
    }
    skip(){
    this.num += 1;
    if(this.num <= this.songName.length){
    console.log("Currently playing: " + this.songName[this.num] + " by " + this.songSinger[this.num])
    }
    if(this.num > this.songName.length || this.songName.length == 0){
        console.log("You don't have any song to skip")
    }

    }
    previous(){
        if(this.num > 0 && this.num < this.songName.length){
        this.num -= 1;
        console.log("Currently playing: " + this.songName[this.num] + " by " + this.songSinger[this.num])
        }
        else{
            this.num = 0;
            console.log("Currently playing: " + this.songName[this.num] + " by " + this.songSinger[this.num])
        }
    }

    repeat(){
       this.num = 0
       this.play();
    }
    shuffle(){
        let songNum = Math.floor(Math.random() * (this.songName.length))
        for(let i=0;i < this.songName.length; i++){
            console.log(this.songName)
            this.num = songNum
            console.log("Currently playing: " + this.songName[songNum] + " by " + this.songSinger[songNum])
            this.songName.splice(songNum,1)
            if(this.songName.length == 0){
                console.log("ALL PLAYED")
            this.num = 0;
            }
        }
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

myMusicPlayer.skip();      // Output: "Currently playing: Vogue by Madonna"
myMusicPlayer.previous();      // Output: "Currently playing: Vogue by Madonna"
myMusicPlayer.skip();      // Output: "Currently playing: Vogue by Madonna"
myMusicPlayer.repeat();      // Output: "Currently playing: Vogue by Madonna"

myMusicPlayer.shuffle();
myMusicPlayer.skip()
myMusicPlayer.shuffle();
myMusicPlayer.previous();      // Output: "Currently playing: Vogue by Madonna"
myMusicPlayer.skip()
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








