getData();

const selfies = [];

document.getElementById('time').addEventListener('click', event => {
  sortData((a, b) => b.time - a.time);
});

document.getElementById('landmark').addEventListener('click', event => {
  sortData((a, b) => {
    if (b.landmark > a.landmark) return -1;
    else return 1;
  });
});

function sortData(compare) {
  for (let item of selfies) {
    item.elt.remove();
  }
  selfies.sort(compare);
  for (let item of selfies) {
    document.body.append(item.elt);
  }
}

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('p');
    const landmark = document.createElement('div');
    const geo = document.createElement('div');
    const date = document.createElement('div');
    const image = document.createElement('img');

    landmark.textContent = `landmark: ${item.landmark}`;
    geo.textContent = `${item.lat}°, ${item.lon}°`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    image.src = item.image64;
    image.alt = 'Dan Shiffman making silly faces.';

    root.append(landmark, geo, date, image);

    selfies.push({ elt: root, time: item.timestamp, landmark: item.landmark });
    document.body.append(root);
  }
  console.log(data);
}
