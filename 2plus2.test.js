/*describe('Suite', ()=> {
    test('2 plus 2', async ()=> {
        expect(2 + 2).toEqual(4);
    } )
}) */
function sum(a,b){
    return a+b
}
describe('Learm expect', ()=> {
    test('sum function', async ()=> {
        expect(sum(5,3)).toEqual(8);
    } )
})