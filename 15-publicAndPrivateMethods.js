var foo = (function () { 
    function private () {
        console.log("you can't access this function");
    }

    function bar() {
        console.log('bar!');
    }

    function test() {
        console.log('test!');
    }

    return {bar, test};
})();

foo.bar();
foo.test();