import * as test from "./test-module.js";
// można też zaimportować konkretną rzecz
// z innego pliku js np:
// import HelloWorld as test from "./test-module.js";

let helloWorld = new test.HelloWorld("Hello World!");
helloWorld.PrintData();
