class Youtube {
    constructor(key){
        this.key = key;
        this.getRequestoptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPopular(){ // promise 동기식
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${this.key}`, this.getRequestoptions
        );
        const result = await response.json();
        console.log(result);
        return result.items;
    }

    async search(query){
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${query}&key=${this.key}`, this.getRequestoptions
        );
        const result = await response.json();
        console.log(result);
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;