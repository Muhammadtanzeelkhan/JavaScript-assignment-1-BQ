// 1. Check if string contains "JavaScript"
function containsJavaScript(str) {
  return str.includes("JavaScript");
}
console.log(containsJavaScript("Hello, welcome to JavaScript!"));

// // 2. Convert to uppercase
function toUppercase(str) {
  return str.toUpperCase();
}
console.log(toUppercase("hello world"));

// // 3. Remove spaces
function trimSpaces(str) {
  return str.trim();
}
console.log(trimSpaces(" Learn JS "));

// // 4. Compare ignoring case
function compareIgnoreCase(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compareIgnoreCase("React", "react"));

// // 5. Count vowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("JavaScript is fun"));

// // 6. extract and return "example.com".
function getDomain(email) {
  return email.substring(email.indexOf("@") + 1);
}
console.log(getDomain("user@example.com"));

// // 7. Greeting
function getGreeting(hour) {
  if (hour < 12) return "Good morning"; // Agar hour 12 se chhota hai (matlab raat 12 baje se dopahar 12 baje tak), to function "Good morning" return karega.
  if (hour < 18) return "Good afternoon"; //Agar hour 12 se bada ya barabar ho aur 18 (shaam 6 baje) se chhota ho, to function "Good afternoon" return karega.
  return "Good evening"; //Agar upar dono condition false ho gayi (matlab hour 18 ya usse zyada hai), to "Good evening" return karega.
}
console.log(getGreeting(10));
console.log(getGreeting(15));
console.log(getGreeting(20));

// // 8. Password strength
function checkPasswordStrength(password) {
  const hasNumber = /\d/.test(password);  // check karega password me number hai ya nahi
  if (password.length >= 8 && hasNumber) {
    return "Strong";   // agar password 8 ya us se zyada characters ka hai + number hai → Strong
  }
  return "Weak";       // warna Weak
}
console.log(checkPasswordStrength("abc12345")); // Strong
console.log(checkPasswordStrength("abcdef"));   // Weak

// // 9. Replace spaces with hyphens
function replaceSpacesWithHyphens(str) {
  return str.split(" ").join("--");
}
console.log(replaceSpacesWithHyphens("Learn JavaScript step by step"));

// // 10. Starts with F
function startsWithF(str) {
  return str.startsWith("F");
}
console.log(startsWithF("Frontend"));
// for exmaple dosre function mein  f nahi hai to false return karega
console.log(startsWithF("Backend"));  
