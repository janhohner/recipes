module.exports = (Ferdi) => {
  const getMessages = function getMessages() {
    const marker = document.querySelector('#notifications-link .badge.visible');
    
    if (marker) {
    	Ferdi.setBadge(0, 1);
    } else {
    	Ferdi.setBadge(0, 0);
    }
  };

  Ferdi.loop(getMessages);
};
