//#

const lang2 = ["c", "java", "python"]

const values=lang2.forEach((item)=>{   // doesn't return any value
    console.log(item)
})

console.log(typeof values)
console.log(values)


const nums=[1,2,3,4,5,6,7,8,9,10]

const newNums=nums.filter((num)=> num>2)

const newNums2=nums.filter((num)=> {
    return num>5
})

console.log(newNums,newNums2);


// forEach

const nums1=[]

nums.forEach((num)=>{
    if(num>9){
        nums1.push(num)
    }
})

console.log(nums1);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008 },
    { title: 'Book Three', genre: 'History',
    edition: 2007 },
    { title: 'Book Four', genre: 'Non-Ficti',
    edition: 2010 },
    { title: 'Book Five', genre: 'Science',
    edition: 2014 },
    { title: 'Book Six', genre: 'Fiction',
    edition: 2010 },
    { title: 'Book seven', genre: 'History',
        edition: 2007 , t:'ritik'},
];

const userBooks=books.filter((bk)=>bk.genre=='History' && bk.t=='ritik')

const userBooks2=books.filter((bk)=>bk.publish>2000)

console.log(userBooks2);

console.log(userBooks);

