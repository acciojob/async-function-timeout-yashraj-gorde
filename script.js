//your JS code here. If required.
document.getElementById("btn").addEventListener("click", handleSubmit);

async function handleSubmit() {
  const text = document.getElementById("text").value;
  const delay = Number(document.getElementById("delay").value);
  const output = document.getElementById("output");

  // wait for delay before displaying message
  await wait(delay);

  output.innerText = text;
}

// function returning a promise that resolves after given delay
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
