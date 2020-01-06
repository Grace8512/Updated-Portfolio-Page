
var portfolio = [
                    {"title": "Hangman Game", link:"https://grace8512.github.io/Word-Guess-Game/", image: "assets/images/1.hangman.png"}, 
                    {"title": "Number Adding Game", link:"https://grace8512.github.io/unit-4-game/", image: "assets/images/2.numberAdd.jpg"},
                    {"title": "Trivia Game", link: "https://grace8512.github.io/Advanced-Trivia/", image: "assets/images/3.trivia.jpg"},
                    {"title": "GifTastic", link:" https://grace8512.github.io/GifTastic/", image: "assets/images/4.GifTastic.jpeg"},
                    {"title": "Train-Scheduler", link:"https://grace8512.github.io/train-Scheduler/", image: "assets/images/5.Train-Scheduler.png"},
                    {"title": "Part Time Gigs-group project.1", link:"https://rupagit.github.io/awesomeFive/", image: "assets/images/6.part-time.jpg"}
            ];

for(var i=0; i<portfolio.length; i++){
    let item = portfolio[i];
    console.log(item);
    let portfolioSrc = $("<img class='portfolio-img'>");
    portfolioSrc.attr("src", item.image);
    let portfolioP = $("<p class = 'portfolio-p'>");
    portfolioP.text(item.title);
    let portfolioDiv = $("<div class='portfolio-div'>");
    portfolioDiv.on("click", function(){
        document.location.href = item.link;
    });
    portfolioDiv.append(portfolioSrc, portfolioP);
    $(".main-portfolio").append(portfolioDiv);
};

