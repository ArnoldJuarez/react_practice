import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Prueba en 09-proemsas', () => { 

    test('getHGeroesById debe de retornar un heroe', (done) => { 

        const id=1;
        getHeroeByIdAsync( id )
        .then(hero =>{

            expect(hero).toEqual({
                
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                
            });

            done();

        })
    });


    test('getHGeroesById debe de obtener un error si heroe no existe', (done) => { 

        const id=100;
        getHeroeByIdAsync( id )
        .then( hero => {
            expect( hero ).toBeFalsy();
            done();
        })
        .catch(error=>{

            expect( error ).toBe(`No se pudo encontrar el heroe 100`);

            done();

        })


    })



});

