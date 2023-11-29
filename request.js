async function response() {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    const data = await response.json();
    console.log(data);
  } catch (err){
    
  }
}

response();
