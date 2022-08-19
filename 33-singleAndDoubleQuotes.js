function func1() { return { prop:"foo"}; }
function func2() { return { prop:'foo'}; }

//Explanation:

// There is no difference. Both functions are equivalent. However if you compare fun1 == fun2 or fun1 === fun2 it will return false because objects are compared by their space in memory. 