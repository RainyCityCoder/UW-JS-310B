describe("BlackJack Game", () => {
    describe ("calcPoints funct.", () => {
        let noAceHand = [
            { val: 5, displayVal: "5", suit: "hearts" },
            { val: 10, displayVal: "10", suit: "hearts" }
        ];
        let oneAceSoftHand = [
            { val: 11, displayVal: "Ace", suit: "hearts" },
            { val: 10, displayVal: "10", suit: "hearts" },
            { val: 6, displayVal: "6", suit: "hearts" }
        ];
        let oneAceHardHand = [
            { val: 11, displayVal: "Ace", suit: "hearts" },
            { val: 6, displayVal: "6", suit: "hearts" }
        ];
        let multiAceSoftHand = [
            { val: 11, displayVal: "Ace", suit: "hearts" },
            { val: 11, displayVal: "Ace", suit: "hearts" },
            { val: 6, displayVal: "6", suit: "hearts" }
        ];
        let multiAceHardHand = [
            { val: 11, displayVal: "Ace", suit: "hearts" },
            { val: 11, displayVal: "Ace", suit: "hearts" },
            { val: 6, displayVal: "6", suit: "hearts" }
        ];
        it('should return 15 if no aces', () => {
            let result = calcPoints(noAceHand);
            expect(result.total).toEqual(15)
            expect(result.isSoft).toEqual(false)
        })
        it('should return X', () => {})
        it('should return X', () => {})
    })
})