const emojis = [
    "🍔",
    "🍕",
    "🍣",
    "🍜",
    "🍩",
  ];

let voteCounts = new Array(emojis.length).fill(0);
function vote(index) {
  voteCounts[index]++;
  renderVoteResults();
}


function renderVoteResults() {
  const emojisContainer = document.querySelector("#emoji-vote .emojis");
  const voteCountContainer = document.querySelector("#emoji-vote .vote-count");
  
  emojisContainer.innerHTML = "";
  voteCountContainer.innerHTML = "";

  emojis.forEach((emoji, index) => {
    const emojiElem = document.createElement("div");
    emojiElem.innerText = emoji;
    emojiElem.classList.add("emoji");
    emojiElem.addEventListener("click", () => {
      vote(index);
    });
    emojisContainer.appendChild(emojiElem);
    
    const voteCountElem = document.createElement("div");
    voteCountElem.innerText = voteCounts[index];
    voteCountContainer.appendChild(voteCountElem);
  });
}

renderVoteResults();