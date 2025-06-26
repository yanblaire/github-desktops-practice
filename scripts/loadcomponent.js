// loadComponent.js

const LoadComponent = async (fileName, className) => {
    try {
      const response = await fetch(fileName);
      const text = await response.text();
      const elements = document.getElementsByClassName(className);
  
      Array.from(elements).forEach((el) => {
        el.innerHTML = text;
      });
    } catch (error) {
      console.error(`Error loading ${fileName}:`, error);
    }
  };
  