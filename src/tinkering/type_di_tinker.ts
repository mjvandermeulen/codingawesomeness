import { Container, Service } from "typedi";
import "reflect-metadata";

@Service()
class ExampleInjectedService {
  printMessage() {
    console.log("I am alive!");
  }
}

@Service()
class AnotherExampleInjectedService {
  printMessage() {
    console.log("Another I am alive!");
  }
}

@Service()
class Maths {
  double(x: number) {
    return 2 * x;
  }
}

class Hello {
  sayIt() {
    console.log("World");
  }
}



// NOTE:
// You can't use the contructor for any other parameters
// You never get to instantiate the ExampleService manually.
//   (no new ExampleService(yada yada))


@Service()
class ExampleService {
  normalService: Hello;
  constructor(
    // because we annotated ExampleInjectedService with the @Service()
    // decorator TypeDI will automatically inject an instance of
    // ExampleInjectedService here when the ExampleService class is requested
    // from TypeDI.
    public injectedService: AnotherExampleInjectedService,
    public myInjectedService: Maths
  ) {
    this.normalService = new Hello();
  }
}

const serviceInstance = Container.get(ExampleService);
// we request an instance of ExampleService from TypeDI

serviceInstance.injectedService.printMessage();
// logs "I am alive!" to the console

console.log(serviceInstance.myInjectedService.double(3));
serviceInstance.normalService.sayIt();


const maths = Container.get(Maths);
console.log(maths.double(4))