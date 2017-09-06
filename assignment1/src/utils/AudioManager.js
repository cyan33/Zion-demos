class AudioManager {
    constructor() {
        this.audio = new Array();
    }

    addAudio(sound) {
        this.audio.push(new Audio(`src/audio/${sound}`));
    }

    getAudioByName(name) {
        let path = window.location.pathname;
        let dir = path.substring(0, path.lastIndexOf('/'));
        let file = `file://${dir}/src/audio/${name}`;
        return this.audio.find((element) => {
            return element.src === file;
        });
    }
}

export default AudioManager;