class MusicPlayer {
    // Add your code here
    constructor(){
        this.playList = [];
        this.count = 0;

    }

    add(track, singer){
        this.playList.push([track,"by", singer])

    }

    play(){
        if(this.playList.length <= 0){
            console.log("There is no song to play in the playList")

        }else if(this.playList.length > 0){
            console.log("Currently playing:" +" " + this.playList[this.count].join(" "))
        }     
    
    }

    skip(){
        this.count++;
        if(this.count >= this.playList.length){

            // console.log("There is no more songs left to play in the playList")
            this.repeat();
        }else{

        this.play();

        }
    }
        
    
    previous(){
        this.count--;
        this.play();

    }

    shuffle(){
        if(this.playList.length > 0){
        console.log("Currently playing:" +" " + this.playList[Math.floor(Math.random() * this.playList.length)].join(" "))
        }
    }
    
    repeat(){
        if(this.count >= (this.playList.length - 1)){
            this.count = 0;
            this.play();
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

myMusicPlayer.repeat();
myMusicPlayer.skip();
myMusicPlayer.skip();
myMusicPlayer.skip();
myMusicPlayer.skip();
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








