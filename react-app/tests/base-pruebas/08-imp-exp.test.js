import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Prueba en 08-imp-exp', () => { 

    test('getHeroeById debe de retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);
    
        //console.log(hero);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

     });

     test('getHeroeById debe de retornar undefined si no existe', () => { 

        const id = 100;
        const hero = getHeroeById(id);
    
        //console.log(hero);
        expect(hero).toBeFalsy();

     });


     test('getHeroesByOwner debe retornar un arreglo de 3 heroes DC', () => { 

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        //console.log(hero);

        const arregloDC = [{ id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }];
        
        //console.log(arregloDC);
        expect(heroes).toEqual(arregloDC);
        expect(heroes.length).toBe(3);
      })

      test('getHeroesByOwner debe retornar un arreglo de 2 heroes Marvel', () => { 

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes)

        const arregloMarvel = [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }];

        expect(heroes).toEqual(arregloMarvel);
        expect(heroes.length).toBe(2);
    })



 })