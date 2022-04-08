describe("Test the soccer program", ()=>{
    describe("Test getTotalPoints", ()=> {
        it("Should return a number", ()=>{
            let result = getTotalPoints('t');
            expect(typeof result).toEqual('number')
        })
        it('should return 9 for 3 wins', ()=>{
            let result = getTotalPoints('www')
            expect(result).toEqual(9)
        })
    })
})

describe("tests for orderTeams", () => {
    let teamArr = [
        {name:'Sounders', results:'wwdl'}, 
        {name:'Galaxy', results:'wlld'}
    ];
    it("should return Str.", () => {
        let result = orderTeams(teamArr)
        // expect(result).toEqual(/*How do you test a funct. that produces a
        console.log()?*/)
    })
})