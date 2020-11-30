function pow(a: number){
    return a ** 2;
}
describe('TS', ()=> {
    test('pow function', async ()=> {
        expect(pow(3)).toEqual(9);
    } )
    
})