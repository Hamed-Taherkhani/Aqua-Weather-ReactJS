const storageObj = window.localStorage;

export function saveInLocalStorage(key, value) {
  storageObj.setItem(key, JSON.stringify(value));
}

export function append(key, value) {
  // Get item by key in string:
  let itemStr = storageObj.getItem(key);

  // Remove repeated similar object in locations list:
  value.forEach((element) => {
    itemStr = itemStr.replaceAll(JSON.stringify(element) + ",", "");
  });

  // Parse item from string to JSON:
  const itemJSON = JSON.parse(itemStr);

  // If locations was more than 5:
  if (itemJSON.length > 4)
    // Remove elements with index of more than 4:
    itemJSON.splice(4);

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

  if (json.length === 0) removePair(key);
  else storageObj.setItem(key, JSON.stringify(json));
}

export function removePair(key) {
  if (!isKeyRegistered(key)) return;

  const item = storageObj.getItem(key);
  storageObj.removeItem(key);
}

export function getItem(key) {
  if (!isKeyRegistered(key)) return undefined;

  const item = storageObj.getItem(key);
  return JSON.parse(item);
}

export function isKeyRegistered(key) {
  const item = storageObj.getItem(key);

  if (item === null) return false;
  else return true;
}
