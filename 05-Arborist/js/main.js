
document.querySelector('#company').innerHTML = "The Arborist";

document.querySelector('header > h2').innerText = "Events and Arrays";

document.querySelector('#pageTitle').innerHTML = "The Arborist";

let trees = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector("#displayResults")

//Display list of trees
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long`
}

listTrees();

//Add Redwood to end
document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood');
    listTrees();
}

//Add pear to the start
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees();
}

//Remove first tree from array
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0){
        trees.shift();
        listTrees();
    } else {
        errorElement.textContent = 'No more trees in list, cannot remove first tree'
    }
}

//Remove 2nd tree from array
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1){
        trees.splice(1,1);
        listTrees();
    } else {
        errorElement.textContent = 'Less than two trees available, cannot removed second tree' 
    }
}

//Remove last tree from array
document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0){
        trees.pop();
        listTrees();
    } else {
        errorElement.textContent = 'No more trees in list, cannot remove last tree'
    }
}

//Sort trees a to z
document.querySelector('#sortTrees').onclick = () => {
    if (trees.length >= 2){
        trees.sort((a,b) => a.localeCompare(b))
        listTrees();
    } else {
        errorElement.textContent = 'Not enough trees to sort, add a tree and try again'
    }
}

//Tree's to lower case
document.querySelector('#lowerTrees').onclick = () => {
    if (trees.length > 0){
        let newTrees = trees.map(tree => tree.toLowerCase());
        trees = newTrees
        console.log(trees)
        listTrees()
    } else {
        errorElement.textContent = 'No trees to make lower case. Add a tree and try again'
    }
    
}

//Name of tree number 3
document.querySelector('#showName3').onclick = () => {
    if (trees.length >= 3) {
        displayResults.innerHTML = `${trees[2]}`
    } else {
        errorElement.textContent = 'Less than 3 trees in list, add a tree and try again'
    }
}

//Name of tree number 4
document.querySelector('#showName4').onclick = () => {
    if (trees.length >= 4) {
        displayResults.innerHTML = `${trees[3]}`
    } else {
        errorElement.textContent = 'Less than 4 trees in list, add a tree and try again'
    }
}



