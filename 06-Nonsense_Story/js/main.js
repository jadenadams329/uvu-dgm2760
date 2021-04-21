
document.querySelector('#company').innerHTML = "Nonsense Story";

document.querySelector('header > h2').innerText = "String Manipulation";

document.querySelector('#pageTitle').innerHTML = "The Tale of Tales";



function tellStory(){

    let nouns = document.querySelector('#noun');
    let lowerCaseNouns = nouns.value.toLowerCase();
    console.log(lowerCaseNouns)
    let nounArray = lowerCaseNouns.split(/\s+/);
    console.log(nounArray)

    let adjectives = document.querySelector('#adjective')
    let lowerCaseAdjectives = adjectives.value.toLowerCase();
    let adjectiveArray = lowerCaseAdjectives.split(/\s+/);

    let verbs = document.querySelector('#verb')
    let lowerCaseVerbs = verbs.value.toLowerCase();
    let verbArray = lowerCaseVerbs.split(/\s+/);

    const myStory = `Once upon a time there was a ${adjectiveArray[0]} ${nounArray[0]}.
    This ${adjectiveArray[0]} ${nounArray[0]} was very good friends with a ${adjectiveArray[1]} ${nounArray[1]}.
    Now these two like to cause trouble. So they ${verbArray[0]} to prank a ${adjectiveArray[2]} ${nounArray[2]}.
    But the ${adjectiveArray[1]} ${nounArray[1]} hated ${verbArray[0]} so they ${verbArray[1]} to prank the  ${adjectiveArray[2]} ${nounArray[2]} instead.
    They pranked  ${adjectiveArray[2]} ${nounArray[2]} by trying ${verbArray[2]} it with green eggs and ham. 
    The prank back fired and the ${adjectiveArray[0]} ${nounArray[0]}, ${adjectiveArray[1]} ${nounArray[1]}, and ${adjectiveArray[2]} ${nounArray[2]} became the best of friends.
    The End.`

  document.querySelector('#story').innerHTML = myStory;
}




