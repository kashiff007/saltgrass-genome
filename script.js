function searchGenome() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const genomeItems = document.querySelectorAll('.genome-item');

  genomeItems.forEach(item => {
    const genomeName = item.dataset.genome.toLowerCase();
    if (genomeName.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

