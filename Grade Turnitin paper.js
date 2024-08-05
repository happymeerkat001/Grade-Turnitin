  let bodyText = document.querySelector('#body').innerText;

  // Step 2: Normalize the text
  const normalizedText = bodyText.toLocaleLowerCase();
  
  // Step 3: Define your keywords
  const keywords = ['celebrate', 'commemorate', 'question', 'questions', 'air force association', 'legion', 'veterans', 'tibbets', 'dole', 'gingrich', 'limbaugh', 'culture', 'vietnam', 'right', 'left', 'gay', 'gays', 'historians', 'revision', 'correct', 'fragmented', 'identity', 'destablize', 'myth', 'origin', 'development', 'doubt', 'uncertainty', 'world war' ]; // change your keywords
  
  // Step 4: Search for keywords
  const foundKeywords = keywords.filter(keyword => {
    return normalizedText.includes(keyword);
  });
  
  // Step 5: Calculate the percentage of keywords found
  const percentage = (foundKeywords.length / keywords.length) * 100 + '%'

  // Step 6: Log the result
  console.log(`Found Keywords: ${foundKeywords}`);
  alert(`Percentage of Keywords Found: ${percentage}`)
// Step 1: Extract text from the body element
