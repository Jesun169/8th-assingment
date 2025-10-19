const getInstalledApp = () => {
  const storedAppSTR = localStorage.getItem("installed");
  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedAppData = getInstalledApp();

  if (storedAppData.includes(id)) {
    alert("Already Installed");
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("installed", data);
  }
};

const removeFromStoreDB = (id) => {
  const storedAppData = getInstalledApp().map(Number);
  const updatedData = storedAppData.filter(appId => appId !== id);
  localStorage.setItem('installed', JSON.stringify(updatedData));
};

export { addToStoreDB, getInstalledApp , removeFromStoreDB};
