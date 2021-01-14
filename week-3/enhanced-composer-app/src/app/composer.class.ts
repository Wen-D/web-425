
// composer interface from path
import { IComposer } from './composer.interface';

//export class composer
export class Composer {
//composers array
   composers: Array<IComposer>;

//constructor method
   constructor() {
      // sends list of parameters to constructor - id, name, genre
      this.composers = [
        // composer objects follows format icomposer interface
        {
          composerId: 100,
          fullName: "Ludwig van Beethoven",
          genre: "Classical"
        },
        {
          composerId: 101,
          fullName: "Johann Sebastian Bach",
          genre: "Classical"
        },
        {
          composerId: 102,
          fullName: "Wolfgang Amadeus Mozart",
          genre: "Classical"
        },
        {
          composerId: 103,
          fullName: "Johannes Brahms",
          genre: "Classical"
        },
        {
          composerId: 104,
          fullName: "Joseph Haydn",
          genre: "Classical"
        },
      ]
  }
   // functions that act as point of entry
   getComposers(){
    //returns composer objects from array
    return this.composers;
  }
  // loop iterates through array and returns composer if composer matches id
  getComposer(composerId: number){
    for (let composer of this.composers){
      if(composer.composerId === composerId){
          return composer;
      }
    }
  }
}


