export const createEle = (type, classes=null) => {
    let newEle = document.createElement(type)
    // apply classes if there are any
    if (classes) {
        newEle.classList.add(classes)
    }
    return newEle; 
}

