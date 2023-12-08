//export const processServerResponse = (res) => {
//  if (res.ok) {
//    return res.json();
//  }
//  return Promise.reject(`Error: ${res.status}`);
//};

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    // Assuming res.json() returns a Promise
    return res.json().then((errorData) => {
      const errorMessage = errorData.message || 'Unknown error';
      return Promise.reject(`Server error: ${res.status} - ${errorMessage}`);
    });
  }
};
