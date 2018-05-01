const data = {
    words: [
        {id: "1", hasAlreadyCollected: true, numberOfTimesLearned: 1},
        {id: "2", hasAlreadyCollected: false, numberOfTimesLearned: 3},
        {id: "3", hasAlreadyCollected: true, numberOfTimesLearned: 0},
        {id: "4", hasAlreadyCollected: false, numberOfTimesLearned: 1},
        {id: "5", hasAlreadyCollected: true, numberOfTimesLearned: 1},
        {id: "6", hasAlreadyCollected: false, numberOfTimesLearned: 1},
        {id: "7", hasAlreadyCollected: true, numberOfTimesLearned: 1},
        {id: "8", hasAlreadyCollected: false, numberOfTimesLearned: 1},
        {id: "9", hasAlreadyCollected: false, numberOfTimesLearned: 1}
    ],
    ids: [
        "1",
        "3",
        "5"
    ]
};

function updateWords(ids, words) {
    words.forEach(word => {
        ids.forEach(id => {
            if (word.id === id) {
                word.numberOfTimesLearned++;
            }
        })
    });
    return words;
}

function findValidWords(ids, words) {
    const wordsToReturn = [];
    words.forEach(word => {
        if (word.numberOfTimesLearned > 0) {
            wordsToReturn.push(word.id);
        }
    })
}

function wholeThing(ids, words) {
    console.log(ids);
    const updatedWords = updateWords(ids, words);
    findValidWords(ids, updatedWords);
}

wholeThing(data.ids, data.words);
