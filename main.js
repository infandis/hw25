const emojisContainer = document.querySelector("#emoji-vote .emojis");
    const voteCountContainers = document.querySelectorAll("#emoji-vote .vote-count");
    const voteCounts = new Array(voteCountContainers.length).fill(0);

    function vote(event) {
      const emoji = event.target;
      const emojiIndex = Array.from(emojisContainer.children).indexOf(emoji);
      voteCounts[emojiIndex]++;
      renderVoteResults();
    }

    function renderVoteResults() {
      for (let i = 0; i < voteCountContainers.length; i++) {
        const voteCountContainer = voteCountContainers[i];
        voteCountContainer.innerText = voteCounts[i];
      }
    }

    emojisContainer.addEventListener("click", vote);
    renderVoteResults();
    
