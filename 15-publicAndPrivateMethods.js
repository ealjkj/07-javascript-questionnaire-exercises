var foo = (function () { 
    function private () {
        console.log("This method can't be called by outher functions");
    }

    function bar() {
        private()
        console.log('bar!');
    }

    function test() {
        console.log('test!');
    }

    return {bar, test};
})();

foo.bar();
foo.test();