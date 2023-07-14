window.onload = function() {
    let contentDiv = document.getElementById('content');
    
    let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices condimentum libero, ac ultricies arcu semper sit amet. Integer congue dapibus quam, non pellentesque ante tincidunt a. Donec finibus, ligula a tincidunt luctus, felis massa pellentesque mi, non mollis risus justo quis massa. Nulla facilisi. Morbi pulvinar ex non felis scelerisque interdum. In venenatis vehicula lacus, et condimentum nunc semper a. Vivamus nec urna sed urna semper interdum quis in erat. Suspendisse sed sem vitae augue porta commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eget lacus velit.';

    for (let i = 0; i < 5; i++) {
        let paragraph = document.createElement('p');
        paragraph.textContent = loremIpsum;
        contentDiv.appendChild(paragraph);
    }
}
