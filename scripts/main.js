/*jslint browser:true */
/*globals $ */


var articles = {list: [
    {
        title: "Article 1",
        text: "My cool article",
        image: "./assets/horse.jpg"
    },
    {
        title: "Article 2",
        text: "My cool article",
        image: "./assets/seal.jpg"
    },
    {
        title: "Article 4",
        text: "My cool article",
        image: "./assets/horse.jpg"
    }
]};

function displayWelcome() {
    alert("welcome!");
}

function calculateAge() {
    
    var birthYear = $("#year").val()
	var birthMonth = $("#month").val()
	var birthDay = $("#day").val()
    
    const currentYear = 2020
    const currentMonth = 5 //May
	const currentDay = 19
    
    
    var age = currentYear - birthYear; //Result is 30 at this point
    
	if (currentMonth < birthMonth) { //true
			age--;
	}

	if (currentMonth == birthMonth && birthDay == currentDay) { //false
			age--;
	} 
    
    $("#result").text("Tens " + age + " anys.");
}

function appendArticle(article) {
    'use strict';

    $("#newsFeed")
        .append($("<div></div>")
                .addClass("myArticle")
                .append($("<h1></h1>").text(article.title))
                .append($("<image src='" + article.image + "'/>")
                        .addClass("articleImage"))
                .append($("<p></p>").text(article.text)));
}

function buildNewsFeed() {
    'use strict';

    articles.list.forEach(a => appendArticle(a));
}

function buildWebsite() {
    'use strict';

    buildNewsFeed();
}

buildWebsite();