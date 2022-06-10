# Lab02 - Arrays

[TOC]

## Due Date

Week 3 Tuesday 5:00 pm AEST (due to Monday being a public holiday)

## Background

### Rationale

Have you ever made a shopping list? If you have, you would know that sometimes we need to
sum up the prices, find the most expensive item (probably to get rid of), find common items between two lists to avoid double-buying, and so on.

Introducing: Javascript arrays - these are perfect when dealing with an ordered collection of items! In this lab, we will be bringing to life an interface that allows us to directly manipulate arrays of integers and perform common operations that you will find useful in COMP1531 and beyond.

### Setup
- Copy the SSH clone link from Gitlab and clone this repository on either VLAB or your local machine. 
- In your terminal, change your directory (using the `cd` command) into the newly cloned lab. To check if you have done this correctly, type `ls` in this new directory to see if you can see the relevant files (including [array.js](array.js)).

### Interface: Functions

| Name & Description | Parameters | Return Type | Errors |
|------------------|----------|--------------------|------|
| `arraySum`<br/><br/>Compute the sum of the given integer array. If the array is empty, the sum is 0. | (array) | `number` | N/A |
| `arrayProduct`<br/><br/>Compute the product of the given integer array. If the array is empty, the product is 1. | (array) | `number` | N/A | 
| `arrayMin`<br/><br/>Find the smallest number in the array. | (array) | `number` | Return `null` if the array is empty |
| `arrayMax`<br/><br/>Find the largest number in the array. | (array) | `number` | Return `null` if the array is empty |
| `arrayContains`<br/><br/>Determine if the array contains a particular integer element. | (array, item) | `boolean` | N/A |
| `arrayReversed`<br/><br/>Create an array that is the reserved of the original. The original array should not be modified. | (array) | `number[]`, or `Array<number>` | N/A | 
| `arrayHead`<br/><br/>Returns the first element in the array. | (array) | `number` | Return `null` if the array is empty |
| `arrayTail`<br/><br/>Returns all remaining elements in the array after the head. | (array) | `number[]`, or `Array<number>` | Return `null` if the array is empty |
| `arraysMultiply`<br/><br/>Given two arrays, multiply the elements at each index from arrays and store the result in a third array.<br/><br/>If the given two arrays differ in length, excess elements of the larger array will be added on at the end. | (array1, array2) | `number[]`, or `Array<number>` | N/A
| `arraysCommon`<br/><br/>Create a third array containing common elements between two arrays.<br/><br/>Each element in the first array can map to at most one element in the second array.<br/><br/>Duplicated elements in each array are treated as separate entities.<br/><br/>The order is determined by the first array. | (array1, array2) | `number[]`, or `Array<number>` | N/A |

#### Tip

- For some of the functions above, further examples are provided in their documentation in [arrays.js](array.js).
- **The original array passed in for each function should not be modified**. We have emphasised this in a few functions that are likely to cause issues, marked with `WARNING`.

### Interface: Data Types
| If the variable name | It is of type |
| --- | --- |
| contains **array** | `number[]`, which is the same as `Array<number>` and denotes an array of numbers such as `[1,2,3]`  |
| is exactly **item** | `number`, specifically integer |


## Task

### Implementation

Open the file [array.js](./array.js) in your preferred text editor. The stub code for each function has been provided for you.

Complete each function in [Interface: Functions](#interface-functions).

### Run & Test

You can run and test your code by typing the following in a terminal opened at the directory (folder) for this lab:
```shell
$ node array.js
```

## Submission

- Use `git` to `add`, `commit`, and `push` your changes on your master branch.
- Check that your code has been uploaded to your Gitlab repository on this website (you may need to refresh the page).

**If you have pushed your latest changes to master on Gitlab no further action is required! At the due date and time, we automatically collect your work from what's on your master branch on Gitlab.**


## Notes
- Pay close attention to any `WARNING` or when a function can have multiple return types, e.g. `{number|null}`.
- Passing the given tests is a good indication of correctness but does not guarantee that you will receive the full mark for the lab.
- You are advised to do further testing.
- You are not allowed to use any external libraries/modules in this exercise.
- You may find the resource below useful:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
