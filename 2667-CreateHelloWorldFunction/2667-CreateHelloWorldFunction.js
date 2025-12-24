// Last updated: 24/12/2025, 18:07:17
1/**
2 * @return {Function}
3 */
4var createHelloWorld = function() {
5    
6    return function(...args) {
7        return "Hello World"
8    }
9};
10
11/**
12 * const f = createHelloWorld();
13 * f(); // "Hello World"
14 */