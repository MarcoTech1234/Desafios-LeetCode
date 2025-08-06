class RecentCounter {
    requests: number[]  = []
    lastRange: number = 0

    ping(t: number): number {
        this.requests.push(t)
        let min = t - 3000
        for(let i = this.lastRange; i <= this.requests.length; i++) {
            if(this.requests[i] >= min){
                this.lastRange = i;
                break;
            }
        }
        return this.requests.length - this.lastRange;
    }
}