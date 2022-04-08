describe("Blackjack Game", () => {
    describe("dealerShouldDraw() function", () => {
    let nineTen = [
        { val: 9, displayVal: "9", suit: "hearts" },
        { val: 10, displayVal: "10", suit: "hearts" },
    ];
    let sixAce = [
        { val: 6, displayVal: "6", suit: "hearts" },
        { val: 11, displayVal: "Ace", suit: "hearts" },
    ];
    let sixAceTen = [
        { val: 10, displayVal: "10", suit: "hearts" },
        { val: 6, displayVal: "6", suit: "hearts" },
        { val: 1, displayVal: "Ace", suit: "hearts" },
    ];
    let twoFourTwoFive = [
        { val: 2, displayVal: "2", suit: "clubs" },
        { val: 4, displayVal: "4", suit: "hearts" },
        { val: 2, displayVal: "2", suit: "hearts" },
        { val: 5, displayVal: "5", suit: "hearts" },
    ];
    it("Should return false if cards = 9, 10", () => {
        let result = dealerShouldDraw(nineTen);
        expect(result).toEqual(false);
    });
    it("Should return true if cards = Ace, 6", () => {
        let result = dealerShouldDraw(sixAce);
        expect(result).toEqual(true);
    });
    it("Should return false if cards = Ace, 6, 10", () => {
        let result = dealerShouldDraw(sixAceTen);
        expect(result).toEqual(false);
    });
    it("Should return true if cards = 2, 4, 2, 5", () => {
        let result = dealerShouldDraw(twoFourTwoFive);
        expect(result).toEqual(true);
    });
})});