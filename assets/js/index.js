console.log("hello");

function onCardClicked(e) {
    const target = e.currentTarget;
    console.log('clicked', e.currentTarget);
    target.className = target.className
        .replace('color-hidden', '')
        .trim();
}