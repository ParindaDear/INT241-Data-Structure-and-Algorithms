/*1.Check if the list is empty
2.Get the number of items in the list
3.Append an item to the list (i.e., add at the end of the list)
4.Prepend an item to the list (i.e., add at the front of the list)
5.Insert an item at a given position [not beyond the end of the list]
6.Read the item at a given position
7.Replace the item at a given position with another item
8.Delete the item at a given position */

let jslist = ['abcd', true, 20.5]

//1.Check if the list is empty
if (jslist.length == 0){
    console.log('this list is empty')
}else {
    console.log('this list is not empty')
}

//2.Get the number of items in the list
console.log(jslist.length)

//3.Append an item to the list (i.e., add at the end of the list)
jslist.push('cat')
console.log(jslist)

//4.Prepend an item to the list (i.e., add at the front of the list)
jslist.unshift(999)
console.log(jslist)

//5.Insert an item at a given position [not beyond the end of the list]
jslist.splice(2, 0, 'Bob')
console.log(jslist)

//6.Read the item at a given position
console.log(jslist[4])

//7.Replace the item at a given position with another item
jslist[0] = 0.9
console.log(jslist)

//8.Delete the item at a given position
jslist.splice(1, 1)
console.log(jslist)