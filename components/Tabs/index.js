// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//axos .get add the url given
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        const topics = res.data.topics
        //maping over the data given for topics and adding it to the given element
        topics.map(topic => {
            const topicDiv = document.querySelector('.topics')
        //by adding the parameter (topic) you can add this later so that in your function you will be pulling the topic date into the text content of the component
        topicDiv.appendChild(newTab(topic))
        })
    })
    .catch(err => console.log(err))

function newTab(topic) {
        //<div class="tab">topic here</div>
        const divTab = document.createElement('div')
        divTab.classList.add('tab')
        divTab.textContent = topic

        return divTab
    }