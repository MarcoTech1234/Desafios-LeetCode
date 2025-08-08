function predictPartyVictory(senate: string): string {
    const Dire: number[] = [];
    const Radiant: number[] = [];

    for (const [index, char] of [...senate].entries()) {
        if(char == 'D')
            Dire.push(index)
        else
            Radiant.push(index)
    }

    const n = senate.length;

    while(Dire.length > 0 && Radiant.length > 0) {
        let dire = Dire.shift()!
        let radiant = Radiant.shift()!

        if(radiant < dire) {
            Radiant.push(radiant + n)
        } else {
            Dire.push(dire + n)
        }
    }
    return Dire.length > 0 ? 'Dire' : 'Radiant';
}