SENSEO.Panel = {

  panelDocument: null,

  container: null,

  panels: [],
  
  createContainer: function(panel) {
  
    SENSEO.Panel.panelDocument = panel.document;
    
    var containerDiv = SENSEO.Panel.panelDocument.createElement('div');
    
    containerDiv.id = 'senseo-panel-container';
    
    containerDivElement = panel.panelNode.appendChild(containerDiv);
    
    SENSEO.Panel.container = containerDivElement;
      
  },
  
  resetContainer: function() {
  
    if (SENSEO.Panel.container) {
      
      SENSEO.Panel.container.innerHTML = '';
    
    }
      
  },
  
  addPanel: function(panelName) {

    var panelDiv = SENSEO.Panel.panelDocument.createElement('div');
    
    panelDiv.id = panelName;

    SENSEO.Panel.container.appendChild(panelDiv);
    
    return panelDiv;
  
  },
  
  renderPanel: function(panelName, panelContent) {
  
    SENSEO.Panel.resetContainer();
  
    var panelDiv = SENSEO.Panel.addPanel(panelName);
  
    panelDiv.innerHTML = panelContent;
    
    panelDiv.style.display = 'block';
  
  }
  
};