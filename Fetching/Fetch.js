const fetchData = async () => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  fetchData();  