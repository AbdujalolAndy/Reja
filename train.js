// E-TASK: E-Task: Shunday function tuzing, u bitta string argumentni
//  qabul qilib osh stringni teskari qilib return qilsin

// masalan: getReverse("hello") return qilsin "olleh"
const message = "Hello, this is me Andy";

async function getReverse(txt) {
  try {
    if (txt == "string" || txt === "") throw new Error("Something went wrong with text");
    else return txt.split("").reverse().join("");
  } catch (error) {
    throw error;
  }
}

async function run() {
  const reversedWord = await getReverse(message);
  return reversedWord;
}

run()
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
