// 'This' is the object executing current function 
// method -> object
// function -> global 

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'], 
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag);
        }, this);
    }
}; 

video.showTags(); 
