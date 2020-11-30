describe('Learm expect', ()=> {
    test.only('1', async ()=> {//только этот тест
        expect(true).toBeTruthy();
    } );
    test('2', async ()=> {
        expect(true).toBeTruthy();
    } )
})