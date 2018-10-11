function montrer_spoiler(value) {
    var actual = document.getElementById(value).style.visibility;
    if (actual == 'visible') {
        document.getElementById(value).style.visibility = 'hidden';
    } else {
        document.getElementById(value).style.visibility = 'visible';
    }
    ctn.display = ctn.display == 'none' ? 'block' : 'none';
}
