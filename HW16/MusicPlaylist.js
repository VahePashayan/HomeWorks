function Playlist() {
    let index = 0;
    this.songs = [];
    let prev;
    this.add = function (song) {
        this.songs.push(song);
    };
    this.isPlaying = false;
    this.play = function () {
        this.isPlaying = true;
        return `${this.songs[index].songName} started to play`;
    };
    this.stop = function () {
        this.isPlaying = false;
        return `${this.songs[index].songName} stopped`;
    };
    this.next = function() {
        if(index >= this.songs.length - 1) {
            index = 0;
            prev = this.songs.length - 1; 
        }else {
            index++;
            prev = index - 1;
        };
        return `${this.songs[prev].songName} stopped, ${this.songs[index].songName} started to play`;
    }

}

let playlist = new Playlist();

function Song(songName, singerName) {
    this.songName = songName;
    this.singerName = singerName;
}

const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);

console.log(playlist.play());
console.log(playlist.next());
console.log(playlist.next());
console.log(playlist.stop());
console.log(playlist.play());
console.log(playlist.isPlaying);
console.log(playlist.stop());
console.log(playlist.isPlaying);
