import { InMemoryDbService } from 'angular-in-memory-web-api';

/*************************************************************************
 *
 * this service can be detached as soon as a real HTTP server / request is used
 *
 **************************************************************************/

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Iron Man' },
      { id: 12, name: 'Captain America' },
      { id: 13, name: 'Hulk' },
      { id: 14, name: 'Wolverine' },
      { id: 15, name: 'Spiderman' },
      { id: 16, name: 'Ice Man' },
      { id: 17, name: 'Black Widow' },
      { id: 18, name: 'Thor' },
      { id: 19, name: 'Green Arrow' },
      { id: 20, name: 'Flash' }
    ];
    return {heroes};
  }
}
