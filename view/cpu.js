function messager(percent) {
  document.getElementById('cpu').style.height = percent + '%';
  document.getElementById('text').innerHTML = Math.round(percent) + '%';
}