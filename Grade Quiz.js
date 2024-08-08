(function() {
  // Function to execute the grading script
  function executeGrading() {
    // Capture all the text content within all divs with class "vtbegenerated"
    let contentDivs = document.querySelectorAll('div.vtbegenerated');
    let textContent = '';
    
    contentDivs.forEach(div => {
      textContent += ' ' + div.innerText;
    });
    
    console.log('Text content of the main content area retrieved:', textContent);

    // Step 1: Normalize the text
    const normalizedText = textContent.toLowerCase();
    console.log('Normalized text:', normalizedText);
    
    // Step 2: Define your keywords
    const keywords = ['machine', 'societ', 'modif', 'salmon', 'mitigat'];
    
    // Step 3: Search for keywords
    const foundKeywords = keywords.filter(keyword => normalizedText.includes(keyword));
    
    // Step 4: Calculate the percentage of keywords found
    let percentage = (foundKeywords.length / keywords.length) * 100;
    
    // Step 5: Add 20 points to the final percentage
    percentage += 20;
    
    // Step 6: Log the result and alert the user
    console.log(`Found Keywords: ${foundKeywords}`);
    console.log(`Final Percentage (with 20 points added): ${percentage}%`);
    
    // Step 7: Alert the user with the results
    alert(`Found Keywords: ${foundKeywords}\nFinal Percentage (with 20 points added): ${percentage}%`);
  }

  // Initial check and execute grading
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('Document is ready. Executing initial grading...');
    executeGrading();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM content loaded. Executing initial grading...');
      executeGrading();
    });
  }
})();