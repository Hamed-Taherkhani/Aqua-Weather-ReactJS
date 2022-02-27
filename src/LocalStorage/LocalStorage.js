const storageObj = window.localStorage;

export function saveInLocalStorage(key, value) {
  storageObj.setItem(key, JSON.stringify(value));
}

export function append(key, value) {
  // Get item by key in string:
  const itemStr = storageObj.getItem(key),
    // Parse item from string to JSON:
    itemJSON = JSON.parse(itemStr);

  // Push and append new value to JSON:
  itemJSON.unshift(...value);

  // Convert JSON to string and
  // update key's value in Local Storage:
  storageObj.setItem(key, JSON.stringify(itemJSON));
}

export function removeFromArray(key, index) {
  if (!isKeyRegistered(key)) return;

  const item = storageObj.getItem(key),
    json = JSON.parse(item);

  json.splice(index, 1);

  storageObj.setItem(key, JSON.stringify(json));
}

export function removePair(key) {
  if (!isKeyRegistered(key)) return;

  const item = storageObj.getItem(key);
  storageObj.removeItem(key);
}

export function isKeyRegistered(key) {
  const item = storageObj.getItem(key);

  if (item === null) return false;
  else return true;
}
