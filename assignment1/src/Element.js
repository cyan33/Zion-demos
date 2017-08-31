class Element {
    constructor(index, url) {
        this.index = index;
        this.src = setSrc(url);
    }

    setSrc(url) {
        this.src = url;
    }
}

export default Element;