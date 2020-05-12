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
        title: "Article 3",
        text: "My cool article",
        image: "./assets/bird.jpg"
    }
]};

function displayWelcome() {
    alert("welcome!");
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