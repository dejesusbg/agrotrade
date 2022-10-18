function mdElevate(query){
    const elements = document.querySelectorAll(query);
    elements.forEach(e => e.classList.add('md-elevation'));
}

mdElevate('button')

function mdTypography(query, token){
    const elements = document.querySelectorAll(query);
    elements.forEach(e => e.classList.add(`md-${token}`));
}

mdTypography('button', "label-l")