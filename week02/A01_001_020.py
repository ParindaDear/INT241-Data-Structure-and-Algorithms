'''
1.Check if the list is empty
2.Get the number of items in the list
3.Append an item to the list (i.e., add at the end of the list)
4.Prepend an item to the list (i.e., add at the front of the list)
5.Insert an item at a given position [not beyond the end of the list]
6.Read the item at a given position
7.Replace the item at a given position with another item
8.Delete the item at a given position
'''

pylist = ['ab','cd',1,3,0.5,True]

# 1.Check if the list is empty
if len(pylist) == 0:
    print("1. this list is empty")
else:
    print("1. this list is not empty")

# 2.Get the number of items in the list
print('2.',len(pylist))

# 3.Append an item to the list (i.e., add at the end of the list)
pylist.append('im last')
print('3.',pylist)

# 4.Prepend an item to the list (i.e., add at the front of the list)
pylist.insert(0,'im first')
print('4.',pylist)

# 6.Read the item at a given position
print('5.',pylist[3])

# 7.Replace the item at a given position with another item
pylist[3] = 'index 3'
print('6.',pylist)

# 8.Delete the item at a given position
pylist.pop(4)
print('7.',pylist)