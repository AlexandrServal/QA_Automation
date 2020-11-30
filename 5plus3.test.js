function sum(a,b){
    return a+b
}
describe('Learm expect', ()=> {
    test('sum function', async ()=> {
        expect(sum(5,3)).toEqual(9);
    } )
    test('not string', async ()=> {
        expect(typeof sum(6,2)).not.toEqual('string');
    } )
})