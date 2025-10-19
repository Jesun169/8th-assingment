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

export { addToStoreDB, getInstalledApp };
