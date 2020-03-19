function getFirstSelector(selector) {
    return document.querySelector(`${selector}`)
  }

  function nestedTarget() {
      return document.querySelector('#nested .target')
  }
function increaseRankBy(n){
    let lis = document.querySelectorAll('ul.ranked-list')
    let num = []
    for (let i = 0; i < lis.length; i++) {
        let lisNum = lis[i].querySelectorAll('li')
        for (let j = 0; j < lisNum.length; j++){
            num.push(lisNum[j])
        }
    }
    num.forEach(function(num) {
        num.innerHTML = parseInt(num.innerHTML) + n
    })
}

function deepestChild(){
    const grand = document.getElementById('grand-node')
    return grand.querySelector('div div div div div')
}