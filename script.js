const libri = function(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
};

var libri1 = new libri("Think and grow rich", "Nazmi Rrahmani", 500);

libri.prototype.displayDetails = function(){
    console.log("Title" + this.title);
};

const addBook = function(){
    library += this.libri
};

const displayBooks = function(title, author, pages){
    console.log(this.title, this.author, this.pages)
};