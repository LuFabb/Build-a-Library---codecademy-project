class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    } 

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }
   

    toggleCheckOutStatus() {
        if (this.isCheckedOut === true) {
            return false;
        } else {
            return true;
        }
    }

    //sum all rating numbers and divide it with the length of array - and math floor find a integer num

    getAvarageRating() {
        let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        return Math.floor(ratingSum / this._ratings.length)
    }
//make sure if rating is between 1 and 5
    addRating(num) {
        if (num <= 5) {
            this.ratings.push(num);
        } else {
            console.log('Rating have to be under 5')
    }
}
}


class Book extends Media {
    constructor(author, title, pages) {
        super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}


class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}


class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    //randomly sorted array of all the songs in the songs property
    shuffle() {
        return this._songs.sort(() => Math.random() - 0.5);
    }
}

//Book instance

const historyOfEveryThing = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEveryThing.toggleCheckOutStatus()

console.log(historyOfEveryThing.isCheckedOut);

historyOfEveryThing.addRating(4);
historyOfEveryThing.addRating(5);
historyOfEveryThing.addRating(5);

historyOfEveryThing.getAvarageRating();

console.log(historyOfEveryThing.getAvarageRating())

//Movie instance

const speed = new Movie('Jan de Bont', 'Speed', 116)

speed.toggleCheckOutStatus()

console.log(speed.isCheckedOut)

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

speed.getAvarageRating()

console.log(speed.getAvarageRating())

//CD instance

const macroBlank = new CD('avalanche IP', 'Macroblank', ['first song', 'second song', 'theerd song', 'Last song']);

macroBlank.toggleCheckOutStatus();
console.log(macroBlank.isCheckedOut);

stateOfTrance.addRating(4);
stateOfTrance.addRating(5);
stateOfTrance.addRating(5);
// return shuffled songs
console.log(stateOfTrance.shuffle());


