
import data from './data.js'

const buildCard = (card) => {

    // declare elements 
    const div = document.createElement('div');
    const info = document.createElement('div')
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const button = document.createElement('button')
    
    // append elements recently created
    const cardd = document.querySelector('.cards');
    cardd.append(div);
    div.append(img);
    div.append(info);
    info.append(h4);
    info.append(p);
    info.append(button);
    button.append(a);
    
    // set atteributes
    div.setAttribute("class", "card");
    info.setAttribute("class", "info");
    h4.innerHTML = card.name;
    p.innerHTML = card.para;
    a.innerHTML = "Open"
    img.setAttribute("src", card.pic);
    a.setAttribute("href", card.link);
    a.setAttribute("target", "_blank");
}

data.forEach(card => buildCard(card))
