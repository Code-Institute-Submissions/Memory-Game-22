let clickedCard = null;



let stopMultiClick = false;

let matchesMade = 0;

function onCardClicked(e) {
    const clicked = e.currentTarget;

    if (
        stopMultiClick ||
        clicked === clickedCard || clicked.className.includes('done')) {
        return;
    }


    clicked.className = clicked.className
        .replace('color-hidden', '')
        .trim();


    if (!clickedCard) {
        clickedCard = clicked;
    }
    else if (clickedCard) {

        
        if (clickedCard.getAttribute('data-color') !== clicked.getAttribute('data-color')) {
            console.log('cards do not match');
            stopMultiClick = true;
            setTimeout(() => {
                clickedCard.className = clickedCard.className.replace('done', '').trim() + 'color-hidden';
                clicked.className = clicked.className.replace('done', '').trim() + 'color-hidden';
                clickedCard = null;
                
                stopMultiClick = false;
            }, 450);
        }
        else {
            
            clickedCard = null;
            matchesMade ++;
            if (matchesMade === 8) {alert("Well done for completing medium difficulty! Why not try hard if you are feeling brave?!")}
            
        }
    }
}