function formatString(input: string, toUpper?: boolean): string {
    const result = toUpper === true ? input.toUpperCase() : input.toLowerCase();
    console.log(result);
    return result
}

formatString("hello", false)




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result = items.filter(item => item.rating >= 4);
    console.log(result);
    return result
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

filterByRating(books);




function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result = arrays.flat() //es2019 require to run flat 
    console.log(result)
    return result;
}

concatenateArrays([1, 2], [3, 4], [5]);




class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): void {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    public getModel(): void {
      console.log(`Model: ${this.model}`);
    }
  }
  
  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();   
  myCar.getModel(); 
  


  
function processValue(value: string | number): number {
    const result = typeof value === "string" ? value.length : value * 2;
    console.log(result)
    return result
}

processValue("rifat")




interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        console.log(null);
        return null;
    }
    let maxProduct = products[0];

    for (const product of products) {
        if (product.price > maxProduct.price) {
            maxProduct = product;
        }
    }

    console.log(maxProduct);
    return maxProduct;
}

const products: Product[] = [];

getMostExpensiveProduct(products);  




enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    let result: string;
    if (day === Day.Sunday || day === Day.Saturday) {
        result = "Weekend";
    } else {
        result = "Weekday";
    }
    console.log(result);
    return result;
}

getDayType(Day.Saturday);   




async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      }
    });
  }
  
  squareAsync(-4)
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error.message));
  
  