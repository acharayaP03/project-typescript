import { CharactersCollection } from "../CharactersCollection.ts";
import { NumberCollection } from "../NumberCollection.ts";
import { LinkedList } from "./LinkedList.ts";

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// export class Sorter {
//   constructor(public collection: Sortable) {}

//   sort(): void {
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection.compare(j, j + 1)) {
//           this.collection.swap(j, j + 1);
//         }
//       }
//     }
//   }
// }

// converting it into an abstract class
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

const numbersCollection = new NumberCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("Xaayb");

// const sort = new Sorter(numbersCollection);
// const sortString = new Sorter(charactersCollection);
numbersCollection.sort();
charactersCollection.sort();

console.log(numbersCollection);
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);

linkedList.add(-3);
linkedList.add(4);

linkedList.add(1000);

linkedList.sort();
linkedList.print();
