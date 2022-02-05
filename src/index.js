class Site {
    constructor() {
        this.boards = [];
    }
    
    // Board 추가
    addBoard(board) {
        if (this.boards.find((exist) => exist.boards === board.boards)) throw new Error();
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
            if (site.boards === boardname) return site;
        });
        return result;
    }
}

class Board {
    constructor(string) {
        if (string === '' || string === null || !string) throw new Error();
        else {
            this.boards = string;
            this.articles = [];
            this.isInSite = false;
        }
    }

    publish(article) {
        if (this.isInSite) {
            this.articles.push(article);
        }
        else throw new Error();
    }
}

class Article {
    constructor(subject, content, author) {
        this.subject = subject;
        this.content = content;
        this.author = author;
    }
}

class Comment {
    constructor(content, author) {
        if (content === '' || content === null) throw new Error();
        else if (author === '' || author === null) throw new Error();
        this.content = content;
        this.author = author;
    }

    reply(comment) {
        
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
