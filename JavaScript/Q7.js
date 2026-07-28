///*//write a program to check the string is in anagram

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");

    if (str1.length !== str2.length) {
        return false;
    }

    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");

    return str1 === str2;
}

// Example
let s1 = "listen";
let s2 = "silent";

if (isAnagram(s1, s2)) {
    console.log("Anagram");
} else {
  
    console.log("Not Anagram");
}\