class Site {
    constructor() {
        this.boards = [];
    }
    
    // Board 추가
    addBoard(board) {
        if (this.boards.find((exist) => exist.name === board.name)) throw new Error();
        // for (let i = 0; i < this.boards.length; i++) {
        //     if (this.boards[i].boards === board.boards) throw new Error();
        // }
        else {
            board.isInSite = true;
            this.boards.push(board);
        }
    }

    // boardname으로 찾기
    findBoardByName(boardname) {
        const [result] = this.boards.filter(site => {
            if (site.name === boardname) return site;
        });
        return result;
    }
}

class Board {
    constructor(name) {
        if (name === '' || name === null || !name) throw new Error();
        this.name = name;
        this.articles = [];
        this.isInSite = false;
    }

    publish(article) {
        if (this.isInSite) {
            article.id = `${this.name}-` + Math.random();
            article.createdDate = new Date().toISOString();
            article.isInBoard = true;
            this.articles.push(article);
        }
        else throw new Error();
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(articleContents) {
        if (articleContents.subject === '' || articleContents.subject === null) throw new Error();
        if (articleContents.content === '' || articleContents.content === null) throw new Error();
        if (articleContents.author === '' || articleContents.author === null) throw new Error();
        this.id = '';
        this.createdDate = '';
        this.isInBoard = false;
        this.comments =[];
    }
    
    reply(comment) {
        if (this.isInBoard) {
            comment.createdDate = new Date().toISOString();
            this.comments.push(comment);
        } else throw new Error();
    }

    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(commentContents) {
        if (commentContents.content === '' || commentContents.content === null) throw new Error();
        if (commentContents.author === '' || commentContents.author === null) throw new Error();
        this.createdDate = '';
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
