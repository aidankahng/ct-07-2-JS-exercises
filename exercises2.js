// Exercise #1
// Use map to convert an array of number from inches to feet

// 1 foot = 12 inches
let heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// [
//   5.5,
//   5.333333333333333,
//   5,
//   4.333333333333333,
//   6,
//   6.666666666666667,
//   4.25
// ]

function inToFeet(inches) {
    return Math.round(((inches/12) + Number.EPSILON) * 100) / 100
}

let heightsInFeet = heightsInInches.map(inToFeet)
console.log(heightsInFeet)
// [5.5, 5.33, 5, 4.33, 6, 6.67, 4.25]



// Exercise #2
// Use the array of shop items provided and present the the information in the following format

// =======================================
// Name: 	 Air Max 97
// Price: 	 130
// About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes.
// Category: shoes
// =======================================
// Name: 	 Adidas NMD R1
// Price: 	 128
// About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
// Category: shoes
// =======================================
// Name: 	 Gucci Oversize T-shirt with Interlocking G
// Price: 	 580
// About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
// Category: shirts
// =======================================
// Name: 	 Nike Sportswear Club
// Price: 	 18.97
// About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
// Category: shirts
// =======================================
// Name: 	 Spanx Flare Jeans, Vintage Indigo
// Price: 	 148
// About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
// Category: pants
// =======================================
// Name: 	 Bonobos Premium Stretch Jeans
// Price: 	 69
// About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
// Category: pants

let shopItems = [
    {
        id: 1,
        name: "Air Max 97",
        price: 130.0,
        desc: "The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
        category: "shoes",
    },
    {
        id: 2,
        name: "Adidas NMD R1",
        price: 128,
        desc: "New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
        category: "shoes",
    },
    {
        id: 3,
        name: "Gucci Oversize T-shirt with Interlocking G",
        price: 580,
        desc: "The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
        category: "shirts",
    },
    {
        id: 4,
        name: "Nike Sportswear Club",
        price: 18.97,
        desc: "The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
        category: "shirts",
    },
    {
        id: 5,
        name: "Spanx Flare Jeans, Vintage Indigo",
        price: 148,
        desc: "These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
        category: "pants",
    },
    {
        id: 6,
        name: "Bonobos Premium Stretch Jeans",
        price: 69,
        desc: "Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
        category: "pants",
    },
];


function displayItem(item) {
    // =======================================
    // Name: 	 Bonobos Premium Stretch Jeans
    // Price: 	 69
    // About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
    // Category: pants
    console.log(`=======================================`);
    console.log(`Name:\t`, item.name);
    console.log(`Price:\t`, item.price);
    console.log(`About:\t`, item['desc']);
    console.log(`Category:`, item.category);
}

shopItems.forEach(displayItem)



// Exercise #3
// String Reversal Function:
// Write a function called reverseString that takes a string (str) as an argument and returns the reverse of that string.

let testString1 = "Hello World" // "dlroW olleH"
let testString2 = "test test 123" // "321 tset tset"

function reverseString(inputString) {
    let reversed = ""
    for (let char of inputString) {
        reversed = char + reversed
    }
    return reversed
}
console.log(reverseString(testString1))
console.log(reverseString(testString2))




// Exercise #4
// Duplicate Element Remover Function:
// Write a function called removeDuplicates that takes an array (arr) as an argument and returns a new array with duplicate elements removed

let testArr1 = ['Chicago', 'New York', 'Miami', 'New York','Chicago', 'Miami', 'Chicago', 'New York', 'Chicago'] // ['Chicago', 'New York', 'Miami']

let testArr2 = [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 2, 3, 4] // [1, 2, 3, 4]

function removeDuplicates(inputArr) {
    let uniques = []
    for (let entry of inputArr) {
        if (!uniques.includes(entry)) {
            uniques.push(entry)
        }
    }
    return uniques
}

console.log(removeDuplicates(testArr1))
console.log(removeDuplicates(testArr2))