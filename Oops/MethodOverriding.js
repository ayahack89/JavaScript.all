/* Method Overriding */
class A{
     show(){
            console.log("In A");
     }
}
class B extends A{
     show(){
            console.log("In B");
     }
}

const obg1 = new A();
obg1.show();
const obg2 = new B();
obg2.show();

//JavaScript does not support overloading. But it supports overriding. In the above code, the show() method is overridden in class B.
