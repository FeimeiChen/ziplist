const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];
function zipList(list1, list2) {
  const list = [];
  for (let i = 0; i < testList1.length; i++) {
    list.push(list1[i], list2[i]);
  }
  return list;
}
console.log(zipList(testList1, testList2));
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(testList1, testList2));
