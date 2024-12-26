const game = {
    name: "Bloodborne",
    genre: "soulsborne",
    releaseDate: 2015,
    author: "Hidetaka Miyazaki",
    award: function(){
        console.log(`${this.name} won the game awards!!`);
    },

    created: function(){
        return "It was created by " + this.author;
    }
};

game.award();
game.genre;
game.created();

paragraph = document.getElementById('author');
paragraph.textContent = game.created();
