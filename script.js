// Sample app data (replace with your own data or fetch it from a server)
const apps = [
  { name: 'App 1', description: 'This is the first app' },
  { name: 'App 2', description: 'This is the second app' },
  { name: 'App 3', description: 'This is the third app' },
];

// Function to display app listings
function displayApps(apps) {
  const appListContainer = document.getElementById('app-list');
  appListContainer.innerHTML = '';

  if (apps.length === 0) {
    const noResults = document.createElement('p');
    noResults.textContent = 'No apps found.';
    appListContainer.appendChild(noResults);
  } else {
    apps.forEach(app => {
      const appItem = document.createElement('div');
      appItem.classList.add('app-item');

      const appName = document.createElement('h3');
      appName.textContent = app.name;

      const appDesc = document.createElement('p');
      appDesc.textContent = app.description;

      appItem.appendChild(appName);
      appItem.appendChild(appDesc);
      appListContainer.appendChild(appItem);
    });
  }
}

// Function to filter apps based on search query
function searchApps(query) {
  const filteredApps = apps.filter(app => {
    const appName = app.name.toLowerCase();
    return appName.includes(query.toLowerCase());
  });

  displayApps(filteredApps);
}

// Event listener for search button click
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  const searchInput = document.getElementById('search-bar');
  const query = searchInput.value.trim();
  searchApps(query);
});

// Event listener for enter key press in search input
const searchInput = document.getElementById('search-bar');
searchInput.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim();
    searchApps(query);
  }
});

// Initial display of all apps
displayApps(apps);
