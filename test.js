let longStr = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowels = ["e","a","i","o","u"]

let selectVowel = 0
let vowelIndex = 0
let highIndex = 0

for (selectVowel; selectVowel < 5; selectVowel++)  {
    vowelIndex = longStr.lastIndexOf(vowels[selectVowel])
    if (vowelIndex > highIndex)    {
        highIndex = vowelIndex
    }
}
console.log(selectVowel)
console.log(vowelIndex)
console.log(highIndex)
console.log(highIndex)
