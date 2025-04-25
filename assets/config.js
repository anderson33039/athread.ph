window.addEventListener('load',() => {
    document.getElementById('loadingscr').style.display = 'none';
    window.location.href = 'mts/mainpage.html';
});
function thread(num) {
    var thread_code = {
        1 : '../mts/library/01.html',
        2 : '../mts/library/02.html',
        3 : '../mts/library/03.html',
        4 : "../mts/library/04.html",
    }
    window.location.href = thread_code[num];
}
function back() {
    window.location.href = "../../index.html";
};